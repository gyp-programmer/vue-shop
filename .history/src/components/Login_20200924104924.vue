<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="加载失败">
            </div>
            <!-- 登录表单区 -->
            <el-form label-width="0px" ref="loginFormRef" :model="form" :rules="rules" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="form.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input type="password" prefix-icon="el-icon-lock" v-model="form.password"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="logintest">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单的数据绑定对象
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '用户名长度在5 - 11 个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 15, message: '密码长度在6 - 15 个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      //   console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // 如果打印出来的结果为一个promise对象，则用await和它紧接的函数上加async修饰为异步即可转化为想要的数据  简化promise
        // data重命名为res
        const { data: res } = await this.$http.post('login', this.form)
        if (res.meta.status !== 200) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '用户名或者密码错误'
          })
        } else {
          // this.$message({
          //   showClose: true,
          //   type: 'success',
          //   message: '登录成功'
          // })
          // 1. 将登陆成功后的token, 保存到客户端的sessionStorage中
          //     1.1 项目中的登录以外的接口，必须在登录之后访问
          //     1.2 token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
          // 2. 通过编程式导航跳转到后台主页，路由地址是/home
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        }
      })
    },
    logintest() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.btns {
    display: flex;
    justify-content: flex-end;
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
