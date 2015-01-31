'use strict';
// var lib = require('./components/components');
(function(scope){
  var polymer = scope.Polymer('five-star', {
        domReady: function () {
        },
        ready: function () {
          this.urlAvg = this.domain + this.api;
          this.index = this.rateToIndex(this.value);
          for (var i = 0; i < this.rateToIndex(this.stop); i++) {
            this.rates.push(i);
          }
          this.getAvg();
        },
        getAvg : function() {
          this.shadowRoot.getElementById('coreAjaxAvg').go();
        },
        valueChanged: function (oldValue, newValue) {
          this.urlVote = this.domain + this.api + this.label + '/' + this.refId+'/vote';
          var value = parseInt(newValue, 10);
          if (isNaN(value) || !this.contains(value)) {
            this.value = undefined;
          }
          this.index = this.rateToIndex(this.value);
          this.readonly = true; 
          
        },
        handleResponseSuccess: function(response) {
          this.dialogVisible = true;
          this.getAvg();
        },
        handleResponseFail: function(response) {
          throw new Error(response);
        },
    });
    return polymer;
})(window);
