<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">登录</h2>
      <el-form  label-width="0px">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div class="login-actions">
          <el-button>忘记密码？</el-button>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </div>
        <div class="extra-actions">
          <el-button>注册</el-button>
          <el-button>帮助</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { ref } from 'vue'
import { useTagStore } from '@/stores'

const tagStore = useTagStore()

const tagList = ref<any[]>([
  {
    id: 1,
    tag:'落'
  },
  {
    id: 2,
    tag:'霞'
  },
  {
    id: 3,
    tag:'与'
  },
  {
    id: 4,
    tag:'孤'
  },
  {
    id: 5,
    tag:'鹜'
  },
  {
    id: 6,
    tag:'齐'
  },
  {
    id: 7,
    tag:'飞'
  },
])


const loginForm = ref<any>({
  username: '',
  password: ''
})

const onLogin = () => {
  tagStore.setTag(tagList.value)
  router.push('/about')
  console.log(tagStore.tag);
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f2f2f2;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.login-title {
  margin-bottom: 20px;
  text-align: center;
}

.login-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.extra-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>
