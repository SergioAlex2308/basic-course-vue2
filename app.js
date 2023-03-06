Vue.component('CoinDetail', {

  props: ['coin'],

  data() {
    return {
      showPrices: false,
      value: 0
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color',
      this.showPrices ? 'F4F4F4' : '3D3D3D');
    }
  },
  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.price;
    }
  },
  template: `
  <div>
    <img 
      v-on:mouseover="toggleShowPrices" 
      v-on:mouseout="toggleShowPrices" 
      v-bind:src="coin.img" 
      :alt="coin.name">

    <h1 :class="coin.changePercent > 0 ? 'green' : 'red'">
      {{ title }}
      <span> {{ coin.changePercent > 0 ? '👆' : '👇'}}</span>
    </h1>

    <input type="number"  v-model="value"/>
    <span> {{ convertedValue }}</span>

    <ul v-show="showPrices">
      <li class="uppercase" :class="{orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price}"
        v-for="(p, index) in coin.pricesWithDays" :key="p.day">
        {{ index }} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

    <span v-on:click="toggleShowPrices">
      {{ showPrices ? 'Ocultar precios' : 'Mostrar Precios'}}
    </span>

  </div>
  `
})

new Vue({
  el: '#app',

  data() {
    return {

      btc: {
        name: 'BitCoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
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
      },
      color: 'F4F4F4',
    }
  },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    }
  }
})