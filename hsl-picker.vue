<template>
  <div class="pad">
    <div class="preview" :style="{'background': color}"><p>{{this.hsl}}</p></div>
    <div class="adjust">
      <div class="bkgd" :style="styleH"><input type="range" min="0" max="100" v-model="h"></div>
      <div class="bkgd" :style="styleS"><input type="range" min="0" max="100" v-model="s"></div>
      <div class="bkgd" :style="styleL"><input type="range" min="0" max="100" v-model="l"></div>
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
    },
    styleH() {
      return {
        background: `linear-gradient(to right,
        hsl(0, ${this.s}%, ${this.l}%),
        hsl(51, ${this.s}%, ${this.l}%),
        hsl(103, ${this.s}%, ${this.l}%),
        hsl(154, ${this.s}%, ${this.l}%),
        hsl(205, ${this.s}%, ${this.l}%),
        hsl(256, ${this.s}%, ${this.l}%),
        hsl(307, ${this.s}%, ${this.l}%),
        hsl(360, ${this.s}%, ${this.l}%)
        )`
      };
    },
    styleS() {
      return {
        background: `linear-gradient(to right,
        hsl(${this.h * 3.6}, 0%, ${this.l}%),
        hsl(${this.h * 3.6}, 100%, ${this.l}%)
        )`
      };
    },
    styleL() {
      return {
        background: `linear-gradient(to right,
        hsl(${this.h * 3.6}, ${this.s}%, 0%),
        hsl(${this.h * 3.6}, ${this.s}%, 100%)
        )`
      };
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
  width: 256px;
  height: 160px;
  border-radius:20px;
}
.preview > p {
  font-size: 20px;
  color: #eeeeee;
  text-shadow: 0 0 3px #5c5c5c;
  text-align: center;
}
.bkgd {
  width: 256px;
  height: 20px;
  border-radius: 10px; 
  margin-top: 5px;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"] {
  -webkit-appearance: none;
  margin: 0;
  border: 0;
  height: 20px;
  width: 256px;
  background: transparent;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  margin: 0;
  border: 2px;
  height: 20px;
  width: 20px;
  border-color: #ffffff;
  border-style: solid;
  border-radius: 10px; 
  background: transparent;
  cursor: pointer;
}
input[type="range"]::-ms-thumb {
  margin: 0;
  border: 2px;
  height: 20px;
  width: 20px;
  border-color: #ffffff;
  border-style: solid;
  border-radius: 10px; 
  background: transparent;
  cursor: pointer;
}
</style>
