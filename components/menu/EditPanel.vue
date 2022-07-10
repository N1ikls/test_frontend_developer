<template>
  <div class="sticky">
    <div class="editor__panel panel">
      <div class="panel__row">
        <div class="panel__title">Добавление товара</div>
        <transition name="fade">
          <button
            v-show="editing_element"
            class="panel__edit exit-panel"
            @click="cardClose()"
          >
            <img src="@/assets/cross.png" alt="" />
          </button>
        </transition>
      </div>
      <div class="panel__block">
        <div class="panel__card card">
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
        <button
          class="card__button"
          @click="addElement($event)"
        >
          Добавить товар
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
function randomString(i) {
  let rnd = ''
  while (rnd.length < i) rnd += Math.random().toString(36).substring(2)
  return rnd.substring(0, i)
}
export default {
  name: 'EditPanel',
  computed: {
    ...mapGetters('menu', ['validateCard', 'values_form']),
    editing_element() {
      return this.$store.state.menu.editing_element
    },
    name: {
      get() {
        if (this.editing_element && this.editing_element.title)
          return this.editing_element.title
        else return this.values_form.title
      },
      set(newValue) {
        if (this.editing_element) {
          this.$store.commit('menu/setMenu', [
            'title',
            this.editing_element.id,
            newValue,
          ])
          this.update()
        } else {
          this.$store.commit('menu/setValuesForm', ['title', newValue])
        }
      },
    },
    link: {
      get() {
        if (this.editing_element && this.editing_element.link)
          return this.editing_element.link
        else return this.values_form.link
      },
      set(newValue) {
        if (this.editing_element) {
          this.$store.commit('menu/setMenu', [
            'link',
            this.editing_element.id,
            newValue,
          ])
          this.update()
        } else {
          this.$store.commit('menu/setValuesForm', ['link', newValue])
        }
      },
    },
    price: {
      get() {
        if (this.editing_element && this.editing_element.price)
          return this.editing_element.price
        else return this.values_form.price
      },
      set(newValue) {
        if (this.editing_element) {
          this.$store.commit('menu/setMenu', [
            'price',
            this.editing_element.id,
            newValue,
          ])
          this.update()
        } else {
          this.$store.commit('menu/setValuesForm', ['price', newValue])
        }
      },
    },
    description: {
      get() {
        if (this.editing_element && this.editing_element.description)
          return this.editing_element.description
        else return this.values_form.description
      },
      set(newValue) {
        if (this.editing_element) {
          this.$store.commit('menu/setMenu', [
            'description',
            this.editing_element.id,
            newValue,
          ])
          this.update()
        } else {
          this.$store.commit('menu/setValuesForm', ['description', newValue])
        }
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
    cardClose() {
      this.$store.commit('menu/set', ['editing_element', null])
    },
    addElement() {
      const elem = {
        id: randomString(12),
        title: this.values_form.title,
        price: this.values_form.price,
        link: this.values_form.link,
        description: this.values_form.description,
      }
      this.$store.commit('menu/setPush', elem)
      this.update()
      this.$store.commit('menu/set', ['editing_element', elem])
      this.$store.commit('menu/set', ['values_form', {}])
    },
  },
}
</script>

<style lang="scss" scoped>
.panel {
  font-family: 'Source Sans Pro';
  color: #3f3f3f;
  font-style: normal;
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
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
    background: #7bae73;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(40 167 69 / 50%);
    }
    &:disabled {
      background: #eeeeee;
    }
  }
}
.sticky {
  position: sticky;
  top: 30px;
}
.exit-panel {
  background: #f0efec;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  img {
    margin: 0;
    width: 32px;
    height: 32px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
