---
sidebar_position: 6
description: Nevermined enables the execution of computation remotely in a privacy preserving manner
---

# Remote Computation

When sharing data is not an option because of privacy constraints, permitting an algorithm to compute on a data set you can’t see is a rational alternative. There are many different possibilities and technical solutions for this depending on the computation being executed, like a simple aggregation or a fully-fledged analytics process using Spark or similar, as well as the privacy constraints of the data.

To deliver this type of sophisticated solution involves the orchestration of computation techniques, **Federated Learning**, and on-chain computation. What pattern is leveraged depends entirely on the use case.

What is important is to understand the use case, what limitations or requirements are implied, and how to enable computation in a frictionless manner.

The main intention here is to support use cases such as the following:

* I work in the payments department of a bank. I have a model that can detect 50% of the frauds happening using the bank’s credit card transactions. If I could train my model in a privacy-preserving manner on top of other banks’ credit card transactions, I could improve the accuracy of my model, detect more fraudulent transactions and save a pile of money. I could also sell my model to the banks that share their data!
* I work in a distribution center where COVID vaccines are received before local distribution. I would like to run a query against the temperature sensors of the carrier to check that temperature was always within the appropriate temperature range, and flag for further analysis any shipment that fails acceptance criteria.

For example, in the drug shipping use case, being able to orchestrate temperature threshold calculations across numerous providers’ datasets could help flag a problem with the shipment before it becomes a problem. However, knowing which dataset provided the flagging information could be kept private through aggregation techniques, etc. This type of capability could limit the risk exposure of any given data provider within the supply chain.

## Example in action: Credit Card fraud dectection

In this example we are going to allow the training of a Credit Card Fraud Detection model on top of private data of different banks without moving this data around. Nevermined allows to achieve that via **Federated Learning** orchestration.

One of the biggest traditional problems is when we try to train a model and we don't have enough amounts of data. In our example imagine we have two banks: Bank A and Bank B. Both of these banks have large amounts of credit card transactions that they aren’t really leveraging for machine learning purposes because they either lack the data science expertise or they are afraid of the penalties that may arise from mishandling the data under data protection laws.

Now we introduce a third party: a Data Scientist. The Data Scientist wants to build a service that can automatically flag fraudulent credit card transactions with a high degree of accuracy. Knowing the typical features that should be present in every credit card transaction, he already built a model using scikit-learn.

Now the biggest challenge becomes getting access to real data so that he can use it to train the model to be able to make predictions with a high degree of accuracy. Banks won’t and can’t share this type of data with third parties, so the data scientist hits a roadblock.

Currently, there exists the capability to perform privacy-preserving machine learning through Federated Learning. Federated Learning can be seen as a form of privacy-preserving distributed machine learning. A machine learning model is trained in parallel over multiple data sets. The individual weights resulting from the training over each dataset are then aggregated in a privacy-preserving manner and this produces the final trained model.

However, orchestrating this type of analytical application is difficult. Orchestrating this type of analytical application across disparate datasets controlled by independent counterparties is virtually impossible.

To summarize our use-case:

* We have a **data scientist that requires a large amount of private data** to train a model
* We have **two distinct banks**, Bank A and Bank B, **with their own distinct infrastructure and data assets**, and they would like to monetize their data
** We need a system that allows for: interoperable data sharing between multiple parties; data monetization; an interface to run code spanning multiple organizations

### How Nevermined helps to resolve this

With Nevermined’s Data Sharing capabilities, both Bank A and B can both advertise their assets and monetize their data without having to move or change their existing infrastructure, this turning them into data providers. And Nevermined’s **Data In Situ Computation (DISC)** capability allows for consumers of the data, like the Data Scientist, to run generic computations (inside the scope allowed by the data providers) **without ever having to access the data directly**.

This means that private data remains private as it does not need to move. Now the Data Scientist has a single interface that he can use to train his model over data from multiple, wholly distinct and independent organizations. All the heavy lifting of orchestrating a Federated Learning session spanning multiple organizations is handled by Nevermined. This means the Data Scientist only needs to reuse his existing machine learning code and tools with little to no modification.