(function() {
  'use strict';

  new Vue({
    el: '#desafio',
    data: {
      valor: 0
    },
    computed: {
      resultado() {
        return `Valor ${this.valor === 37 ? 'Igual' : 'Diferente'}`;
      }
    },
    watch: {
      resultado() {
        setTimeout(() => {
          this.valor = 0;
        }, 5000,);
      }
    }
  });
})();
