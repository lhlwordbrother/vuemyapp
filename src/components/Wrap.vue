<template>
  <div id="wrap">
    <div class="side">
      <div class="user">
        <img src="" alt="">
      </div>
      <ul>
        <li class="patient"><router-link to="/patient">11</router-link></li>
        <li><router-link to="/patient"></router-link></li>
        <li><router-link to="/patient"></router-link></li>
        <li><router-link to="/patient"></router-link></li>
        <li><router-link to="/patient"></router-link></li>
      </ul>
    </div>
    
    <router-view class="main"></router-view>
    
  </div>
</template>

<script>
    export default {
        name: 'wrap',
        data() {
            return {
                value1: '',
                value2: ''
            }
        }
    }
</script>

<style lang='scss'>
body,html,#wrap,#app{
  width: 100%;height: 100%;
}
#wrap{
  display: flex;flex-direction: row;
}
.side{
  width: 60px;
}
.main{
  flex: 1;
}
.patient{
  background: url('/static/img/wrap/works_act.png') no-repeat center center;
}
</style>