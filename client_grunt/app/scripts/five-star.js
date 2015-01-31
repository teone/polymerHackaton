'use strict';
// var lib = require('./components/components');
(function(scope){
  var EMPTY = 'symbol symbol-empty';
  var FILLED = 'symbol symbol-filled';
  var polymer = scope.Polymer('five-star', {
        start: 0,
        stop: 5,
        step: 1,
        readonly: false,
        value: undefined,
        empty: EMPTY,
        filled: FILLED,
        symbols: undefined,
        label: undefined,
        refId: undefined,
        urlVote: undefined,
        urlAvg: undefined,
        dialogVisible: false,
        voteAverage: '',
        domain: 'http://localhost:3000',
        api: '/api/fiveStar/',
        indexToRate: function (index) {
          return this.start + index * this.step;
        },
        rateToIndex: function (rate) {
          // If rate is not a number then NaN will be returned.
          return Math.max(Math.ceil((rate - this.start) / this.step), 0);
        },
        contains: function (rate) {
          var start = this.step > 0 ? this.start : this.stop;
          var stop = this.step > 0 ? this.stop - 1 : this.start + 1;
          return start <= rate && rate <= stop && (this.start + rate) % this.step === 0;
        },
        created: function () {
           this.rates = [];
        },
        domReady: function () {
          var that = this;
          var ratingSymbols = this.$.rating.getElementsByClassName('rating-symbol');
          for (var i = 0; i < ratingSymbols.length; i++) {
            // Add event listeners to every rating symbol
            ratingSymbols[i].addEventListener('click', (function (index) {
              return function () {
                if (!that.readonly) {
                  that.value = that.indexToRate(index);
                  that.fire('change');
                }
              };
            })(i));
            ratingSymbols[i].addEventListener('mouseenter', (function (index) {
              return function () {
                if (!that.readonly) {
                  that.index = index;
                }
              };
            })(i));
            ratingSymbols[i].addEventListener('mouseleave', (function (index) {
              return function () {
                if (!that.readonly) {
                  that.index = that.rateToIndex(that.value);
                }
              };
            })(i));
          }
          if (this.symbols) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = this.symbols;
            this.shadowRoot.appendChild(link);
            this.element.convertSheetsToStyles(this.shadowRoot);
            var fakeLink = link.cloneNode();
            document.getElementsByTagName('head')[0].appendChild(fakeLink);
           }
        },
        ready: function () {
          this.urlAvg = this.domain + this.api + this.label + '/' + this.refId;
          this.index = this.rateToIndex(this.value);
          for (var i = 0; i < this.rateToIndex(this.stop); i++) {
            this.rates.push(i);
          }
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
          console.log(response);
          this.dialogVisible = true;
        },
        handleResponseFail: function(response) {
          console.log(response);
        },
        calculateAvg: function(response, res, var2) {
          console.log(response);
          console.log(var2);
        }
    });

    return polymer;
})(window);
