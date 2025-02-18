<template>
  <div class="wrapper">
    <div>
      <span v-for="(item, index) in tag" :key="index">{{ item.tag }}</span>
    </div>
    <el-card style="max-width: 600px">
      <template #header>
        <div class="card-header">
          <div>板块1</div>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-card>

    <hr />
    <div class="flex flex-wrap gap-4">
      <el-card style="width: 480px" shadow="always">Always</el-card>
      <el-card style="width: 480px" shadow="hover">Hover</el-card>
      <el-card style="width: 480px" shadow="never">Never</el-card>
    </div>

    <hr />
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="title1" name="1">
          <div>content1</div>
          <div>content2</div>
        </el-collapse-item>
        <el-collapse-item title="title2" name="2">
          <div>content1</div>
          <div>content2</div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <hr/>
  </div>
</template>

<script setup lang="ts">
import { useTagStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useTagStore()

// 标签
const { tag } = storeToRefs(store)

const update = () => {
  tag.value.splice(0, 1)
}

const activeName = ref('1')
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.wrapper {
  margin-bottom: 100px auto;
}
</style>
