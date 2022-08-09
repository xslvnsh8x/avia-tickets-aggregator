<template>
  <div class="main-page">
    <div class="aside">
      <div class="aside-item">
        <div class="aside-item-heading">
          Количество пересадок
        </div>
        <div class="aside-item-options">
          <div class="checkbox">
            <input type="checkbox" id="1-transfer" name="1-transfer">
            <label for="1-transfer">1 пересадка</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="2-transfer" name="2-transfer">
            <label for="2-transfer">2 пересадки</label>
          </div>

          <div class="checkbox">
            <input type="checkbox" id="3-transfer" name="3-transfer">
            <label for="3-transfer">3 пересадки</label>
          </div>
        </div>
      </div>

      <div class="aside-item">
        <div class="aside-item-heading">
          Компания
        </div>
        <div class="aside-item-options">
          <div class="radio">
            <input type="radio" id="all" name="company" value="all" checked>
            <label for="all">Все</label>
          </div>

          <div class="radio">
            <input type="radio" id="s7airlines" name="company" value="s7airlines">
            <label for="s7airlines">S7 Airlines</label>
          </div>

          <div class="radio">
            <input type="radio" id="xiamen" name="company" value="xiamen">
            <label for="xiamen">XiamenAir</label>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="header">
        <div class="tabs">
          <div class="tabs-button">
            Самый дешевый
          </div>
          <div class="tabs-button">
            Самый быстрый
          </div>
          <div class="tabs-button">
            Оптимальный
          </div>
        </div>
      </div>

      <div class="content">
        <TicketListItem/>

        <TicketListItem/>
      </div>

      <div class="footer">
        <div class="show-more">
          Показать еще 5 билетов
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TicketListItem from "~/components/ticket-list-item/ticket-list-item.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {TicketListItem},
})
</script>

<style scoped>
.main-page {
  display: grid;
  grid-template-columns: 232px 1fr;
  gap: 20px;
  padding: 0 16px 16px;
}

.aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main {
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  gap: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #DFE5EC;
  overflow: hidden;
}

.tabs-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.tabs-button:hover {
  background: #F1FCFF;
}

.aside-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: #FFF;
  box-shadow: 0 2px 8px rgba(0 0 0 / 10%);
  border-radius: 5px;
}

.aside-item-heading {
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.aside-item-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  line-height: 20px;
}

.footer {
  display: flex;
}

.show-more {
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  background: #2196F3;
  border-radius: 5px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFF;
  cursor: pointer;
}

.show-more:hover {
  background: #1c7dcb;
}

@media (min-width: 991.98px) {
  .main-page {
    padding: 0 calc(50vw - 480px) 16px;
  }
}

@media (min-width: 1199.98px) {
  .main-page {
    padding: 0 calc(50% - 590px) 16px;
  }
}
</style>
