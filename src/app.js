import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data:{
        currencies: {},
        selectedCurrency: null,
    },

    computed: {
      flipCurrencies: function(){
        return this.flip(this.selectedCurrency)
      }
    },

    mounted(){
        this.getCurrencies();
        this.flip();
    },

    methods: {
        getCurrencies: function(){
            fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(currencies => this.currencies = currencies)
        },
        flip: function(rate){
          let result = 0
          result = 1 / rate
          return result.toFixed(2);
        }
      }
  })
})


// Allow cross-currency conversions - from non-base to non-base currencies. (e.g. from GBP to USD)git
