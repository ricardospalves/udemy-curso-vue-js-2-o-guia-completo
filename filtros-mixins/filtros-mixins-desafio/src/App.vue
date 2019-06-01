<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
    <p>
      {{ this.sentence | spaceToComma }}
    </p>

    <hr>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>
      {{ this.sentence | counterAndAppendLengthWords }}
    </p>

    <hr>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>
      {{ sentenceWithComma }}
    </p>

    <p>
      {{ sentenceWithLengths }}
    </p>

    <hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
    <p>
      {{ sentenceWithComma }}
    </p>

    <p>
      {{ sentenceWithLengths }}
    </p>

	</div>
</template>

<script>
import mixinSentence from './mixinSentence'

export default {
  mixins: [
    mixinSentence
  ],
  data() {
    return {
      sentence: 'Lorem ipsum dolor amet'
    }
  },
  filters: {
    spaceToComma(text) {
      return text.replace(/\s/g, ',')
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
