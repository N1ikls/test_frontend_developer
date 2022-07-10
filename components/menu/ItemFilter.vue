<template>
  <div class="menu">
    <ul class="topmenu">
      <li>
        <a>По умолчанию<i class="fa fa-angle-down"></i></a>
        <ul class="submenu">
          <button :disabled="validateMenu('price')" @click="sortMin">
            <a>Min</a>
          </button>
          <button :disabled="validateMenu('price')" @click="sortMax">
            <a>Max</a>
          </button>
          <button :disabled="validateMenu('title')" @click="sortTitle">
            <a>По названию</a>
          </button>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
function sortMinPrice(d1, d2) {
  return d1.price > d2.price ? 1 : -1
}
function sortMaxPrice(d1, d2) {
  return d1.price < d2.price ? 1 : -1
}
function sortTitle(d1, d2) {
  return d1.title.toLowerCase() > d2.title.toLowerCase() ? 1 : -1
}
export default {
  name: 'ItemFilter',
  computed: {
    ...mapGetters('menu', ['menu', 'validateMenu']),
  },
  methods: {
    sortMax() {
      const newMenu = this.menu
      newMenu.sort(sortMaxPrice)
    },
    sortMin() {
      const newMenu = this.menu
      newMenu.sort(sortMinPrice)
    },
    sortTitle() {
      const newMenu = this.menu
      newMenu.sort(sortTitle)
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  width: max-content;
  margin: 0;
}
.topmenu > li {
  display: inline-block;
  margin-right: 20px;
  position: relative;
}
.topmenu > li:last-child {
  margin-right: 0;
}
.topmenu {
  margin-left: auto;
}
a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  outline: none;
  transition: 0.5s linear;
}
li {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* Greys / 500 */

  color: #b4b4b4 !important;
}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}
ul {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.submenu {
  -webkit-transform: scaleY(0);
  -ms-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 2000;
}
button {
  all: unset;
  width: 100%;
}
ul li:hover .submenu {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
  cursor: pointer;
}
.submenu button:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}
.five ul {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.five ul a {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px !important;
  line-height: 15px;
  /* identical to box height */

  /* Greys / 500 */

  color: #b4b4b4 !important;
}
.five .submenu {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
