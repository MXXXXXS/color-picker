<template>
    <div class="pad">
        <div class="preview" v-bind:style="{'background': color}"><p>{{this.rgb}}</p></div>
        <div class="adjust">
            <input type="range" min="0" max="255" v-model="r">
            <input type="range" min="0" max="255" v-model="g">
            <input type="range" min="0" max="255" v-model="b">
        </div>
    </div>
</template>
<script>
export default {
  name: "rgb-picker",
  props: ["change", "giveRgb", 'recvRgb'],
  data: function() {
    return {
      r: (Math.random() * 255).toFixed(0),
      g: (Math.random() * 255).toFixed(0),
      b: (Math.random() * 255).toFixed(0)
    };
  },
  computed: {
    color() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    },
    rgb() {
      return `R: ${this.r} G: ${this.g} B: ${this.b}`;
    }
  },
  watch: {
    change() {
      this.giveRgb({ r: this.r, g: this.g, b: this.b });
    },
    recvRgb(rgb) {
      this.r = rgb.r
      this.g = rgb.g
      this.b = rgb.b
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
