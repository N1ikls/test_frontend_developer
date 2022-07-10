<template>
  <div class="sticky">
    <div class="editor__panel panel">
      <div class="panel__title">Добавление товара</div>
      <div class="panel__block">
        <div v-if="editing_element" class="panel__card card">
          <div class="card__name">
            <label for="name">Наименование товара</label>
            <img src="@/assets/input.svg" alt="" />
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Введите наименование товара"
              class="input-styles"
            />
          </div>
          <div class="card__description">
            <label for="name">Наименование товара</label>
            <textarea
              id="description"
              v-model="description"
              placeholder="Введите описание товара"
              class="input-styles"
            />
          </div>
          <div class="card__href">
            <label for="name">Ссылка на изображение товара</label>
            <img src="@/assets/input.svg" alt="" />
            <input
              id="name"
              v-model="link"
              type="text"
              placeholder="Ссылка на изображение товара"
              class="input-styles"
            />
          </div>
          <div class="card__price">
            <label for="name">Цена товара</label>
            <img src="@/assets/input.svg" alt="" />
            <input
              id="name"
              v-model="price"
              type="text"
              placeholder="Введите цену"
              class="input-styles"
            />
          </div>
        </div>
        <button class="card__button" @click="addElement($event)">
          Добавить товар
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
function randomString(i) {
  let rnd = ''
  while (rnd.length < i) rnd += Math.random().toString(36).substring(2)
  return rnd.substring(0, i)
}
export default {
  name: 'EditPanel',
  computed: {
    editing_element() {
      return this.$store.state.menu.editing_element
    },
    name: {
      get() {
        if (this.editing_element && this.editing_element.title)
          return this.editing_element.title
        else return ''
      },
      set(newValue) {
        this.$store.commit('menu/setMenu', [
          'title',
          this.editing_element.id,
          newValue,
        ])
        this.update()
      },
    },
    link: {
      get() {
        if (this.editing_element && this.editing_element.link)
          return this.editing_element.link
        else return null
      },
      set(newValue) {
        this.$store.commit('menu/setMenu', [
          'link',
          this.editing_element.id,
          newValue,
        ])
        this.update()
      },
    },
    price: {
      get() {
        if (this.editing_element && this.editing_element.price)
          return this.editing_element.price
        else return null
      },
      set(newValue) {
        this.$store.commit('menu/setMenu', [
          'price',
          this.editing_element.id,
          newValue,
        ])
        this.update()
      },
    },
    img: {
      get() {
        if (this.editing_element && this.editing_element.img)
          return this.editing_element.img
        else return null
      },
      set(newValue) {
        this.$store.commit('menu/setMenu', [
          'img',
          this.editing_element.id,
          newValue,
        ])
        this.update()
      },
    },
    description: {
      get() {
        if (this.editing_element && this.editing_element.description)
          return this.editing_element.description
        else return null
      },
      set(newValue) {
        this.$store.commit('menu/setMenu', [
          'description',
          this.editing_element.id,
          newValue,
        ])
        this.update()
      },
    },
    menu: {
      get() {
        return this.$store.state.menu.menu
      },
      set(newValue) {
        this.$store.commit('menu/set', ['menu', newValue])
        this.update()
      },
    },
  },
  methods: {
    ...mapActions({ update: 'menu/updateLocalStorage' }),
    addElement() {
      const elem = {
        id: randomString(12),
        title: '',
        img: '',
        price: '99999',
        link: 'https://main-cdn.sbermegamarket.ru/hlr-system/200/767/538/993/013/1/100027171941b0.jpg',
      }
      this.$store.commit('menu/setPush', elem)
      this.update()
      this.$store.commit('menu/set', ['editing_element', elem])
    },
  },
}
</script>

<style lang="scss" scoped>
.panel {
  font-family: 'Source Sans Pro';
  color: #3f3f3f;
  font-style: normal;
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 15px;
  }
  &__block {
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    padding: 25px;
  }
}
label {
  margin-bottom: 5px;
}
input {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
}
textarea {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  min-height: 100px;
  word-wrap: break-word;
}
img {
  margin-bottom: 0.5rem;
}
.card {
  &__name {
    position: relative;
    margin-bottom: 15px;
  }
  &__description {
    margin-bottom: 15px;
  }
  &__href {
    margin-bottom: 15px;
  }
  &__price {
    margin-bottom: 25px;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 15px;
    width: 100%;
    background: #eeeeee;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
  }
}
.sticky {
  position: sticky;
  top: 30px;
}
</style>
