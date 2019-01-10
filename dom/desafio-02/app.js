(function() {
  'use strict';

  new Vue({
    el: '#desafio',
    data: {
      valor: ''
    },
    methods: {
      showAlert() {
        alert('FIMOSE')
      },
      getValue(event) {
        this.valor = event.target.value;
      }
    }
  });
})();
