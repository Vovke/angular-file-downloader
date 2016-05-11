# AngularFileDownloader #

AngularFileDownloader is a simple, easy-to-use library for downloading files through REST, allowing altering the request.

## Why would you use it? ##

* You using $http interceptors with authorization logic
* You need to provide custom headers

## Compatibility ##

Angular ~1.5.*

## Usage ##

* Include `angular-file-downloader.js` in your index.html
* Include `fileDownloader` service in your app configuration

```
    angular
        .module('yourApp', [
            ...
            'fileDownloader',
            ...
        ]);
```

* You can use provided Angular component `downloadLink`, example usage:

```
...
    <download-link href="AAA" headers='{"xxx":"yyy"}'>
        <button>Download</button>
    </download-link>
...
```

Please note that headers expects to receive JSON.parse style string
 
* You can use `fileDownloader.downloadFile(url, additionalHeaders)` function
    
    parameters:
        `url` - file url to download from
        `additionalHeaders` - headers object that should be added

### Package managers ###

* bower
    `bower install angular-file-downloader --save`
