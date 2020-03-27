<template>
  <div class="login-container">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="login-from"
      :style="{ margin: mediaMargin }"
    >
      <h2 class="login-title">壹萬小時</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            min: 10,
            max: 20,
            message: "长度在 10 到 20 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            min: 10,
            max: 20,
            message: "长度在 10 到 20 个字符",
            trigger: "blur"
          }
        ]
      },
      mediaMargin: "160px auto 0px", //pc浏览器端样式
      docmHeightInit: document.documentElement.clientHeight //浏览器屏幕初始高度
    };
  },

  components: {},

  methods: {
    /*登录验证分2个步骤
    第一步返回token(认证是否登录成功)
    {
      "code":200,
      "flag":true,
      "message":"验证成功",
      "data":{
        "token":"admin"
      }
    }
    第二步再获取具体用户信息
    {
      "code":200,
      "flag":true,
      "message":"成功获取用户信息",
      "data":{
        id:1,
        "name":"朱帆",
        "roles":["manager"]  //角色
      }
    }
    */
    onSubmit(formName) {
      console.log("submit!");
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证通过
          login(this.form.username, this.form.password).then(response => {
            const { data } = response; // { data:data } = {response.data : XXXXX}
            if (data.flag) {
              //验证成功，通过token获取具体用户信息
              getUserInfo(data.data.token).then(response => {
                console.log("token-userinfo", response);
                //1.保存 token验证 和 用户信息
                localStorage.setItem("yiwan-token", data.data.token);
                localStorage.setItem(
                  "yiwan-userinfo",
                  JSON.stringify(response.data.data)
                );
                this.$message({
                  message: "登录成功",
                  type: "success",
                  duration: 1000
                });
                //跳转主页
                this.$router.push("/");
              });
            }
          });
        } else {
          this.$message({
            message: "登录失败",
            type: "warning",
            duration: 1500
          });
        }
      });
    }
  },

  mounted() {
    console.log("navigator.userAgent", navigator.userAgent);
    //当使用非PC端浏览器时候 监听屏幕高度
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.onresize = () => {
        let { clientHeight } = document.documentElement;
        clientHeight < this.docmHeightInit
          ? (this.mediaMargin = "0px auto")
          : (this.mediaMargin = "160px auto 0px");
      };

      //meta标签的user-scalable=0只能禁止双击缩放，所以此处需要禁止两手指缩放页面
      document.documentElement.addEventListener(
        "touchmove",
        function(event) {
          if (event.touches.length > 1) event.preventDefault();
        },
        false
      );
    }
  }
};
</script>

<style lang="less">
// 背景图
@imgURL: "https://ae01.alicdn.com/kf/H385e95e46be04983a270d5e96e1e82feM.jpg";
// 登录框label颜色
@color: rgb(66, 58, 58);

//媒体查询样式
.mediaWidth(@width_size:350px) {
  width: @width_size;
}

.mediaLogin {
  // 上左右下间隙，左右自动居中 当浏览器高度变太小时，会出现纵向滚动条，原因是margin-top:160px
  // margin: 160px auto 0px;
  background-color: rgba(89, 128, 159, 0.5);
  padding: 28px;
  border-radius: 10px;
}

.login-container {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  // width: 100%;
  // height: 100%;
  background-image: url(@imgURL);
  background-repeat: no-repeat;
  background-size: cover;

  .login-title {
    color: @color;
    //color: #04223C;
    text-align: center;
  }

  // 如果文档宽度小于 260 像素则修改
  @media only screen and (max-width: 400px) {
    .login-from {
      .mediaWidth(260px);
      .mediaLogin();
    }
  }

  // 如果文档宽度大于 401 像素则修改
  @media only screen and (min-width: 401px) {
    .login-from {
      .mediaWidth();
      .mediaLogin();
    }
  }

  .el-form-item__label {
    color: @color;
  }
}
</style>
