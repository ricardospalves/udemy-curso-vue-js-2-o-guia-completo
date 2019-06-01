export default {
  computed: {
    sentenceWithComma() {
      return this.sentence.replace(/\s/g, ',')
    },
    sentenceWithLengths() {
      return this.sentence
        .split(' ')
        .map(word => `${word} (${word.length})`)
        .join(' ')
    }
  }
}
