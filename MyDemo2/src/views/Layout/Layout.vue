<template>
  <Header></Header>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/home">Home</el-menu-item>
    <el-menu-item index="/customer/list">Customer</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Setting</template>
      <el-menu-item index="/setting">Setting</el-menu-item>
      <el-menu-item index="/forPay">forPay</el-menu-item>
      <el-menu-item index="/forPhone">forPhone</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/three">Three</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Header from './Header.vue'

const activeIndex2 = ref('1')
</script>

<style lang="scss" scoped></style>
