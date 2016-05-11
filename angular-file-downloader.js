/**
 * Created by Vovke on 18/04/16.
 */
angular.module('angularFileDownloader', [])
    .factory('angularFileDownloader', function($http) {
        var typesMap = {
            pdf: 'application/pdf'
        };
        var angularElementFileResolve = function(response){
            var file = new Blob([ response.data ], {type: 'application/pdf'});
            var url = window.URL.createObjectURL(file);
            var anchor = angular.element('<a/>');
            anchor.attr({
                href : url,
                target : '_blank',
                download : 'filename'
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
            downloadFile: function(url, additionalHeaders) {
                $http.get(url, buildConfig(additionalHeaders))
                    .then(angularElementFileResolve)
            }
        }
    }).component('downloadLink', {
        transclude: true,
        bindings: {
            href: '@',
            headers: '@'
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

                angularFileDownloader.downloadFile(this.href, this.headers);
            };
        }
    });