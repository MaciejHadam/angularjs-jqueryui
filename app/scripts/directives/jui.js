/*global angular:true $:true*/
'use strict';

angular.module('jui', [])
  .directive('juiDraggable', function() {
    return {
      restrict: 'A',
      scope: {
        onCreate: '=',
        onStart: '=',
        onStop: '=',
        onDrag: '=',
        axis: '=',
        cancel: '=',
        cursor: '=',
        cursorAt: '=',
        delay: '=',
        distance: '=',
        grid: '=',
        handle: '=',
        snap: '=',
        iframeFix: '=',
        refreshPositions: '=',
        snapMode: '=',
        snapTolerance: '=',
        stack: '=',
        scope: '=',
        containment: '=',
        scroll: '=',
        scrollSensitivity: '=',
        scrollSpeed: '=',
        revert: '=',
        revertDuration: '=',
        helper: '=',
        opacity: '=',
        zIndex: '='
      },
      link: function postLink(scope, element, attrs) {
        var options = {
          axis: scope.axis,
          cancel: scope.cancel,
          cursor: scope.cursor,
          cursorAt: scope.cursorAt,
          distance: scope.distance,
          delay: scope.delay,
          grid: scope.grid,
          snap: scope.snap,
          handle: scope.handle,
          iframeFix: scope.iframeFix,
          refreshPositions: scope.refreshPositions,
          scope: scope.scope,
          snapMode: scope.snapMode,
          snapTolerance: scope.snapTolerance,
          stack: scope.stack,
          containment: scope.containment,
          scroll: scope.scroll,
          scrollSpeed: scope.scrollSpeed,
          scrollSensitivity: scope.scrollSensitivity,
          revert: scope.revert,
          revertDuration: scope.revertDuration,
          helper: scope.helper,
          opacity: scope.opacity,
          zIndex: scope.zIndex
        };

        // Assigning events
        if(scope.onCreate !== undefined){
          options.create = function(event, ui) {
            scope.onCreate.apply(null, arguments);
          };
        }

        if(scope.onStart !== undefined){
          options.start = function(event, ui) {
            scope.onStart.apply(null, arguments);
          };
        }

        if(scope.onStop !== undefined){
          options.stop = function(event, ui) {
            scope.onStop.apply(null, arguments);
          };
        }

        if(scope.onDrag !== undefined){
          options.stop = function(event, ui) {
            scope.onDrag.apply(null, arguments);
          };
        }

        $(element).draggable(options);
      }
    };
  })
  .directive('juiProgressbar', function(){
    return {
      restrict: 'A',
      scope: {
        value: '='
      },
      link: function postLink(scope, element, attrs) {
        var options = {
          value: scope.value
        };

        // Register a $watch on value to update the widget
        scope.$watch('value', function(){
          $(element).progressbar("value", parseInt(scope.value, 10));
        });

        $(element).progressbar(options);
      }
    };
  });
