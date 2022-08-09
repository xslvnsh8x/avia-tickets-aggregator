<template>
  <div class="item-wrapper">
    <div class="header">
      <div class="price">
        13 400 Р
      </div>

      <div class="logo">
        <img :src="require('~/assets/images/logo_s7.png')" alt="logo">
      </div>
    </div>

    <div class="content">
      <div class="schedule">
        <div class="content-title">MOW – HKT</div>
        <div class="content-value">10:45 – 08:00</div>
      </div>

      <div class="time">
        <div class="content-title">В пути</div>
        <div class="content-value">21ч 15м</div>
      </div>

      <div class="transfers">
        <div class="content-title">2 пересадки</div>
        <div class="content-value">HKG, JNB</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket-list-item"
}
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0 2px 8px rgba(0 0 0 / 10%);
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.content-title {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #A0B0B9;
}

.price {
  font-size: 24px;
  line-height: 24px;
  color: #2196F3;
}

.logo img {
  height: 36px;
  object-fit: cover;
}
</style>
