<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in bannerList" :key="item">
      <h3 text="2xl" justify="center">
        <img :src="item.img" alt="" />
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import img1 from '@/images/banner-1.png'
import img2 from '@/images/banner-2.png'
import img3 from '@/images/HB-banner-top.png'
import img4 from '@/images/HB-banner-bottom.png'

const state = reactive({
  activeIndex: 0,
  items: [1, 2, 3, 4]
})

const handleIndexChange = (index: number) => {
  state.activeIndex = index
}

const bannerList = [
  {
    id: '11',
    img: img1
  },
  {
    id: '22',
    img: img2
  },
  {
    id: '33',
    img: img3
  },
  {
    id: '44',
    img: img4
  }
]

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
