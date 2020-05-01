<template>
    <div>
        <el-form>
            <el-form-item label="用户名">
                <el-input />
            </el-form-item>
            <el-form-item label="密码">
                <el-input />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style lang="scss">
@supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
    .login-container .el-input {
        input { color: $loginCursorColor; }
        input::first-line { color: $lightGray; }
    }
}
</style>

<style scoped>

</style>