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
      isRunning: false,
      showResult: false,
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
      buttonClasses: [
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
        ],
        clear() {
          this.messages = []
        }
      }
    },
    methods: {
      start() {
        this.isRunning = true
        this.showResult = false
        this.logs.clear()

        this.players.forEach(player => {
          player.fill()
        })
      },
      giveUp() {
        this.isRunning = false
      },
      getPlayerById(id) {
        return this.players.filter(item => item.id === id)[0];
      },
      damageRandom(maxRange = 1) {
        const math = Math;

        return math.round(math.random() * maxRange);
      },
      playerAction({ youDamage, monsterDamage, isCure = false }) {
        const forceDamage = {
          you: this.damageRandom(youDamage),
          monster: this.damageRandom(monsterDamage)
        };

        this.getPlayerById('you').decrease(forceDamage.monster)

        if( isCure ) {
          this.getPlayerById('you').increase(forceDamage.you)

          this.logs.messages.unshift(`Jogador foi curado com ${forceDamage.you}`)
        }

        else {
          this.getPlayerById('monster').decrease(forceDamage.you)

          this.logs.messages.unshift(`Jogador atingiu Monstro com ${forceDamage.you}`)
        }

        this.logs.messages.unshift(`Monstro atingiu Jogador com ${forceDamage.monster}`)
      },
      attack() {
        this.playerAction({
          youDamage: 10,
          monsterDamage: 20
        })
      },
      specialAttack() {
        this.playerAction({
          youDamage: 20,
          monsterDamage: 10
        })
      },
      cure() {
        const damage = 10;

        this.playerAction({
          youDamage: damage,
          monsterDamage: damage,
          isCure: true
        })
      }
    },
    computed: {
      hasResult() {
        return this.getPlayerById('you').life === 0 || this.getPlayerById('monster').life === 0;
      },
      youLife() {
        return this.getPlayerById('you').life
      },
      monsterLife() {
        return this.getPlayerById('monster').life
      }
    },
    watch: {
      hasResult(value) {
        if(value) {
          this.isRunning = false;
          this.showResult = true;
        }
      }
    }
  });
})();
