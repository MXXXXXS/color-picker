<template>
    <div class="whole">
        <div class="mode" @click="toggleMode">{{this.isRGB ? 'RGB' : 'HSL'}}</div>
        <rgb-picker :change="toHsl" :give-rgb="changeFromRgb" :recv-rgb="rgb" v-show="isRGB"></rgb-picker>
        <hsl-picker :change="toRgb" :give-hsl="changeFromHsl" :recv-hsl="hsl" v-show="!isRGB"></hsl-picker>
    </div>
</template>
<script>
import rgbPicker from "./rgb-picker.vue";
import hslPicker from "./hsl-picker.vue";
export default {
  name: "color-picker",
  components: {
    rgbPicker,
    hslPicker
  },
  data: function() {
    return {
      rgb: "",
      hsl: "",
      isRGB: true,
      toHsl: true,
      toRgb: false
    };
  },
  methods: {
    toggleMode() {
      if (this.isRGB) {
        this.toHsl = !this.toHsl;
      } else {
        this.toRgb = !this.toRgb;
      }
      this.isRGB = !this.isRGB;
    },
    changeFromRgb(rgb) {
      let hsl = this.rgb2hsl(rgb.r, rgb.g, rgb.b);
      this.hsl = { h: hsl.h * 100, s: hsl.s * 100, l: hsl.l * 100 };
    },
    changeFromHsl(hsl) {
      this.rgb = this.hsl2rgb(
        hsl.h / 100,
        hsl.s / 100,
        hsl.l / 100
      );
    },
    //参考https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
    hsl2rgb(h, s, l) {
      let r, g, b;
      if (s == 0) {
        r = g = b = l;
      } else {
        let hue2rgb = function hue2rgb(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      };
    },
    rgb2hsl(r, g, b) {
      (r /= 255), (g /= 255), (b /= 255);
      let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, l };
    }
  }
};
</script>
<style scoped>
.whole {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 256px;
  padding: 10px 5px 10px;
  border-radius: 15px;
  box-shadow: 0 0 20px grey;
}
.mode {
  text-align: center;
  color: darkgray;
  font-size: 24px;
  cursor: pointer;
}
</style>
