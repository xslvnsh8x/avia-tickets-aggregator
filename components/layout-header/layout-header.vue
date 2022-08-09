<template>
  <div class="header-wrapper">
    <nuxt-link
      to="/"
      class="logo"
    >
      <img src="~/assets/images/logo.svg" alt="logo">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "layout-header"
}
</script>

<style scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: flex;
}
</style>
