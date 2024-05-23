<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/setting"><Button class="primary">Setting</Button></RouterLink>
        <RouterLink to="/about"><Button type="button" class="primary">About</Button></RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped></style>
