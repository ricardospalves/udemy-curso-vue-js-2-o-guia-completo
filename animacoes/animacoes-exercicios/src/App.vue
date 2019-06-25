<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>

    <!-- <hr>

    <b-button
      class="mb-4"
      variant="primary"
      @click="isShow = !isShow"
    >
      Alternar alerta
    </b-button>

    <transition name="fade" appear>
      <b-alert
        show
        v-if="isShow"
      >
        {{ message }}
      </b-alert>
    </transition>

    <transition name="fadeUp" appear>
      <b-alert
        show
        v-if="isShow"
      >
        {{ message }}
      </b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert
        show
        v-if="isShow"
      >
        {{ message }}
      </b-alert>
    </transition>

    <hr>

    <b-select v-model="animationType">
      <option value="fade">Fade</option>
      <option value="fadeUp">Fade Up</option>
    </b-select>

    <transition :name="animationType">
      <b-alert
        show
        v-if="isShow"
      >
        {{ message }}
      </b-alert>
    </transition>

    <transition :name="animationType" mode="out-in">
      <b-alert
        variant="info"
        show
        v-if="isShow"
        key="info"
      >
        {{ message }}
      </b-alert>

      <b-alert
        variant="warning"
        show
        v-else
        key="warning"
      >
        {{ message }}
      </b-alert>
    </transition>

    <hr>

    <b-button
      variant="primary"
      @click="isShowBox = !isShowBox"
    >
      Alternar caixa
    </b-button>

    <transition
      :css="false"

      @before-enter="beforeEnter"
      @enter="enter"

      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        class="box"
        v-if="isShowBox"
      ></div>
    </transition>

    <hr>

    <b-button-group>
      <b-button
        variant="primary"
        @click="componentSelected = 'AlertInfo'"
      >
        Alert Info
      </b-button>

      <b-button
        variant="warning"
        @click="componentSelected = 'AlertWarning'"
      >
        Alert Warning
      </b-button>
    </b-button-group>

    <transition
      name="fade"
      mode="out-in"
    >
      <component :is="componentSelected"></component>
    </transition> -->

    <hr>

    <button
      class="mb-4"
      @click="addStudent"
    >
      Adicionar aluno
    </button>

    <transition-group
      tag="div"
      name="listItemFade"
    >
      <b-list-group
        class="relative"
        v-for="(student, index) in students" :key="student"
      >
        <b-list-group-item
          @click="removeStudent(index)"
        >
          {{ student }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
	</div>
</template>

<script>
import AlertWarning from './AlertWarning.vue'
import AlertInfo from './AlertInfo.vue'

export default {
  components: {
    AlertInfo,
    AlertWarning
  },
	data() {
    return {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quisquam!',
      isShow: false,
      isShowBox: true,
      animationType: 'fade',
      baseWidthOfBox: 0,
      componentSelected: 'AlertInfo',
      students: [
        'Maria',
        'Jose',
        'Madalena',
        'Joao'
      ]
    }
  },
  methods: {
    addStudent() {
      const randomString = Math.random().toString(32).substring(2)

      this.students.push(randomString)
    },
    removeStudent(index) {
      this.students.splice(index, 1)
    },
    animate(element, done, isNegative = false) {
      let counter = 1
      const interval = setInterval(() => {
        const newWidth = this.baseWidthOfBox + ( isNegative ? -counter * 10 : counter * 10 )

        element.style.width = `${newWidth}px`

        counter++

        if(counter > 30) {
          clearInterval(interval)
          done()
        }
      })
    },
    beforeEnter(el) {
      this.baseWidthOfBox = 0
      el.style.width = `${this.baseWidthOfBox}px`
    },
    enter(el, done) {
      this.animate(el, done)
    },
    beforeLeave(el) {
      this.baseWidthOfBox = 300
      el.style.width = `${this.baseWidthOfBox}px`
    },
    leave(el, done) {
      this.animate(el, done, true)
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
	font-size: 1.5rem;
}

.box {
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fadeOuDown {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(50%);
    opacity: 0;
  }
}

.fadeUp-enter-active {
  animation: fadeInUp .2s ease;
}

.fadeUp-leave-active {
  animation: fadeOuDown .2s ease;
}

.listItemFade-enter-active {
  animation: fadeInUp .2s ease;
}

.listItemFade-leave-active {

  position: absolute;
  left: 0;
  right: 0;

  animation: fadeOuDown .2s ease;
}

.listItemFade-move {
  transition: transform .2s;
}
</style>
