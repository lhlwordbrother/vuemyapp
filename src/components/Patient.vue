<template>
  <div>
    <div class="switch">
      <Menu class="menu" mode="horizontal" active-name="1">
        <div class="layout-assistant">
          <Menu-item class="menu-item" name="1">最近患者</Menu-item>
          <Menu-item class="menu-item" name="2">患者管理</Menu-item>
        </div>
      </Menu>
      <ul class="patientList">
        <li class="active">
          <img src="static/img/man_.png" alt="">
          <div class="info">
            <p class="name">张三
              <i class="man"></i>
            </p>
            <span class="patientNumber">病历号：123123</span>
          </div>
          <div class="time">下午8:38</div>
          <div class="handle"></div>
        </li>
        <li>
          <img src="static/img/man_.png" alt="">
          <div class="info">
            <p class="name">张三
              <i class="man"></i>
            </p>
            <span class="patientNumber">病历号：123123</span>
          </div>
          <div class="time">下午8:38</div>
          <div class="handle"></div>
        </li>
      </ul>
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: 'Patient'
}
</script>

<style lang='scss' scoped>
@import '../scss/variable.scss';
.switch {
  width: 220px;
  height: 100%;
  border-right: 1px solid $divBc;
  .menu {
    padding: 0 9px;
    height: 50px;
    line-height: 50px;
    .layout-assistant {
      display: flex;
      height: 50px;
      .menu-item {
        flex: 1;
      }
      .ivu-menu-item-active,
      .ivu-menu-item:hover {
        color: $light;
        border-color: $light;
      }
    }
  }
}

.patientList li {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 56px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;
  padding: 0 10px;
  &:first-child {
    margin-top: 8px;
  }
  &:hover {
    background-color: #f5f9ff;
    .handle{
      transform: translateX(0px);
    }
  }
  &.active {
    background-color: $divHover;
    color: #fff;
    .info .name {
      color: #fff;
    }
  }
  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    outline: none;
  }
  .info {
    margin-left: 6px;
    line-height: 1;
    flex: 1;
    .name {
      line-height: 16px;
      color: $fC;
      font-size: 12px;
      .man,
      .woman {
        width: 16px;
        height: 16px;
        vertical-align: top;
        display: inline-block;
        background: url('/static/img/man.png') no-repeat center center;
      }
    }
    .patientNumber {
      font-size: 10px;
    }
  }
  .time {
    margin-bottom: 15px;
    font-size: 10px;
  }
  .handle {
    position: absolute;
    height: 56px;
    width: 56px;
    line-height: 56px;
    right: 0;
    top: 0;
    transform: translateX(100%);
    transition: transform .4s ease;
    text-align: center;
    border: 1px solid #62a8ea;
    background: #4084ff url('/static/img/gua.png') no-repeat center center;
  }
}
</style>
