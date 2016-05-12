/**
 * Created by Vovke on 18/04/16.
 */
angular.module('angularFileDownloader', [])
    .factory('angularFileDownloader', function($http) {
        var contentMimeType = 'text/plain';
        var angularElementFileResolve = function(response){
            var file = new Blob([ response.data ], {type: contentMimeType});
            var url = window.URL.createObjectURL(file);
            var anchor = angular.element('<a/>');
            anchor.attr({
                href : url,
                target : '_blank',
                download : fileName
            })[0].click();
        };

        var buildConfig = function(headers) {
            var config = {};
            config.responseType = 'arraybuffer';
            if(headers) {
                config.headers = headers;
            }

            return config;
        };

        return {
            downloadFile: function(url, mime, additionalHeaders) {
                if(mime) {
                    contentMimeType = mime;
                }
                $http.get(url, buildConfig(additionalHeaders))
                    .then(angularElementFileResolve)
            }
        }
    }).component('downloadLink', {
        transclude: true,
        bindings: {
            href: '@',
            headers: '@',
            mime: '@'
        },
        template: '<a href="" ng-click="$ctrl.click()" ng-transclude></a>',
        controller: function(angularFileDownloader) {
            this.click = function() {
                if(this.headers) {
                    try {
                        this.headers = JSON.parse(this.headers);
                    } catch (e) {
                        this.headers = false;
                    }
                }

                angularFileDownloader.downloadFile(this.href, this.mime, this.headers);
            };
        }
    });