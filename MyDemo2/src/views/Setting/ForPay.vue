<template>
  <div class="pt-2">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>setting</el-breadcrumb-item>
      <el-breadcrumb-item>payfor</el-breadcrumb-item>
    </el-breadcrumb>
    <hr />
    <el-page-header :icon="ArrowLeft">
      <template #content>
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
    </el-page-header>
    <el-divider />
    <!-- 抽屉弹框 -->
    <el-dropdown placement="top-start">
      <el-button> topStart </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown placement="bottom-start">
      <el-button> bottomStart </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>The Action 1st</el-dropdown-item>
          <el-dropdown-item>The Action 2st</el-dropdown-item>
          <el-dropdown-item>The Action 3st</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-divider />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ArrowLeft } from '@element-plus/icons-vue'

import Mock, { Random } from 'mockjs'

/**
 * 模拟数据
 */
const data = Mock.mock({
  'number1|1-100.1-10': 1,
  'number2|123.1-10': 2,
  'number4|123.10': 3.12
})

const data5 = Random.cname()
console.log(data5)

</script>

<style lang="scss" scoped></style>
