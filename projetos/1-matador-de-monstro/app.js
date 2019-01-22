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
        this.life = this.range.max;
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
        const forceDamage = {
          you: this.damageRandom(10),
          monster: this.damageRandom(20)
        };
        
        this.getPlayerById('you').decrease(forceDamage.monster)
        this.getPlayerById('monster').decrease(forceDamage.you)
        
        this.logs.messages.unshift(`Jogador atingiu Monstro com ${forceDamage.you}`)
        this.logs.messages.unshift(`Monstro atingiu Jogador com ${forceDamage.monster}`)
      },
      specialAttack() {
        const forceDamage = {
          you: this.damageRandom(20),
          monster: this.damageRandom(10)
        };
        
        this.getPlayerById('you').decrease(forceDamage.monster)
        this.getPlayerById('monster').decrease(forceDamage.you)
        
        this.logs.messages.unshift(`Jogador atingiu Monstro com ${forceDamage.you}`)
        this.logs.messages.unshift(`Monstro atingiu Jogador com ${forceDamage.monster}`)
      },
      cure() {
        const damage = 10;
        const forceDamage = {
          you: this.damageRandom(damage),
          monster: this.damageRandom(damage)
        };
        
        this.getPlayerById('you').decrease(forceDamage.monster)
        this.getPlayerById('you').increase(forceDamage.you)
        
        this.logs.messages.unshift(`Jogador foi curado com ${forceDamage.you}`)
        this.logs.messages.unshift(`Monstro atingiu Jogador com ${forceDamage.monster}`)
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
