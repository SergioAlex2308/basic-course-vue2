Vue.component('modal', {

	data () {
		return {
			title: 'Title Modal'
		}
	},

	methods: {
		closeModal () {
			this.$emit('close-modal');
		}
	},

	template: `
	  <div class="modal-mask">
		<div class="modal-wrapper">
		  <div class="modal-container">
			<h3>{{title}}</h3>
			<slot name="body"></slot>
			<footer>
			  <button v-on:click="closeModal">Cerrar</button>
			</footer>
		  </div>
		</div>
	  </div>`
  })
  
  new Vue({
	el: '#app',

	data () {
		return {
			showModal: false,
		}
	},
	methods: {
		toggleModal () {
			this.showModal = !this.showModal;
		}
	}
  })