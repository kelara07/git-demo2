<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-xl flex-wrap navbar-light bg-light p-0">
    <div class="w-100 p-2 px-3 ct-header">
      <!-- 使用者操作 for mb -->
      <ul class="d-sx-none">
        <li>
          <span class="dropdown-item" style="position: relative; right: 0"
            >Hello, {{ 'klara' }}</span
          >
        </li>
        <li class="align-items-center">
          <a class="dropdown-item a-link" style="position: relative; right: 0" @click="LogoutFn"
            >登出</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { open3 } from '@/utils/elementAlert'
import { useRouter } from 'vue-router'

const router = useRouter()

const LogoutFn = () => {
  open3('确认登出吗？', function () {
    router.push('/login')
  })
}
</script>

<style lang="scss" scoped>
.location {
  position: relative;
  left: 100%;
  top: 0;
}
</style>
