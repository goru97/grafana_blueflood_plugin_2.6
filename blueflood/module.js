define([
  './datasource',
],
function (BluefloodDatasource) {
  'use strict';

  function metricsQueryEditor() {
    return {controller: 'BluefloodQueryCtrl', templateUrl: 'app/plugins/datasource/blueflood/partials/query.editor.html'};
  }

  function metricsQueryOptions() {
    return {templateUrl: 'app/plugins/datasource/blueflood/partials/query.options.html'};
  }

  function annotationsQueryEditor() {
    return {templateUrl: 'app/plugins/datasource/blueflood/partials/annotations.editor.html'};
  }

  function configView() {
    return {templateUrl: 'app/plugins/datasource/blueflood/partials/config.html'};
  }

  return {
    Datasource: BluefloodDatasource,
    configView: configView,
    annotationsQueryEditor: annotationsQueryEditor,
    metricsQueryEditor: metricsQueryEditor,
    metricsQueryOptions: metricsQueryOptions,
  };
});
