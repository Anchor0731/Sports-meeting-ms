<template>
  <div class="bg">
    <div class="auth">
      <div class="title-info">
        <img src="" alt="" />
        <div class="title">高校运动会管理系统</div>
      </div>
      <div class="form">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="登录">
            <div class="item">
              <a-input placeholder="账户">
                <template #prefix>
                  <UserOutlined />
                </template>
              </a-input>
            </div>
            <div class="item">
              <a-input placeholder="密码" >
                <template #prefix>
                  <UnlockOutlined />
                </template>
              </a-input>
            </div>
            <div class="item">
              <a href="">忘记密码</a>
            </div>
            <div class="item">
              <a-button type="primary">
                登录
              </a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="注册">
            <div class="item">
              <a-input
              placeholder="账户"
              v-model:value="regForm.account"
              >
                <template #prefix>
                  <UserOutlined />
                </template>
              </a-input>
            </div>
            <div class="item">
              <a-input
              placeholder="密码"
              v-model:value="regForm.password"
              >
                <template #prefix>
                  <UnlockOutlined />
                </template>
              </a-input>
            </div>
            <div class="item">
              <a-button
              type="primary"
              @click="register"
              >
                注册
              </a-button>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons-vue";
import { auth } from "@/service";

export default defineComponent({
  components: {
    UserOutlined,
    UnlockOutlined
  },
  setup() {
    const regForm = reactive({
      account: '',
      password: ''
    });

    const register = () => {
      auth.register(regForm.account, regForm.password);
    }

    return {
      regForm,
      register
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
