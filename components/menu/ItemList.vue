<template>
  <div>
    <transition-group name="list" tag="p" class="card__row list">
      <div v-for="(i, index) in menu" :key="i.id" class="list__item">
        <div
          :class="{ border_active: editing_element === i }"
          class="list-animation"
          @click="activate(i, index)"
        >
          <Item :menu="i" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Item from './Item.vue'
export default {
  name: 'ItemList',

  components: {
    Item,
  },

  computed: {
    ...mapGetters('menu', ['menu']),
    editing_element() {
      return this.$store.state.menu.editing_element
    },
  },
  mounted() {
    this.get()
  },
  methods: {
    ...mapActions({ get: 'menu/getlocalStorage' }),
    activate(item, index) {
      this.$store.commit('menu/set', ['editing_element', item])
      this.id = index
    },
  },
}
</script>

<style lang="scss" scoped>
.card__row {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}
.list {
  &__item {
    padding: 15px;
    display: flex;
  }
}
.border_active {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}
.list-animation {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
