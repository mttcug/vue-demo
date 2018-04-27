<template>
  <div class="login-block">
    <fieldset>
      <legend>{{$t(loginTip.loginLegend)}}</legend>
      <form>
        <p>
          <label for="name">{{ $t('loginTip.name') }}：</label>
          <input type="text" :placeholder="$t('loginTip.namePlaceHolder')" v-model="name">
        </p>
        <p>
          <label for="password">{{ $t('loginTip.password') }}：</label>
          <input type="password" :placeholder="$t('loginTip.passwordPlaceHolder')" v-model="password">
        </p>
      </form>
    </fieldset>
  </div>
</template>

<style lang="less">
  .login-block{
    margin: 50px auto;
  }
  fieldset{
    border: 1px solid #A1AAB3;
    box-shadow: 5px 5px 5px lightgray;
    border-radius: 8px;
    input{
      border: none;
      width: 60%;
      height: 30px;
      outline: none;
    }
  }
</style>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      name: '',
      password: '',
      loginTip: ''
    }
  },
  async created () {
    this.loginTip = await this.$t('loginTip')
    console.log('loginTip:', this.loginTip)
  }
}
</script>
