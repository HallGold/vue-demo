<template>
  <el-container>
    <el-header>
      <div>logo</div>
      <div>
        <span>名称</span>
        <span>头像</span>
        <span>退出登录</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo">
          <el-submenu>
            <template v-slot:title>
              <i class="el-icon-location"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item>个人中心</el-menu-item>
            <el-menu-item>修改密码</el-menu-item>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-document"></i>
            <span>导航三</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-setting"></i>
            <span>导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
}
</style>
