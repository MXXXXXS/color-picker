<template>
    <div class="pad">
        <div class="preview" v-bind:style="{'background': color}"><p>{{this.rgb}}</p></div>
        <div class="adjust">
            <div class="bkgd" :style="styleR"><input type="range" min="0" max="255" v-model="r"></div>
            <div class="bkgd" :style="styleG"><input type="range" min="0" max="255" v-model="g"></div>
            <div class="bkgd" :style="styleB"><input type="range" min="0" max="255" v-model="b"></div>
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
    },
    styleR() {
      return {
        background: `linear-gradient(to right,
        rgb(0, 0, 0),
        rgb(255, 0, 0)
        )`
      };
    },
    styleG() {
      return {
        background: `linear-gradient(to right,
        rgb(0, 0, 0),
        rgb(0, 255, 0)
        )`
      };
    },
    styleB() {
      return {
        background: `linear-gradient(to right,
        rgb(0, 0, 0),
        rgb(0, 0, 255)
        )`
      };
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
