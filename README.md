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
    <download-link href='AAA' headers='{"xxx":"yyy"}' mime='application/pdf'>
        <button>Download</button>
    </download-link>
...
```

Please note that headers expects to receive JSON.parse style string
 
* You can use `fileDownloader.downloadFile(url, additionalHeaders)` function
    
    parameters:
        `url` - file url to download from
        `mime` - content mime type should be set, default `text/plain` will be used if not set
        `additionalHeaders` - headers object that should be added

### Package managers ###

* bower
    `bower install angular-file-downloader --save`

### Credits ###

