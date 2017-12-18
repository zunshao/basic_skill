### vue组件中取DOM元素
###### 一般不会用到
```vue
<template>
    <div class="tets" ref="mybox"></div>
</template>
<script>
export default {
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.$refs.mybox.style.color = 'red';
        }
    }
}
</script>
```