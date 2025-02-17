<template>
  <div class="">客户列表界面</div>
  <div class="wrapper">
      <el-row :gutter="20" v-for="item in customerList" :key="item.id">
        <el-col :span="16"><div class="grid-content ep-bg-purple" />{{ item.name }}</el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" />{{ item.sex }}</el-col>
      </el-row>
    <!-- 客户列表 -->
    <el-pagination
    background
    :page-size="1"
    :pager-count="5"
    layout="prev, pager, next"
    :total="customerList.length"
  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const customerList = ref<any[]>([
  {
    id: '1102',
    name: 'a',
    age: '12',
    sex: '女'
  },
  {
    id: '1103',
    name: 'b',
    age: '18',
    sex: '女'
  },
  {
    id: '1104',
    name: 'c',
    age: '22',
    sex: '男'
  },
  {
    id: '1105',
    name: 'd',
    age: '32',
    sex: '女'
  },
  {
    id: '1106',
    name: 'e',
    age: '62',
    sex: '男'
  },
])

</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
