<template>
  <div class="card__row list">
    <div v-for="(i, index) in menu" :key="index" class="list__item">
      <Item :menu="i" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item.vue'
export default {
  name: 'ItemList',
  components: {
    Item,
  },
  computed: {
    ...mapGetters('menu', ['menu']),
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.card__row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.list {
  &__item {
    padding: 15px;
  }
}
</style>
