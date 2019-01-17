(function() {
  'use strict';
  console.clear();

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
    
    fill() {
      this.life = this.range.max;
    }

    decrease(value) {
      const result = this.life - value;

      if(result > 0) {
        this.life -= value;
      }

      else {
        this.life = this.range.min;
      }
    }

    increase(value) {
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
        message: '',
        class: ''
      },
      buttons: {
        isShow: false,
        classes: [
          'p-2',
          'm-2',
          'bg-grey',
          'rounded'
        ]
      },
      logs: {
        messages: [],
        classes: [
          'p-2',
          'my-2',
          'rounded'
        ],
        clear() {
          this.messages = []
        }
      }
    },
    methods: {
      start() {
        this.buttons.isShow = true
        this.result.isShow = false
        this.logs.clear()
        
        this.players.forEach(player => {
          player.fill()
        })
      },
      giveUp() {
        this.buttons.isShow = false
      },
      getPlayerById(id) {
        return this.players.filter(item => item.id === id)[0];
      },
      damageRandom(maxRange = 1) {
        const math = Math;

        return math.round(math.random() * maxRange);
      },
      attack() {
        const damage = {
          you: this.damageRandom(20),
          monster: this.damageRandom(10)
        }
        
        for(let key in damage) {
          const value = damage[key];
          
          this.getPlayerById(key).decrease(value)
          
          this.logs.messages.unshift(`${key === 'you' ? 'Você atingiu o montro' : 'O monstro te atingiu'} com ${value}`)
        }
      },
      specialAttack() {
        const damage = {
          you: this.damageRandom(10),
          monster: this.damageRandom(20)
        }
        
        for(let key in damage) {
          const value = damage[key];
          
          this.getPlayerById(key).decrease(value)
          
          this.logs.messages.unshift(`${key === 'you' ? 'Você atingiu o montro' : 'O monstro te atingiu'} com ${value}`)
        }
      },
      cure() {
        const damageValue = 15
        const damage = {
          you: this.damageRandom(damageValue),
          monster: this.damageRandom(damageValue)
        }
        
        for(let key in damage) {
          const value = damage[key];
          
          this.getPlayerById(key).decrease(value)
          
          this.logs.messages.unshift(`${key === 'you' ? 'Você foi curado' : 'O monstro te atingiu'} com ${value}`)
        }
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
          this.buttons.isShow = false;
          this.result.message = 'O Monstro venceu!';
          this.result.class = 'text-red';
        }
      },
      monsterLife(value) {
        if(!value) {
          this.result.isShow = true;
          this.buttons.isShow = false;
          this.result.message = 'Você venceu!';
          this.result.class = 'text-green'
        }
      }
    }
  });
})();
