(function() {
  'use strict';

  const app = new Vue({
    el: '#app',
    data: {
      isPlaying: false,
      showMessage: false,
      btnClasses: [
        'p-2',
        'm-2',
        'bg-grey',
        'rounded'
      ],
      logs: {
        messages: [],
        classes: [
          'p-2',
          'my-2',
          'rounded'
        ]
      },
      players: [
        {
          id: 'player',
          title: 'Jogador',
          life: 100
        },
        {
          id: 'monster',
          title: 'Monstro',
          life: 100
        }
      ]
    },
    methods: {
      giveUp() {
        this.isPlaying = false;
        this.logs.messages = [];
      },
      play() {
        this.isPlaying = true;

        this.players.forEach(player => {
          player.life = 100;
        });
      },
      getPlayerById(id) {
        return this.players.filter(item => item.id === id)[0]
      },
    },
    computed: {
      playerLife() {
        return this.getPlayerById('player').life
      },
      monsterLife() {
        return this.getPlayerById('monster').life
      }
    },
    watch: {
      playerLife(newValue) {
        if( newValue <= 0 ) {
          this.getPlayerById('player').life = 0;
          this.showMessage = true;
          this.isPlaying = false;
        }
      },
      monsterLife(newValue) {
        if( newValue <= 0 ) {
          this.getPlayerById('monster').life = 0;
          this.showMessage = true;
          this.isPlaying = false;
        }
      }
    }
  });
})();
