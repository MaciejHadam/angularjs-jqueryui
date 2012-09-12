'use strict';

function xinspect(o,i){
    if(typeof i=='undefined')i='';
    if(i.length>50)return '[MAX ITERATIONS]';
    var r=[];
    for(var p in o){
        var t=typeof o[p];
        r.push(i+'"'+p+'" ('+t+') => '+(t=='object' ? 'object:'+xinspect(o[p],i+'  ') : o[p]+''));
    }
    return r.join(i+'\n');
}

describe('Module: jui', function() {
  beforeEach(module('jui'));

  describe('Module: jui:draggable', function() {
    var element;

    it('should apply the zero-configuration usabe of draggable', inject(function($rootScope, $compile) {
      element = angular.element('<div jui:draggable></div>');
      element = $compile(element)($rootScope);
      expect($(element).is('.ui-draggable')).toBeTruthy();
    }));

    it('should trigger dragcreate event', inject(function($rootScope, $compile) {
      element = angular.element('<div jui:draggable on:create="onCreate"></div>');

      $rootScope.hello = 'Hello';
      $rootScope.onCreate = function(){}

      spyOn($rootScope, 'onCreate').andCallThrough();
      element = $compile(element)($rootScope);

      expect($rootScope.onCreate).toHaveBeenCalled();
      expect($rootScope.onCreate.calls[0].args[0].type).toBe('dragcreate');
    }));

  });

});
