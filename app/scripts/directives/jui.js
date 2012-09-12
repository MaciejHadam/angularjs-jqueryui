/*global angular:true $:true*/
'use strict';

var jui_module = angular.module('jui', []);
/**
 * Define a new directive for jQueryUI Draggable.
 */
jui_module.directive('juiDraggable', function juiDraggable() {
    return {
        restrict:'A',
        scope:{
            onCreate:'=',
            onStart:'=',
            onStop:'=',
            onDrag:'=',
            axis:'=',
            cancel:'=',
            cursor:'=',
            cursorAt:'=',
            delay:'=',
            distance:'=',
            grid:'=',
            handle:'=',
            snap:'=',
            iframeFix:'=',
            refreshPositions:'=',
            snapMode:'=',
            snapTolerance:'=',
            stack:'=',
            scope:'=',
            containment:'=',
            scroll:'=',
            scrollSensitivity:'=',
            scrollSpeed:'=',
            revert:'=',
            revertDuration:'=',
            helper:'=',
            opacity:'=',
            zIndex:'='
        },
        link:function postLink(scope, element, attrs) {
            var options = {
                axis:scope.axis,
                cancel:scope.cancel,
                cursor:scope.cursor,
                cursorAt:scope.cursorAt,
                distance:scope.distance,
                delay:scope.delay,
                grid:scope.grid,
                snap:scope.snap,
                handle:scope.handle,
                iframeFix:scope.iframeFix,
                refreshPositions:scope.refreshPositions,
                scope:scope.scope,
                snapMode:scope.snapMode,
                snapTolerance:scope.snapTolerance,
                stack:scope.stack,
                containment:scope.containment,
                scroll:scope.scroll,
                scrollSpeed:scope.scrollSpeed,
                scrollSensitivity:scope.scrollSensitivity,
                revert:scope.revert,
                revertDuration:scope.revertDuration,
                helper:scope.helper,
                opacity:scope.opacity,
                zIndex:scope.zIndex
            };

            // Assigning events
            if (scope.onCreate !== undefined) {
                options.create = function (event, ui) {
                    scope.onCreate.apply(null, arguments);
                };
            }

            if (scope.onStart !== undefined) {
                options.start = function (event, ui) {
                    scope.onStart.apply(null, arguments);
                };
            }

            if (scope.onStop !== undefined) {
                options.stop = function (event, ui) {
                    scope.onStop.apply(null, arguments);
                };
            }

            if (scope.onDrag !== undefined) {
                options.stop = function (event, ui) {
                    scope.onDrag.apply(null, arguments);
                };
            }

            $(element).draggable(options);
        }
    };
});

/**
 *
 */
jui_module.directive('juiButton', function juiButton() {
    return {
        restrict:'A',
        scope:{
            text:'=',
            label:'=',
            disabled:'='
        },
        link:function postLink(scope, element, attrs) {
            var options = {
                text:scope.text,
                disabled:scope.disabled,
                label:scope.label
            };

            // Register a $watch on value to update the widget
            scope.$watch('text', function () {
                $(element).button("text", parseInt(scope.value, 10));
            });

            scope.$watch('disabled', function () {
                $(element).button("disabled", scope.disabled);
            });

            $(element).button(options);
        }
    };
});

/**
 *
 */
jui_module.directive('juiButtonset', function juiButtonset() {
    return {
        restrict:'A',
        scope:{
            disabled:'='
        },
        link:function postLink(scope, element, attrs) {
            var options = {
                disabled:scope.disabled
            };

            $(element).buttonset(options);
        }
    };
});

/**
 *
 */
jui_module.directive('juiProgressbar', function juiProgressbar() {
    return {
        restrict:'A',
        scope:{
            value:'='
        },
        link:function postLink(scope, element, attrs) {
            var options = {
                value:scope.value
            };

            // Register a $watch on value to update the widget
            scope.$watch('value', function () {
                $(element).progressbar("value", parseInt(scope.value, 10));
            });

            $(element).progressbar(options);
        }
    };
});

/**
 * Define a new directive for jQueryUI Dropabble.
 *
 * @link http://jqueryui.com/demos/droppable/
 */
jui_module.directive('juiDroppable', [function juiDroppable() {
    var eventNames = ['onCreate', 'onActivate', 'onDeactivate', 'onOver', 'onOut'],
        optionNames = ['disabled', 'accept', 'activeClass', 'addClasses', 'greedy', 'hoverClass', 'scope', 'tolerance'];

    return {
        restrict: "A",
        scope: {
            onCreate: "=eventOncreate",
            onActivate: '=eventOnactivate',
            onDeactivate: '=eventOndeactivate',
            onOver: '=eventOnover',
            onOut: '=eventOnout',
            onDrop: '=eventOndrop',
            disabled: '=optDisabled',
            accept: '=optAccept',
            activeClass: '=optActiveclass',
            addClasses: '=optAddclasses',
            greedy: '=optGreedy',
            hoverClass: '=optHoverclass',
            scope: '=optScope',
            tolerance: '=optTolerance'
        },

        link: function(scope, element, attrs){
            var options = {};

            $(optionNames).each(function(i, optionName){
                options[optionName] = scope[optionName];
                scope.$watch(optionName, function(){
                    $(element).droppable('option', optionName, scope[optionName]);
                });
            });

            // Assign events to the options hash.
            $(eventNames).each(function(i, scopeEvent){
                if(scope[scopeEvent] !== undefined){
                    var eventName = scopeEvent.replace('on', '').toLowerCase();
                    options[eventName] = function(event, ui){
                        if( angular.isFunction(scope[scopeEvent]) ){
                            scope[scopeEvent].apply(null, arguments);
                        }
                    }
                }
            });

            // Apply the plugin
            $(element).droppable(options);
        }
    };
}]);
