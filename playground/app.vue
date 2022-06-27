<template>
  <p>Click: {{ target }}</p>
  <hr />
  <div class="box">
    <button v-click-outside="handler" class="item" @click="target = 'Inside'">
      Outside
    </button>
  </div>
</template>

<script setup lang="ts">
  const target = ref('');

  const handler = (event) => {
    target.value = 'Outside';
    console.log('Clicked outside');
  };
</script>

<style>
  .box {
    width: 300px;
    height: 200px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
    border: 1px dashed red;
  }
  .item {
    height: 100px;
    width: 200px;
  }
</style>
