<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  activeIndex: 0,
  items: [1, 2, 3, 4]
})

const handleIndexChange = (index: number) => {
  state.activeIndex = index
}
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
