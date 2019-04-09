<template>
  <div>
    <div>{{ progress }}%</div>
    <div class="progress">
      <div class="progress__fill"
        :style="{width: progress + '%'}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
  .progress {
    border: 1px solid;
  }

  .progress__fill {
    width: 0;
    height: 1rem;
    background-color: red;
  }
</style>
