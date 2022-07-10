<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <EditPanel />
      </div>
      <div>
        <ItemList />
      </div>
    </div>
  </div>
</template>

<script>
import EditPanel from '../components/menu/EditPanel.vue'
import ItemList from '../components/menu/ItemList.vue'
export default {
  name: 'IndexPage',
  components: {
    ItemList,
    EditPanel,
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.container {
  padding: 30px;
}
</style>
