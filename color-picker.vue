<template>
    <div class="pad">
        <div class="preview" v-bind:style="{'background': color}">{{`R: ${this.r} G: ${this.g} B: ${this.b}`}}</div>
        <div class="adjust">
            <input type="range" min="0" max="255" v-model="r">
            <input type="range" min="0" max="255" v-model="g">
            <input type="range" min="0" max="255" v-model="b">
        </div>
    </div>
</template>
<script>
export default {
    name: 'color-picker',
    data: function () {
        return {
            r: 50,
            g: 236,
            b: 252
        }
    },
    computed: {
        color() {
            return `rgb(${this.r}, ${this.g}, ${this.b})`
        }
    }

}
</script>
<style scoped>
.pad, .adjust {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.preview {
    width: 255px;
    height: 160px;
}
input[type=range]:focus {
    outline: none;
}
input[type=range] {
    -webkit-appearance: none;
    width: 255px;
    border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}    

input[type=range]::-webkit-slider-runnable-track {
    height: 20px;
    border-radius: 10px; /*将轨道设为圆角的*/
    background: #fcfcfc; 
    box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    margin-top: 0px; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff; 
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 2px rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
}
</style>
