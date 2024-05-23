<template>
  <el-container>
    <el-main>
      <el-row class="row-bg" justify="center" aline>
        <el-col :span="24" :offset="6">
          <div class="flex gap-4 mb-4">
            <span>账号</span>
            <el-input v-model="input1" style="width: 240px" placeholder="请输入账号" />
          </div>
        </el-col>
        <el-col :span="24" :offset="6">
          <div class="flex gap-4">
            <span>密码</span>
            <el-input v-model="input3" style="width: 240px" placeholder="请输入密码"> </el-input>
          </div>
        </el-col>
        <el-col :span="24" :offset="6">
          <el-button type="primary" style="width: 240px" @click="loginIn">登录</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue'
const input1 = ref('')
const input3 = ref('')

const loginIn = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped>
</style>
