<template>
  <div class="pt-2">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>setting</el-breadcrumb-item>
      <el-breadcrumb-item>payfor</el-breadcrumb-item>
    </el-breadcrumb>
    <el-radio-group v-model="direction">
      <el-radio value="ltr">left to right</el-radio>
      <el-radio value="rtl">right to left</el-radio>
      <el-radio value="ttb">top to bottom</el-radio>
      <el-radio value="btt">bottom to top</el-radio>
    </el-radio-group>

    <el-button type="primary" style="margin-left: 16px" @click="drawer = true"> open </el-button>
    <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
      with footer
    </el-button>

    <el-drawer
      v-model="drawer"
      title="I am the title"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>Hi, there!</span>
    </el-drawer>
    <el-drawer v-model="drawer2" :direction="direction">
      <template #header>
        <h4>set title by slot</h4>
      </template>
      <template #default>
        <div>
          <el-radio v-model="radio1" value="Option 1" size="large"> Option 1 </el-radio>
          <el-radio v-model="radio1" value="Option 2" size="large"> Option 2 </el-radio>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">cancel</el-button>
          <el-button type="primary" @click="confirmClick">confirm</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { DrawerProps } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

function cancelClick() {
  drawer2.value = false
}

function scanSea() {
  ElMessageBox.confirm('Are you sure you want to close this')
  .then(() => {
    drawer2.value = true
  })
  .catch(() => {})
}

function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>

<style lang="scss" scoped></style>
