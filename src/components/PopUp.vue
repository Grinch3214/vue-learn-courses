<template>
  <div class="dialog">
    <div class="dialog-child">
      <div>
        <button @click="$emit('closePopUp', product)" class="btn">X</button>
      </div>
      {{ message }}
      <input type="text" v-model="product.name" />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "PopUp",
  data: () => ({
    message: "I`m Pop Up",
    product: {
      name: "",
      id: 1,
    },
    interval: setInterval(() => console.log('Intervl '), 3 * 1000)
  }),
  beforeCreate() {
    console.log('beforeCreate ', this.message)
  },
  created() {
    console.log('created ', this.message)
  },
  beforeMount() {
    console.log('beforeMount ', this.message)
  },
  mounted() {
    console.log('mounted ', this.message)
  },
  beforeUpdate() {
    console.log('beforeUpdate ', this.message)
  },
  updated() {
    console.log('updated ', this.message)
  },
  beforeDestroy() {
    console.log('beforeDestroy ', this.message)
    clearInterval(this.interval)
  },
  destroyed() {
    console.log('destroy ', this.message)
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  background: #0008;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.dialog-child {
  position: absolute;
  z-index: 35;
  overflow: auto;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  padding: 0;
  color: #faf;
  text-align: right;
}
</style>