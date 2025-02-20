<template>
  <div class="">客户列表界面</div>
  <div style="margin-left: 20px">
    <el-row :gutter="20" v-for="item in customerList" :key="item.id">
      <el-col :span="16"
        ><div class="grid-content ep-bg-purple" />
        {{ item.name }}</el-col
      >
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple" />
        {{ item.sex }}</el-col
      >
    </el-row>
    <!-- 客户列表 -->
    <el-pagination
      background
      :page-size="1"
      :pager-count="5"
      layout="prev, pager, next"
      :total="customerList.length"
    />
    
    <hr/>
    <el-timeline style="max-width: 600px">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { MoreFilled } from '@element-plus/icons-vue'
import type { TimelineItemProps } from 'element-plus'

// 定义活动类型
interface ActivityType extends Partial<TimelineItemProps> {
  content: string
  timestamp: string
}

/**
 * 客户列表
 */
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
  }
])

const activities: ActivityType[] = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#1f1f1f'
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
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
