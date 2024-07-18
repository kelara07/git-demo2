<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/setting">
          <el-button type="primary">Setting</el-button>
        </RouterLink>
        <RouterLink to="/about">
          <el-button type="primary">About</el-button>
        </RouterLink>
        <RouterLink to="/three">
          <el-button type="primary">Three</el-button>
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped></style>
