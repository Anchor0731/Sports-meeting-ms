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
              <a-input placeholder="账户" >
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
              <a-button type="primary">
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
import { defineComponent } from "vue";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UserOutlined,
    UnlockOutlined
  },
  setup() {}
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
