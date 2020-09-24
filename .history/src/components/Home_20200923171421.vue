<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/img/logo1.png" alt="加载失败" />
      </div>
      <div class="user_operation">
        <el-link :underline="false" href="https://ops.microfoundry.fii-fmc.com" target="_blank">运维中心</el-link>
        <el-dropdown @command="handleCommand">
          <div class="el-dropdown-link">
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="quit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="handleCommand">
          <div style="color: white; font-size: 22px;">
            主题
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="quit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- <el-button type="info" @click="logout">退出</el-button> -->
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 页面侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 页面内容主题 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      if (command === 'quit') {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  img {
    width: 60px;
    height: 60px;
  }
}
.user_operation {
    display: flex;
    align-items: center;
}
.el-link.el-link--default {
        margin-right: 15px;
        font-size: 16px;
        color: #fff;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.el-dropdown-link {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(../assets/img/timg.jpg);
  background-size: cover;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
