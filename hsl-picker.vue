<template>
    <div class="pad">
        <div class="preview" v-bind:style="{'background': color}"><p>{{this.hsl}}</p></div>
        <div class="adjust">
            <input type="range" min="0" max="100" v-model="h">
            <input type="range" min="0" max="100" v-model="s">
            <input type="range" min="0" max="100" v-model="l">
        </div>
    </div>
</template>
<script>
export default {
  name: "hsl-picker",
  props: ["change", "giveHsl", "recvHsl"],
  data: function() {
    return {
      h: Math.random().toFixed(2) * 100,
      s: Math.random().toFixed(2) * 100,
      l: Math.random().toFixed(2) * 100
    };
  },
  computed: {
    color() {
      return `hsl(${this.h * 3.6}, ${this.s}%, ${this.l}%)`;
    },
    hsl() {
      return `H: ${(this.h * 3.6).toFixed(0)} S: ${parseInt(this.s).toFixed(
        0
)}% L: ${parseInt(this.l).toFixed(0)}%`;
    }
  },
  watch: {
    change() {
      this.giveHsl({ h: this.h, s: this.s, l: this.l });
    },
    recvHsl(hsl) {
      this.h = hsl.h;
      this.s = hsl.s;
      this.l = hsl.l;
    }
  }
};
</script>
<style scoped>
.pad,
.adjust {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.preview {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 255px;
  height: 160px;
}
.preview > p {
  font-size: 20px;
  color: #eeeeee;
  text-shadow: 0 0 3px #5c5c5c;
  text-align: center;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 255px;
  border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  margin-top: 15px;
  border-radius: 2px; /*将轨道设为圆角的*/
  background: #b4b4b4;
}
input[type="range"]::-ms-track {
  height: 4px;
  margin-top: 15px;
  border-radius: 2px; /*将轨道设为圆角的*/
  background: #b4b4b4;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  position: relative;
  top: -8px;
  height: 20px;
  width: 20px;
  background: #eeeeee;
  border-radius: 50%; /*外观设置为圆形*/
}
input[type="range"]::-ms-thumb {
  position: relative;
  top: -8px;
  height: 20px;
  width: 20px;
  background: #eeeeee;
  border-radius: 50%; /*外观设置为圆形*/
}
</style>
