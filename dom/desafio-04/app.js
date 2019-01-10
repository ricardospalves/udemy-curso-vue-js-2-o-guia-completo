(function() {
  'use strict';

  new Vue({
    el: '#desafio',
    data: {
      efeito: true,
      classe3: '',
      classe4: '',
      applyClass4: true,
      cor5: '',
      progressBarWidth: 0
    },
    methods: {
      iniciarEfeito() {
        console.log('iniciarEfeito()')

        setInterval(() => {
          this.efeito = !this.efeito;
        }, 1000);
      },
      iniciarProgresso() {
        console.log('iniciarProgresso()')

        this.progressBarWidth = 0;

        let interval = setInterval(() => {
          if(this.progressBarWidth < 100)
            this.progressBarWidth++;
          else
            clearInterval(interval);
        }, 25)
      }
    }
  });
})();
