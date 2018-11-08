import Vue from "vue";
import colorPicer from './color-picker.vue'
new Vue({
    render: c => c(colorPicer)
}).$mount('#color-picker')