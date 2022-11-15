---
sidebar_position: 1
description: Nevermined Node
---

# Description

In the Nevermined ecosystem, the [Nevermined Node](https://github.com/nevermined-io/node/) is 
the technical component executed by the Publishers allowing them to provide extended data 
services (e.g. storage and compute).

Nevermined Node, as part of the Publisher ecosystem, includes the credentials to interact
with the infrastructure (initially cloud, but could be on-premise).

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="nevermined-node">Nevermined Node v0.1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="nevermined-node-info">Info</h1>

## InfoController_getInfo

<a id="opIdInfoController_getInfo"></a>

> Code samples

```shell
# You can also use wget
curl -X GET / \
  -H 'Accept: application/json'

```

```http
GET / HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /`

*Public*

Get API info

> Example responses

> 200 Response

```json
{
  "APIversion": "1.0.4",
  "docs": "http://localhost:3100/api/v1/docs"
}
```

<h3 id="infocontroller_getinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return API Info|[GetInfoDto](#schemagetinfodto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nevermined-node-encrypt">Encrypt</h1>

## EncryptController_doEncrypt

<a id="opIdEncryptController_doEncrypt"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/encrypt \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /api/v1/node/services/encrypt HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "method": "PSK-ECDSA",
  "message": "Hello!"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v1/node/services/encrypt',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/api/v1/node/services/encrypt',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v1/node/services/encrypt', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/v1/node/services/encrypt', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/encrypt");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/node/services/encrypt", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/encrypt`

*Public*

Encrypt

> Body parameter

```json
{
  "method": "PSK-ECDSA",
  "message": "Hello!"
}
```

<h3 id="encryptcontroller_doencrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EncryptDto](#schemaencryptdto)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="encryptcontroller_doencrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return encrypted stuff|[EncryptResult](#schemaencryptresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nevermined-node-access">Access</h1>

## AccessController_doAccess

<a id="opIdAccessController_doAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/access/{agreement_id}/{index} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /api/v1/node/services/access/{agreement_id}/{index} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/v1/node/services/access/{agreement_id}/{index}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/api/v1/node/services/access/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/api/v1/node/services/access/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/access/{agreement_id}/{index}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/access/{agreement_id}/{index}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/access/{agreement_id}/{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/access/{agreement_id}/{index}`

*Public*

Access asset

<h3 id="accesscontroller_doaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|number|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="accesscontroller_doaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the url of asset|[StreamableFile](#schemastreamablefile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## AccessController_doAccessProof

<a id="opIdAccessController_doAccessProof"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/access-proof/{agreement_id}/{index} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /api/v1/node/services/access-proof/{agreement_id}/{index} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/v1/node/services/access-proof/{agreement_id}/{index}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/api/v1/node/services/access-proof/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/api/v1/node/services/access-proof/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/access-proof/{agreement_id}/{index}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/access-proof/{agreement_id}/{index}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/access-proof/{agreement_id}/{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/access-proof/{agreement_id}/{index}`

*Public*

Access asset w/ DTP proof

<h3 id="accesscontroller_doaccessproof-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|number|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="accesscontroller_doaccessproof-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the url of asset|string|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## AccessController_doNftAccess

<a id="opIdAccessController_doNftAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/nft-access/{agreement_id}/{index} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /api/v1/node/services/nft-access/{agreement_id}/{index} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/v1/node/services/nft-access/{agreement_id}/{index}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/api/v1/node/services/nft-access/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/api/v1/node/services/nft-access/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/nft-access/{agreement_id}/{index}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/nft-access/{agreement_id}/{index}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/nft-access/{agreement_id}/{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/nft-access/{agreement_id}/{index}`

*Public*

Access asset

<h3 id="accesscontroller_donftaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|number|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="accesscontroller_donftaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the url of asset|[StreamableFile](#schemastreamablefile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## AccessController_doNftTransfer

<a id="opIdAccessController_doNftTransfer"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/nft-transfer \
  -H 'Content-Type: application/json'

```

```http
POST /api/v1/node/services/nft-transfer HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "agreementId": "0x...",
  "nftHolder": "0x...",
  "nftReceiver": "0x...",
  "nftAmount": "1",
  "nftType": "721"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/v1/node/services/nft-transfer',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/v1/node/services/nft-transfer',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/v1/node/services/nft-transfer', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/v1/node/services/nft-transfer', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/nft-transfer");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/node/services/nft-transfer", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/nft-transfer`

*Public*

Access asset

> Body parameter

```json
{
  "agreementId": "0x...",
  "nftHolder": "0x...",
  "nftReceiver": "0x...",
  "nftAmount": "1",
  "nftType": "721"
}
```

<h3 id="accesscontroller_donfttransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferDto](#schematransferdto)|true|none|

<h3 id="accesscontroller_donfttransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return "success" if transfer worked|None|

<aside class="success">
This operation does not require authentication
</aside>

## AccessController_doDownload

<a id="opIdAccessController_doDownload"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/download/{index} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /api/v1/node/services/download/{index} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/v1/node/services/download/{index}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/api/v1/node/services/download/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/api/v1/node/services/download/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/download/{index}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/download/{index}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/download/{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/download/{index}`

*Public*

Download asset

<h3 id="accesscontroller_dodownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|number|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="accesscontroller_dodownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the asset|[StreamableFile](#schemastreamablefile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## AccessController_doUpload

<a id="opIdAccessController_doUpload"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/upload/{backend} \
  -H 'Content-Type: application/json'

```

```http
POST /api/v1/node/services/upload/{backend} HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "encrypt": "false"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/v1/node/services/upload/{backend}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/v1/node/services/upload/{backend}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/v1/node/services/upload/{backend}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/v1/node/services/upload/{backend}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/upload/{backend}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/node/services/upload/{backend}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/upload/{backend}`

*Public*

Access asset

> Body parameter

```json
{
  "encrypt": "false"
}
```

<h3 id="accesscontroller_doupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backend|path|string|true|none|
|body|body|[UploadDto](#schemauploaddto)|true|none|

<h3 id="accesscontroller_doupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Return the url of asset|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nevermined-ndoe-auth">Auth</h1>

## AuthController_token

<a id="opIdAuthController_token"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/oauth/token \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /api/v1/node/services/oauth/token HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIyIn0.eyJpc3Mi[...omitted for brevity...]"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v1/node/services/oauth/token',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/api/v1/node/services/oauth/token',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v1/node/services/oauth/token', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/v1/node/services/oauth/token', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/v1/node/services/oauth/token");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/node/services/oauth/token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/oauth/token`

*Public*

Login using a JWT claim for client authentication

> Body parameter

```json
{
  "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIyIn0.eyJpc3Mi[...omitted for brevity...]"
}
```

<h3 id="authcontroller_token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClientAssertionDto](#schemaclientassertiondto)|true|none|

> Example responses

> 201 Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIyIn0.eyJpc3Mi[...omitted for brevity...]"
}
```

<h3 id="authcontroller_token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The access_token|[LoginDto](#schemalogindto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized access|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GetInfoDto">GetInfoDto</h2>
<a id="schemagetinfodto"></a>
<a id="schema_GetInfoDto"></a>
<a id="tocSgetinfodto"></a>
<a id="tocsgetinfodto"></a>

```json
{
  "APIversion": "1.0.4",
  "docs": "http://localhost:3100/api/v1/docs"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|APIversion|string|true|none|Marketplace API Version|
|docs|string|true|none|API docs url|

<h2 id="tocS_EncryptDto">EncryptDto</h2>
<a id="schemaencryptdto"></a>
<a id="schema_EncryptDto"></a>
<a id="tocSencryptdto"></a>
<a id="tocsencryptdto"></a>

```json
{
  "method": "PSK-ECDSA",
  "message": "Hello!"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|Encryption method|
|message|string|true|none|Encrypted message|

<h2 id="tocS_EncryptResult">EncryptResult</h2>
<a id="schemaencryptresult"></a>
<a id="schema_EncryptResult"></a>
<a id="tocSencryptresult"></a>
<a id="tocsencryptresult"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_StreamableFile">StreamableFile</h2>
<a id="schemastreamablefile"></a>
<a id="schema_StreamableFile"></a>
<a id="tocSstreamablefile"></a>
<a id="tocsstreamablefile"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_TransferDto">TransferDto</h2>
<a id="schematransferdto"></a>
<a id="schema_TransferDto"></a>
<a id="tocStransferdto"></a>
<a id="tocstransferdto"></a>

```json
{
  "agreementId": "0x...",
  "nftHolder": "0x...",
  "nftReceiver": "0x...",
  "nftAmount": "1",
  "nftType": "721"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreementId|string|true|none|The agreement for NFT transfer|
|nftHolder|string|true|none|NFT holder address|
|nftReceiver|string|true|none|NFT receiver address|
|nftAmount|number|true|none|Number of NFTs to transfer|
|nftType|number|true|none|Type of NFT|

<h2 id="tocS_UploadDto">UploadDto</h2>
<a id="schemauploaddto"></a>
<a id="schema_UploadDto"></a>
<a id="tocSuploaddto"></a>
<a id="tocsuploaddto"></a>

```json
{
  "encrypt": "false"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encrypt|string|false|none|Encrypt uploaded data|

<h2 id="tocS_ClientAssertionDto">ClientAssertionDto</h2>
<a id="schemaclientassertiondto"></a>
<a id="schema_ClientAssertionDto"></a>
<a id="tocSclientassertiondto"></a>
<a id="tocsclientassertiondto"></a>

```json
{
  "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIyIn0.eyJpc3Mi[...omitted for brevity...]"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|Type type of JWT client assertion. Must be urn:ietf:params:oauth:grant-type:jwt-bearer|
|assertion|string|true|none|A single JWT|

<h2 id="tocS_LoginDto">LoginDto</h2>
<a id="schemalogindto"></a>
<a id="schema_LoginDto"></a>
<a id="tocSlogindto"></a>
<a id="tocslogindto"></a>

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIyIn0.eyJpc3Mi[...omitted for brevity...]"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The Authorization Bearer token|
