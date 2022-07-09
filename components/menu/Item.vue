<template>
  <div class="card">
    <button class="card__delete icon">
      <img src="@/assets/delete.svg" alt="" />
    </button>
    <div class="card__img">
      <img :src="menu.link" alt="" srcset="" />
    </div>
    <div class="card__container">
      <div class="card__title">{{ menu.title }}</div>
      <div class="card__description">
        {{ menu.description }}
      </div>
      <div class="card__price">{{ menu.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: null,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  width: 17rem;
  position: relative;
  color: #3f3f3f;
  &__container {
    padding: 15px;
  }
  &__img {
    width: 100%;
    padding-top: 100%;
    background-color: black;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 15px;
  }
  &__description {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 20px;
  }
  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
  &__delete {
    z-index: 1000;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: -8px;
    padding: 8px;
    img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
