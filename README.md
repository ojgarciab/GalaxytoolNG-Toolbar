# GT-Proxy-Toolbar
Request for Ogame API key:
http://board.origin.ogame.gameforge.com/board6-origin/board5-feedback-discussions/7233-applications-for-api-keys/index2.html#post40043

Work progress holded waiting for API key.

## Flow of data ##

#### Step 1: Toolbar

Toolbar will get all API codes from message page and send them to PHP recollector.

Steps:
* Get API keys from messages tab (DONE).
* Configure panel to setup PHP collectors (TODO).
* Send data to PHP collector/s (TODO).
[ ] hola
[x] adios

#### Step 2: PHP collector

Recollector will read request from Toolbar and enqueue for fetch from Ogame API.

#### Step 3: Ogame API interface/fetcher

If some API key is not cached, it will be fetched from Ogame API and store in persistent cache for later access.

#### Step 4: Inject to old galaxytool

Use the data to work with it in several ways:

* Own Galaxytool NG.
* Proxy to old galaxytool database/API.
