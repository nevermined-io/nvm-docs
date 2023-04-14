---
sidebar_position: 2
---

# Getting Started

The Nevermined Proxy (aka `proxy`) allows to interact with HTTP web services to which their access is protected and restristed to users holding a NFT subscription.

The proxy allow the utilization of these web services when the user sending a HTTP request sends a JWT message that demonstrates that holds a valid NFT subscription for the specific web services is trying to get access.

## Pre-requisites

The Nevermined Proxy is a solution that combines 2 different components providing that proxy functionality:

* An OAUTH Introspection service that validates JWT user messages. This oauth service is built using Typescript.
* A NGINX instance configured to integrate the above oauth service as authorization mechanism

## How to run the Proxy?

### Environment variables

The proxy uses the following environment variables:

* `SERVER_HOST` - The host used by the Oauth Server. By default and the recommended configuration is to use `127.0.0.1` so only the proxy process (NGINX) can connect to the local OAuth introspection server.
* `SERVER_PORT` - The port used by the OAuth server. By default is `4000`. This port in normal configurations will be **internal** so won't be exposed and only will be accesible by the proxy process.
* `JWT_SECRET_PHRASE` - Shared secret between a Node instance and the Proxy. This secret phrase will be used to encrypt JWT messages by the Node and decrypt by the Proxy.

### Running the NGINX Proxy via Docker

The OAuth Server accepts the following environment variables:

* `SERVER_HOST` - The host or address the OAuth server will be listen. By default `127.0.0.1` but if you need to configure from out of the server/pod it can be `0.0.0.0`
* `SERVER_PORT` - Port the OAuth server will be listening. It is `4000` by default
* `JWT_SECRET_PHRASE` - Shared secret between a Node instance and the Proxy. This secret phrase will be used to encrypt JWT messages by the Node and decrypt by the Proxy

The NGINX container accepts the following environment variables:

* `INTROSPECTION_URL` - The url to call to perform the OAuth introspection. It is the URL to the OAuth server. By default `http://127.0.0.1:4000/introspect`

The project has 3 Docker containers:

* `nevermined-io/proxy:latest` - It bundles the NGINX and OAuth server in the same image
* `neverminedio/proxy:nginx-latest` - NGINX 
* `neverminedio/proxy:oauth-latest` - The OAuth server

You can build it locally too and run it:

```
docker build . -t nginx-proxy
docker run -v $(pwd)/conf/certs:/ssl/certs -p 443:443 -p 3128:3128  -e "INTROSPECTION_URL=http://127.0.0.1:4000" nginx-proxy
```

Or pull the pre-built images:

https://hub.docker.com/repository/docker/neverminedio/proxy/general


