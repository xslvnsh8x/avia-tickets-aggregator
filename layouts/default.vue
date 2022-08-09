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

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  height: 100vh;
  background: #F3F7FA;
  overflow: hidden;
}
</style>
