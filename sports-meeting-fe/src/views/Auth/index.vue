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
              <a-input
              placeholder="用户名"
              v-model:value="loginForm.account"
              >
                <template #prefix>
                  <UserOutlined />
                </template>
              </a-input>
            </div>
            <div class="item">
              <a-input
              placeholder="密码"
              v-model:value="loginForm.password"
              >
                <template #prefix>
                  <UnlockOutlined />
                </template>
              </a-input>
            </div>
            <div class="item">
              <a href="">忘记密码</a>
            </div>
            <div class="item">
              <a-button
              type="primary"
              @click="login"
              >
                登录
              </a-button>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="注册">
            <div class="item">
              <a-input
              placeholder="用户名"
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
import { auth } from "../../service";
import { message } from "ant-design-vue";
import { result } from "../../helpers/utils";

export default defineComponent({
  components: {
    UserOutlined,
    UnlockOutlined
  },
  setup() {
    //注册表单
    const regForm = reactive({
      account: '',
      password: ''
    });

    //注册逻辑
    const register = async () => {
      if( regForm.account === '' ){
        message.info('请输入用户名');
        return
      }

      if( regForm.password === '' ){
        message.info('请输入密码');
        return
      }
      
      const res = await auth.register(regForm.account, regForm.password);

      result(res).succes((data) => {
        message.success(data.msg);
      })
    };

    //登录表单
    const loginForm = reactive({
      account: '',
      password: ''
    });

    //登录逻辑
    const login = async () => {
      if( loginForm.account === '' ){
        message.info('请输入用户名');
        return
      }

      if( loginForm.password === '' ){
        message.info('请输入密码');
        return
      }

      const res = await auth.login(loginForm.account, loginForm.password);

      result(res).succes((data) => {
        message.success(data.msg);
      })
    };

    //setup函数中定义的变量和方法最后都要return出去才可以让模板使用
    return {
      regForm,
      register,

      loginForm,
      login
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
