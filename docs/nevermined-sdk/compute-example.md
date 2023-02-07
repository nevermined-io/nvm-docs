---
sidebar_position: 5
---

# Compute Example

## Introduction

In this example we will introduce you to Nevermined compute capabilities (Nvm DISC), using Nevermined SDK. You will see how easy is to publish the assets needed to define a compute workflow and to run an algorithm over a set of data,

## Requirements
Before you start with this demo you require:

* [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) needs to be installed
* The Nevermined artifacts, you can find the script [here](https://github.com/nevermined-io/create-nevermined-react/blob/main/scripts/download-artifacts.sh). To use the script run `./download-artifacts.sh [VERSION OF THE CONTRACT] [NETWORK]`
* A K8s instance, or minikube if you are testing locally, with [Argo Workflows](https://argoproj.github.io/argo-workflows/quick-start/) deployed
* A [Nevermined Node](https://github.com/nevermined-io/node/) instance properly configured, with *ENABLE_COMPUTE = true* and defining the variables to connect with Argo Workflows (*ARGO_HOST, ARGO_NAMESPACE, ARGO_AUTH_TOKEN*)


## Nevermined configuration
The first step to run this example is to define the configuration [options needed](./api-reference/classes/Config.md) to initialize the [Nevermined SDK](./intro.md).

```ts
const configBase: NeverminedOptions = {
    web3ProviderUri: 'http://contracts.nevermined.localnet',
    marketplaceUri: 'http://marketplace.nevermined.localnet',
    neverminedNodeUri:
        process.env.NEVERMINED_NODE_URI || 'http://node.nevermined.localnet',
    neverminedNodeAddress: '0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0',
    marketplaceAuthToken: undefined,
    artifactsFolder: './artifacts',
    verbose: logLevel
}
```


## Publish the Compute Asset

Once we have the Nevermined SDK instance initialized we can start to publish the assets needed to compute a set of data. 

The fist one is the data itself. Here you have an example of metadata. Pay attention to the *type='compute'* line. It means that the data is only available to run an algorithm using *NVM DISC* 

```ts
computeMetadata = {
            userId,
            main: {
                name: 'Nevermined protocol white paper',
                dateCreated: '2012-02-01T10:55:11Z',
                author: 'Mario',
                license: 'CC0: Public Domain',
                files: [
                    {
                        index: 0,
                        contentType: 'text/text',
                        checksum: `0000000000000000000000000000000`,
                        checksumType: 'MD5',
                        contentLength: '12057507',
                        url: 'https://raw.githubusercontent.com/nevermined-io/tools/master/README.md'
                    }
                ],
                type: 'compute'
            }
}
```

In the next lines we define the attributes and create the asset using a *publisher* account

```ts
const computeAttributes = AssetAttributes.getInstance({
            metadata: computeMetadata,
            price: assetPrice,
            providers: [config.neverminedNodeAddress]
        })
computeDdo = await nevermined.compute.create(computeAttributes, publisher)
```


## Publish the Algorithm Asset

The second asset to publish is the algorithm, in this case a simple word count implemented with a python script. You can see in the metadata we need to set *type='algorithm'*

```ts
transformMetadata = {
            userId,
            main: {
                author: 'John Doe',
                dateCreated: '2019-02-08T08:13:49Z',
                license: 'CC-BY',
                name: 'My workflow',
                files: [
                    {
                        index: 0,
                        contentType: 'text/text',
                        checksum: `0000000000000000000000000000000`,
                        checksumType: 'MD5',
                        contentLength: '12057507',
                        url: 'https://raw.githubusercontent.com/nevermined-io/docs-legacy/515d4f5da771dae0a4827ba757ce9b018e66276f/resources/word_count.py'
                    }
                ],
                type: 'algorithm',
                algorithm: {
                    language: 'python',
                    format: 'py',
                    version: '0.1',
                    entrypoint: 'python word_count.py*',
                    requirements: {
                        container: {
                            image: 'python',
                            tag: '3.8-alpine',
                            checksum:
                                'sha256:53ad3a03b2fb240b6c494339821e6638cd44c989bcf26ec4d51a6a52f7518c1d'
                        }
                    }
                }
            }

}

```
The code to publish the asset is exactly the same. As you can see, to publish different types of assets in Nevermined you just need to set the metadata properly.
```ts
const assetAttributes = AssetAttributes.getInstance({
            metadata: transformMetadata,
            providers: [config.neverminedNodeAddress]
})
algorithmDdo = await nevermined.assets.create(assetAttributes, publisher)
```

## Publish the Workflow Asset

The last asset we need is the workflow. This asset binds the data with the algorithm(s). A workflow can define multiple stages, each of one defines an input (an array of compute assets), a transformation (an algorithm asset), and an output.

The output will be a new asset published in Nevermined, so as you can see in the output section of the stage we indicate the URLs to publish a new asset in the Nevermined Marketplace API and to access the asset through Nevermined Node.

```ts
workflowMetadata = {
            userId,
            main: {
                author: 'John Doe',
                dateCreated: '2019-02-08T08:13:49Z',
                datePublished: '2019-05-08T08:13:49Z',
                license: 'CC-BY',
                name: 'My workflow',
                type: 'workflow',
                workflow: {
                    coordinationType: 'argo',
                    stages: [
                        {
                            index: 0,
                            stageType: 'Filtering',
                            input: [
                                {
                                    index: 0,
                                    id: computeDdo.id
                                }
                            ],
                            transformation: {
                                id: algorithmDdo.id
                            },
                            output: {
                                metadataUrl:
                                    'http://marketplace.nevermined.localnet/api/v1/metadata/assets/ddo/',
                                accessProxyUrl: 'http://node.nevermined.localnet',
                                metadata: {} as any
                            }
                        }
                    ]
                }
            }
}
```

And the code to publish the asset:
```ts
const workflowAttributes = AssetAttributes.getInstance({
            metadata: workflowMetadata,
            providers: [config.neverminedNodeAddress]
        })
workflowDdo = await nevermined.assets.create(workflowAttributes, publisher)
```

## Order the Compute Asset

Until now we have published the assets acting as a *publisher*. To show how to run a compute job, now we will take a *consumer* role 

The first step for the consumer is to order the compute data. Nevermined will create a Service Agreement between the publisher and the consumer, and the ammount of tokens indicated in the asset price will be transfered from the consumer account to the publisher one.
```ts
agreementId = await nevermined.compute.order(computeDdo.id, consumer)
```

## Execute the Compute Job

Once we have the agreement id, we can use it to start a workflow over the compute data. For that we use the *compute.execute* method.

The sdk will return an Id for the new job created in Argo Workflows. 

```ts
 jobId = await nevermined.compute.execute(
            agreementId,
            workflowDdo.id,
            consumer
        )

```

## Check the logs and the status of the job

Take into account that the execute method is asynchronous, but when the Promise is resolved that does not mean the compute job is finished, but that it was correctly created and the job is running on Argo Workflows. Depending of the complexity of the algorithm and the data, the job can take several minutes to finish.

With the job Id you can track the status of the job and even see the logs of the K8s pods that are executing the different steps of the job

```ts
statusObject = await nvm.compute.status(
                agreementId,
                jobId,
                consumer
            )
console.log(statusObject?.status)
```

```ts
const logs = await nevermined.compute.logs(agreementId, jobId, consumer)
console.log(logs)
```

## Get the result

Once the compute job have finished we can use the status method get the did of the asset that contains the result of the compute. With this did we can download the data using the *assets.download* method of Nevermined SDK.

In the following code you can see an implementation of a basic method, *getResultDidFromStatus*, that waits until the job is finalized and returns the did of the new asset within an status object.


```ts
const result = await getResultDidFromStatus(
            jobId,
            agreementId,
            consumer,
            nevermined
        )
if (result.status === 'Succeeded') {
      const path = await nevermined.assets.download(result.did, consumer, downloadPath)
      console.log(`Result downloaded to ${path}`)
}

```

```ts
const getResultDidFromStatus = async (
        argoWorkflowId: string,
        agreementID: string,
        account: Account,
        nvm: Nevermined,
        maxAttempts = -1,
        wait = 5000
    ): Promise<any> => {
        let resultDid = ''
        let statusObject
        const statusResponse = ''
        let currentStatus = ''
        let computeFinished = false
        let attemp = 0

        while (!computeFinished && (attemp < maxAttempts || maxAttempts === -1)) {
            attemp++
            await new Promise(f => setTimeout(f, wait))

            statusObject = await nvm.compute.status(
                agreementID,
                argoWorkflowId,
                account
            )
            currentStatus = statusObject?.status

            if (currentStatus === 'Succeeded' || currentStatus === 'Failed') {
                resultDid = statusObject?.did
                computeFinished = true
            }
        }

        if (!computeFinished) {
            console.log(
                `Compute not finished for workflow ${argoWorkflowId}. Last known status: ${JSON.stringify(
                    statusObject
                )}`
            )
        } else if (currentStatus === 'Succeeded') {
            console.log(`Compute finished succesfully. Did published: ${resultDid}`)
        }

        return { status: currentStatus, completeStatus: statusObject, did: resultDid }
    }

```