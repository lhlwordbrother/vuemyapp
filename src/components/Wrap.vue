<template>
  <div id="wrap">
    <div class="side">
      <div class="user">
        <img src="/static/img/eg/user.png" alt="">
      </div>
      <ul>
        <li class="work active">
          <router-link to="/patient"></router-link>
        </li>
        <li class="patient">
          <router-link to="/patient"></router-link>
        </li>
        <li class="appoint">
          <router-link to="/patient"></router-link>
        </li>
        <li class="visit">
          <router-link to="/patient"></router-link>
        </li>
        <li class="tooth">
          <router-link to="/patient"></router-link>
        </li>
      </ul>
      <div class="setting">
        <router-link to="/patient"></router-link>
      </div>
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
body,
html,
#wrap,
#app {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}

#wrap {
  display: flex;
  flex-direction: row;
}

.side {
  width: 60px;
  min-height: 442px;
  height: 100%;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(top, #407aff, #43b9ff);
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 64px;
      cursor: pointer;
      a{
        width: 100%;height:100%;display: block;
      }
    }
  }
  .user {
    cursor: pointer;
  }
  .work {
    background: url('/static/img/wrap/works.png') no-repeat center center;
    &.active {
      background: #fff url('/static/img/wrap/works_act.png') no-repeat center center;
    }
  }
  .patient {
    background: url('/static/img/wrap/patient.png') no-repeat center center;
    &.active {
      background: #fff url('/static/img/wrap/patient_act.png') no-repeat center center;
    }
  }
  .appoint {
    background: url('/static/img/wrap/appoint.png') no-repeat center center;
    &.active {
      background: #fff url('/static/img/wrap/appoint_act.png') no-repeat center center;
    }
  }
  .visit {
    background: url('/static/img/wrap/visit.png') no-repeat center center;
    &.active {
      background: #fff url('/static/img/wrap/visit_act.png') no-repeat center center;
    }
  }
  .tooth {
    background: url('/static/img/wrap/tooth.png') no-repeat center center;
    &.active {
      background: #fff url('/static/img/wrap/works_act.png') no-repeat center center;
    }
  }
  .setting {
    width: 60px;
    height: 64px;
    cursor: pointer;
    background: url('/static/img/wrap/setting.png') no-repeat center center;
    &.active {
      background: #fff url('/static/img/wrap/works_act.png') no-repeat center center;
    }
    a{
      display: block;width: 100%;height: 100%;
    }
  }
}

.main {
  flex: 1;
}
</style>