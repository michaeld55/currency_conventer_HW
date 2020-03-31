import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data:{
        currencies: {},
        reversedCurrencies: {},
        selectedCurrency: null,
    },

    computed: {
      flipCurrencies: function(){
        return this.flip(this.selectedCurrency)
      }
    },

    mounted(){
        this.getCurrencies();
        // this.flipCurrencies();
    },

    methods: {
        getCurrencies: function(){
            fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(currencies => this.currencies = currencies)
        },
      }
  })
})
