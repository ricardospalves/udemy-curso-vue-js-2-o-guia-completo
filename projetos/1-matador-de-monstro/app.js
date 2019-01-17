(function() {
  'use strict';

  class Player {
    constructor({id, title}) {
      this.id = id;
      this.title = title;
      this.life = 100;
      this.range = {
        min: 0,
        max: 100
      };
    }

    decrement(value) {
      const result = this.life - value;

      if(result > 0) {
        this.life -= value;
      }

      else {
        this.life = this.range.min;
      }
    }

    increment(value) {
      const result = this.life + value;

      if(result < 100) {
        this.life += value;
      }

      else {
        this.life = this.range.min;
      }
    }
  }

  const app = new Vue({
    el: '#app',
    data: {
      isPlaying: false,
      players: [
        new Player({
          id: 'you',
          title: 'Você'
        }),
        new Player({
          id: 'monster',
          title: 'Monstro'
        })
      ],
      result: {
        isShow: false,
        message: ''
      },
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
      }
    },
    methods: {
      start() {
        this.isPlaying = true
        this.result.isShow = false
      },
      giveUp() {
        this.isPlaying = false
      },
      getPlayerById(id) {
        return this.players.filter(item => item.id === id)[0];
      }
    },
    computed: {
      youLife() {
        return this.getPlayerById('you').life
      },
      monsterLife() {
        return this.getPlayerById('monster').life
      }
    },
    watch: {
      youLife(value) {
        if(!value) {
          this.result.isShow = true;
          this.result.message = 'O monstro comeu seu cu!';
        }
      },
      monsterLife(value) {
        if(!value) {
          this.result.isShow = true;
          this.result.message = 'Você botou o monstro pra mamar!';
        }
      }
    }
  });
})();
