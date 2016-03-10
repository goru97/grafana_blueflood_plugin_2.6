define([
        'angular'
    ],
    function (angular) {
        'use strict';

        var module = angular.module('grafana.directives');

        module.directive('metricQueryEditorBlueflood', function() {
            return {controller: 'BluefloodQueryCtrl', templateUrl: 'app/plugins/datasource/blueflood/partials/query.editor.html'};
        });

        module.directive('metricQueryOptionsBlueflood', function() {
            return {templateUrl: 'app/plugins/datasource/blueflood/partials/query.options.html'};
        });

        module.directive('annotationsQueryEditorBlueflood', function() {
            return {templateUrl: 'app/plugins/datasource/blueflood/partials/annotations.editor.html'};
        });

    });