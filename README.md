# GT-Proxy-Toolbar

## Flow of data ##

#### Step 1: Toolbar

Toolbar will get all API codes from message page and send them to PHP recollector.

#### Step 2: PHP collector

Recollector will read request from Toolbar and enqueue for fetch from Ogame API.

#### Step 3: Ogame API interface/fetcher

If some API key is not cached, it will be fetched from Ogame API and store in persistent cache for later access.

#### Step 4: Inject to old galaxytool

Use the data to work with it in several ways:

* Own Galaxytool NG.
* Proxy to old galaxytool database/API.
