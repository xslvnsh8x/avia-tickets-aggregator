<template>
  <div class="layout">
    <LayoutHeader/>

    <Nuxt/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout-header/layout-header';

export default {
  name: 'default',
  components: {LayoutHeader}
}


</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}
</style>
