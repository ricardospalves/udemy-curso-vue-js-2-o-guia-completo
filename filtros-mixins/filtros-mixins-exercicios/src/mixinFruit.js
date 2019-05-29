export default {
  data() {
    return {
      fruit: '',
      fruits: [
        'banana',
        'maçã',
        'abacaxi'
      ]
    }
  },
  methods: {
    add() {
      this.fruits.push(this.fruit)
      this.fruit = ''
    }
  }
}
