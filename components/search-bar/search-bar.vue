<template>
  <div class="search">
    <div class="where-from">
      <input
        type="text"
        id="whereFrom"
        name="whereFrom"
        v-model="whereFrom"
        placeholder="Откуда"
      >
    </div>
    <div class="where-to">
      <input
        type="text"
        id="whereTo"
        name="whereTo"
        v-model="whereTo"
        placeholder="Куда"
      >
    </div>
    <div class="when-from">
      <input
        type="date"
        id="whenFrom"
        name="whenFrom"
        v-model="whenFrom"
        placeholder="Когда"
      >
    </div>
    <div class="when-back">
      <input
        type="date"
        id="whenBack"
        name="whenBack"
        v-model="whenBack"
        placeholder="Обратно"
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "search-bar",
  data() {
    return {
      whereFrom: '',
      whereTo: '',
      whenFrom: '',
      whenBack: '',
    }
  }
}

</script>

<style scoped>
.search {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  height: 100%;
  background: #F3F7FA;
  box-shadow: 0 2px 8px rgba(0 0 0 / 10%);
}

input {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 15px;
  transition: .2s box-shadow;
}

input:hover,
input:focus {
  box-shadow: 0 0 0 2px #FF6F32;
  outline: none;
}

.where-from input {
  border-radius: 5px 0 0 5px;
}

.where-to {
  /* width: 100%; */
}

.when-from {
  /* width: 100%; */
}

.when-back input {
  border-radius: 0 5px 5px 0;
}
</style>
