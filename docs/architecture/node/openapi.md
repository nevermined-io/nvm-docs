---
title: GATEWAY v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="gateway">GATEWAY v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Gateway is the technical component executed by Publishers allowing them to provide extended data services. When running with our Docker images, it is exposed under `http://localhost:8030`.

<h1 id="gateway-services">services</h1>

## get__api_v1_gateway_services_access-proof_{agreement_id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/access-proof/{agreement_id} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/access-proof/{agreement_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/access-proof/{agreement_id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/access-proof/{agreement_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/access-proof/{agreement_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/access-proof/{agreement_id}', array(
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
URL obj = new URL("/api/v1/node/services/access-proof/{agreement_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/access-proof/{agreement_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/access-proof/{agreement_id}`

*Allows to get access to an asset data file.*

<h3 id="get__api_v1_gateway_services_access-proof_{agreement_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_access-proof_{agreement_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_access-proof_{agreement_id}_{index}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/access-proof/{agreement_id}/{index} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/access-proof/{agreement_id}/{index} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/access-proof/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/access-proof/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
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
        "Authorization": []string{"string"},
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

*Allows to get access to an asset data file.*

<h3 id="get__api_v1_gateway_services_access-proof_{agreement_id}_{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_access-proof_{agreement_id}_{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_access_{agreement_id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/access/{agreement_id} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/access/{agreement_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/access/{agreement_id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/access/{agreement_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/access/{agreement_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/access/{agreement_id}', array(
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
URL obj = new URL("/api/v1/node/services/access/{agreement_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/access/{agreement_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/access/{agreement_id}`

*Allows to get access to an asset data file.*

<h3 id="get__api_v1_gateway_services_access_{agreement_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_access_{agreement_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_access_{agreement_id}_{index}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/access/{agreement_id}/{index} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/access/{agreement_id}/{index} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/access/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/access/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
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
        "Authorization": []string{"string"},
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

*Allows to get access to an asset data file.*

<h3 id="get__api_v1_gateway_services_access_{agreement_id}_{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_access_{agreement_id}_{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_compute_logs_{agreement_id}_{execution_id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/compute/logs/{agreement_id}/{execution_id} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/compute/logs/{agreement_id}/{execution_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/compute/logs/{agreement_id}/{execution_id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/compute/logs/{agreement_id}/{execution_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/compute/logs/{agreement_id}/{execution_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/compute/logs/{agreement_id}/{execution_id}', array(
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
URL obj = new URL("/api/v1/node/services/compute/logs/{agreement_id}/{execution_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/compute/logs/{agreement_id}/{execution_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/compute/logs/{agreement_id}/{execution_id}`

*Allows to get access to logs associated to a compute execution*

<h3 id="get__api_v1_gateway_services_compute_logs_{agreement_id}_{execution_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|execution_id|path|string|true|The ID of the execution associated to a service agreement.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_compute_logs_{agreement_id}_{execution_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the execution logs|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_compute_status_{agreement_id}_{execution_id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/compute/status/{agreement_id}/{execution_id} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/compute/status/{agreement_id}/{execution_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/compute/status/{agreement_id}/{execution_id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/compute/status/{agreement_id}/{execution_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/compute/status/{agreement_id}/{execution_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/compute/status/{agreement_id}/{execution_id}', array(
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
URL obj = new URL("/api/v1/node/services/compute/status/{agreement_id}/{execution_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/compute/status/{agreement_id}/{execution_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/compute/status/{agreement_id}/{execution_id}`

*Allows to get access to logs associated to a compute execution*

<h3 id="get__api_v1_gateway_services_compute_status_{agreement_id}_{execution_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|execution_id|path|string|true|The ID of the execution associated to a service agreement.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_compute_status_{agreement_id}_{execution_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the execution logs|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_consume

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/consume?consumerAddress=string&serviceAgreementId=string&url=string

```

```http
GET /api/v1/node/services/consume?consumerAddress=string&serviceAgreementId=string&url=string HTTP/1.1

```

```javascript

fetch('/api/v1/node/services/consume?consumerAddress=string&serviceAgreementId=string&url=string',
{
  method: 'GET'

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

result = RestClient.get '/api/v1/node/services/consume',
  params: {
  'consumerAddress' => 'string',
'serviceAgreementId' => 'string',
'url' => 'string'
}

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/v1/node/services/consume', params={
  'consumerAddress': 'string',  'serviceAgreementId': 'string',  'url': 'string'
})

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/consume', array(
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
URL obj = new URL("/api/v1/node/services/consume?consumerAddress=string&serviceAgreementId=string&url=string");
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

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/consume", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/consume`

*Allows download of asset data file.*

Method deprecated, it will be replaced by `/access` in further versions

<h3 id="get__api_v1_gateway_services_consume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumerAddress|query|string|true|The consumer address.|
|serviceAgreementId|query|string|true|The ID of the service agreement.|
|url|query|string|true|This URL is only valid if Nevermined Gateway acts as a proxy. Consumer can't download using the URL if it's not through Nevermined Gateway.|
|signature|query|string|false|Signature of the documentId to verify that the consumer has rights to download the asset.|
|index|query|string|false|Index of the file in the array of files.|

<h3 id="get__api_v1_gateway_services_consume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Redirect to valid asset url.|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|One of the required attributes is missing.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid asset data.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_download_{index}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/download/{index} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/download/{index} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/download/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/download/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
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
        "Authorization": []string{"string"},
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

*Allows to download the files of an asset if you are the owner or provider of the asset.*

<h3 id="get__api_v1_gateway_services_download_{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_download_{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the valid file binary.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_v1_gateway_services_encrypt

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/encrypt \
  -H 'Content-Type: application/json'

```

```http
POST /api/v1/node/services/encrypt HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "did": "did:nv:08a429b8529856d59867503f8056903a680935a76950bb9649785cc97869a43d",
  "message": "{\"url\":\"https://keyko.io/\",\"index\":0,\"checksum\":\"efb21\",\"contentLength\":\"45\",\"contentType\":\"text/csv\"}",
  "method": "PSK-RSA"
}';
const headers = {
  'Content-Type':'application/json'
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
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/v1/node/services/encrypt',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/v1/node/services/encrypt', headers = headers)

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

*Encrypt a Secret using the Secret Store, ECDSA or RSA methods*

> Body parameter

```json
{
  "did": "did:nv:08a429b8529856d59867503f8056903a680935a76950bb9649785cc97869a43d",
  "message": "{\"url\":\"https://keyko.io/\",\"index\":0,\"checksum\":\"efb21\",\"contentLength\":\"45\",\"contentType\":\"text/csv\"}",
  "method": "PSK-RSA"
}
```

<h3 id="post__api_v1_gateway_services_encrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Asset urls encryption.|
|» did|body|string|false|Identifier of the asset.|
|» message|body|string|true|The message to encrypt|
|» method|body|string|true|The encryption method to use. Options (`SecretStore`, `PSK-ECDSA`, `PSK-RSA`)|

<h3 id="post__api_v1_gateway_services_encrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|document successfully encrypted.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_v1_gateway_services_exec

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/exec?consumerAddress=string&serviceAgreementId=string

```

```http
POST /api/v1/node/services/exec?consumerAddress=string&serviceAgreementId=string HTTP/1.1

```

```javascript

fetch('/api/v1/node/services/exec?consumerAddress=string&serviceAgreementId=string',
{
  method: 'POST'

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

result = RestClient.post '/api/v1/node/services/exec',
  params: {
  'consumerAddress' => 'string',
'serviceAgreementId' => 'string'
}

p JSON.parse(result)

```

```python
import requests

r = requests.post('/api/v1/node/services/exec', params={
  'consumerAddress': 'string',  'serviceAgreementId': 'string'
})

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/v1/node/services/exec', array(
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
URL obj = new URL("/api/v1/node/services/exec?consumerAddress=string&serviceAgreementId=string");
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

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/node/services/exec", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/exec`

*Call the execution of a workflow.*

Method deprecated, it will be replaced by `/execute` in further versions

<h3 id="post__api_v1_gateway_services_exec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consumerAddress|query|string|true|The consumer address.|
|serviceAgreementId|query|string|true|The ID of the service agreement.|
|signature|query|string|false|Signature of the documentId to verify that the consumer has rights to download the asset.|
|workflowDID|query|string|false|DID of the workflow that is going to start to be executed.|

<h3 id="post__api_v1_gateway_services_exec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Call to the nevermined-compute-api was successful.|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|One of the required attributes is missing.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid asset data.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_v1_gateway_services_execute_{agreement_id}

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/execute/{agreement_id} \
  -H 'Authorization: string'

```

```http
POST /api/v1/node/services/execute/{agreement_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/execute/{agreement_id}',
{
  method: 'POST',

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
  'Authorization' => 'string'
}

result = RestClient.post '/api/v1/node/services/execute/{agreement_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.post('/api/v1/node/services/execute/{agreement_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/v1/node/services/execute/{agreement_id}', array(
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
URL obj = new URL("/api/v1/node/services/execute/{agreement_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/v1/node/services/execute/{agreement_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/execute/{agreement_id}`

*Call the execution of a workflow.*

<h3 id="post__api_v1_gateway_services_execute_{agreement_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|Authorization|header|string|true|The bearer token.|

<h3 id="post__api_v1_gateway_services_execute_{agreement_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Call to the compute-api was successful.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_nft-access-proof_{agreement_id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/nft-access-proof/{agreement_id} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/nft-access-proof/{agreement_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/nft-access-proof/{agreement_id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/nft-access-proof/{agreement_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/nft-access-proof/{agreement_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/nft-access-proof/{agreement_id}', array(
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
URL obj = new URL("/api/v1/node/services/nft-access-proof/{agreement_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/nft-access-proof/{agreement_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/nft-access-proof/{agreement_id}`

*Allows to get access to an asset data file holding a NFT.*

<h3 id="get__api_v1_gateway_services_nft-access-proof_{agreement_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_nft-access-proof_{agreement_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_nft-access-proof_{agreement_id}_{index}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/nft-access-proof/{agreement_id}/{index} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/nft-access-proof/{agreement_id}/{index} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/nft-access-proof/{agreement_id}/{index}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/nft-access-proof/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/nft-access-proof/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/nft-access-proof/{agreement_id}/{index}', array(
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
URL obj = new URL("/api/v1/node/services/nft-access-proof/{agreement_id}/{index}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/nft-access-proof/{agreement_id}/{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/nft-access-proof/{agreement_id}/{index}`

*Allows to get access to an asset data file holding a NFT.*

<h3 id="get__api_v1_gateway_services_nft-access-proof_{agreement_id}_{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_nft-access-proof_{agreement_id}_{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_nft-access_{agreement_id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/nft-access/{agreement_id} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/nft-access/{agreement_id} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
};

fetch('/api/v1/node/services/nft-access/{agreement_id}',
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/nft-access/{agreement_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/nft-access/{agreement_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/v1/node/services/nft-access/{agreement_id}', array(
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
URL obj = new URL("/api/v1/node/services/nft-access/{agreement_id}");
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
        "Authorization": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/v1/node/services/nft-access/{agreement_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/v1/node/services/nft-access/{agreement_id}`

*Allows to get access to an asset data file holding a NFT.*

<h3 id="get__api_v1_gateway_services_nft-access_{agreement_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_nft-access_{agreement_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_v1_gateway_services_nft-access_{agreement_id}_{index}

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/node/services/nft-access/{agreement_id}/{index} \
  -H 'Authorization: string'

```

```http
GET /api/v1/node/services/nft-access/{agreement_id}/{index} HTTP/1.1

Authorization: string

```

```javascript

const headers = {
  'Authorization':'string'
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
  'Authorization' => 'string'
}

result = RestClient.get '/api/v1/node/services/nft-access/{agreement_id}/{index}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'string'
}

r = requests.get('/api/v1/node/services/nft-access/{agreement_id}/{index}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'string',
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
        "Authorization": []string{"string"},
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

*Allows to get access to an asset data file holding a NFT.*

<h3 id="get__api_v1_gateway_services_nft-access_{agreement_id}_{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreement_id|path|string|true|The ID of the service agreement.|
|index|path|string|true|Index of the file in the array of files.|
|Authorization|header|string|true|The bearer token.|

<h3 id="get__api_v1_gateway_services_nft-access_{agreement_id}_{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns the file binary|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid bearer token.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_v1_gateway_services_nft-transfer

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
  "agreementId": "0x659a580e03df7896b35b2cde4668d26801a6eb09bb5604483e588a719d1d747a",
  "nftAmount": 1,
  "nftHolder": "0xA99D43d86A0758d5632313b8fA3972B6088A21BB",
  "nftReceiver": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0"
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

*Asks to perform the transfer of an NFT on behalf of an nft holder.*

> Body parameter

```json
{
  "agreementId": "0x659a580e03df7896b35b2cde4668d26801a6eb09bb5604483e588a719d1d747a",
  "nftAmount": 1,
  "nftHolder": "0xA99D43d86A0758d5632313b8fA3972B6088A21BB",
  "nftReceiver": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0"
}
```

<h3 id="post__api_v1_gateway_services_nft-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|The request object|
|» agreementId|body|string|true|The ID of the NFT Sales service agreement.|
|» nftAmount|body|integer|true|The amount of NFTs to transfer.|
|» nftHolder|body|string|true|The address of the current NFT holder.|
|» nftReceiver|body|string|true|The address of the intended NFT receiver.|

<h3 id="post__api_v1_gateway_services_nft-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The gateway successfuly transfered the NFT|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The asset associated with the agreementId does not contain an NFT Sales service.|None|
|402|[Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)|The nftReceiver has not locked the payment.|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|The nftHolder has not approved the gateway to perform the NFT transfer.|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The nftHolder does not have enough nfts to transfer.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_v1_gateway_services_nft-transfer-with-access

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/nft-transfer-with-access \
  -H 'Content-Type: application/json'

```

```http
POST /api/v1/node/services/nft-transfer-with-access HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "agreementId": "0x659a580e03df7896b35b2cde4668d26801a6eb09bb5604483e588a719d1d747a",
  "nftAmount": 1,
  "nftHolder": "0xA99D43d86A0758d5632313b8fA3972B6088A21BB",
  "nftReceiver": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/v1/node/services/nft-transfer-with-access',
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

result = RestClient.post '/api/v1/node/services/nft-transfer-with-access',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/v1/node/services/nft-transfer-with-access', headers = headers)

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
    $response = $client->request('POST','/api/v1/node/services/nft-transfer-with-access', array(
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
URL obj = new URL("/api/v1/node/services/nft-transfer-with-access");
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
    req, err := http.NewRequest("POST", "/api/v1/node/services/nft-transfer-with-access", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/nft-transfer-with-access`

*Asks to perform the transfer of an NFT on behalf of an nft holder.*

> Body parameter

```json
{
  "agreementId": "0x659a580e03df7896b35b2cde4668d26801a6eb09bb5604483e588a719d1d747a",
  "nftAmount": 1,
  "nftHolder": "0xA99D43d86A0758d5632313b8fA3972B6088A21BB",
  "nftReceiver": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0"
}
```

<h3 id="post__api_v1_gateway_services_nft-transfer-with-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|The request object|
|» agreementId|body|string|true|The ID of the NFT Sales service agreement.|
|» nftAmount|body|integer|true|The amount of NFTs to transfer.|
|» nftHolder|body|string|true|The address of the current NFT holder.|
|» nftReceiver|body|string|true|The address of the intended NFT receiver.|

<h3 id="post__api_v1_gateway_services_nft-transfer-with-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The gateway successfuly transfered the NFT|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The asset associated with the agreementId does not contain an NFT Sales service.|None|
|402|[Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)|The nftReceiver has not locked the payment.|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|The nftHolder has not approved the gateway to perform the NFT transfer.|None|
|406|[Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)|The nftHolder does not have enough nfts to transfer.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_v1_gateway_services_publish

> Code samples

```shell
# You can also use wget
curl -X POST /api/v1/node/services/publish \
  -H 'Content-Type: application/json'

```

```http
POST /api/v1/node/services/publish HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "document": "/some-url",
  "documentId": "did:nv:08a429b8529856d59867503f8056903a680935a76950bb9649785cc97869a43d",
  "publisherAddress": "0x00a329c0648769A73afAc7F9381E08FB43dBEA72",
  "signature": ""
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/v1/node/services/publish',
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

result = RestClient.post '/api/v1/node/services/publish',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/v1/node/services/publish', headers = headers)

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
    $response = $client->request('POST','/api/v1/node/services/publish', array(
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
URL obj = new URL("/api/v1/node/services/publish");
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
    req, err := http.NewRequest("POST", "/api/v1/node/services/publish", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/v1/node/services/publish`

*Encrypt document using the SecretStore and keyed by the given documentId.*

<br/>This can be used by the publisher of an asset to encrypt the urls of the<br/>asset data files before publishing the asset ddo. The publisher to use this<br/>service is one that is using a front-end with a wallet app such as MetaMask.<br/>In such scenario the publisher is not able to encrypt the urls using the<br/>SecretStore interface and this service becomes necessary.

> Body parameter

```json
{
  "document": "/some-url",
  "documentId": "did:nv:08a429b8529856d59867503f8056903a680935a76950bb9649785cc97869a43d",
  "publisherAddress": "0x00a329c0648769A73afAc7F9381E08FB43dBEA72",
  "signature": ""
}
```

<h3 id="post__api_v1_gateway_services_publish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Asset urls encryption.|
|» document|body|string|true|document|
|» documentId|body|string|true|Identifier of the asset to be registered in ocean.|
|» publisherAddress|body|string|false|Publisher address.|
|» signature|body|string|true|Publisher signature of the documentId|

<h3 id="post__api_v1_gateway_services_publish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|document successfully encrypted.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Error|None|

<aside class="success">
This operation does not require authentication
</aside>
