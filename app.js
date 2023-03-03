new Vue({
  el: '#app',

  data() {
    return {
      name: 'BitCoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,

      value: 0,

      color: 'F4F4F4',
      price: 8400,

      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],

      showPrices: false,
    }
  },

  computed: {
    title () {
      return `${this.name} - ${this.symbol}`
    },
    convertedValue() {
      if(!this.value) {
        return 0;
      }
      return this.value / this.price;
    }
  },

  watch: {
    showPrices() {

    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices;

      this.color = this.color.split('').reverse().join('');
    }
  }
})