<template>
  <div id="wrap" class="_full1">
    <div class="side">
      <div class="user">
        <img src="/static/img/eg/user.png" alt="">
      </div>
      <ul>
        <li>
          <router-link class="work" to="/work"></router-link>
        </li>
        <li>
          <router-link class="patient" to="/patient"></router-link>
        </li>
        <li>
          <router-link class="appoint" to="/appoint"></router-link>
        </li>
        <li>
          <router-link class="visit" to="/visit"></router-link>
        </li>
        <li>
          <router-link class="tooth" to="/tooth"></router-link>
        </li>
      </ul>
      <div class="setting">
        <router-link to="/setting"></router-link>
      </div>
    </div>
    <div class="_full main">
      <div class="head">
        <div class="handle">
          <i-input v-model="search" class="search" icon="ios-search" placeholder="请输入关键词..."></i-input>
          <Button class="addPatient" type="ghost">新增患者</Button>
        </div>
        <div class="toolbar">
          <i class="remind"></i>
          <i class="chat"></i>
          <i class="ratio"></i>
        </div>
      </div>
      <router-view class="_full"></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'wrap',
  data() {
    return {
      search: '',
    }
  },
  methods:{
    searchIconClick(){
      console.log(this.search)
    }
  }
}
</script>

<style lang='scss'>
@import '../scss/variable.scss';
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
  background: -webkit-gradient(linear, left top, left bottom, from(#407aff), to(#43b9ff));
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

.head{
  height: 50px;
  min-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f3f9;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  .search{
    width: 200px;margin-right: 10px;
    input{
      background-color: transparent;
      height: 30px;
      border-radius: 30px;
      border-color: $btnBc;
      padding-left: 12px;
      &:focus{
        border-color: $hover;
      }
    }
  }
  .addPatient{
    background-color: transparent;
    height: 30px;padding: 0 15px;
    border-radius: 15px;
    border-color: $btnBc;
    transition: all .5s ease;color: #555;
    &:hover{
      background-color: $hover;
      color: #fff !important;
    }
  }
  
  .toolbar{
    i{
      width: 16px;
      height: 16px;
      display: block;
      float: left;
      margin-left: 20px;
      cursor: pointer;
      &.remind{
        background: url('/static/img/wrap/info.png') no-repeat center center;
      }
      &.chat{
        background: url('/static/img/wrap/chat.png') no-repeat center center;
      }
      &.ratio{
        background: url('/static/img/wrap/ratio.png') no-repeat center center;
      }
    }
  }
}

.main{
  display: flex;
  flex-direction: column;
}

</style>