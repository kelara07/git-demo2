<template>
  <div>
    <span v-for="(item, index) in tag" :key="index">{{ item.tag }}</span>
  </div>
</template>

<script setup lang="ts">
import { useTagStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useTagStore()

const { tag } = storeToRefs(store)

const update = () => {
  tag.value.splice(0, 1)
}
</script>

<style lang="scss" scoped></style>
