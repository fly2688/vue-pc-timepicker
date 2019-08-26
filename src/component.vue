<template>
  <section class="ui-timepicker-layout inline-block rel form-control bg-white">
    <section class="clearfix">
      <input @click="toggleShow" :placeholder="timeShow" class="time-input left pointer" readonly="readonly" type="number" />
      <section class="time-icon right">
        <img :src="icons.time" class="img-responsive" />
      </section>
    </section>
    <section class="abs time-choose bg-white" v-if="isShow">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td><section @click="upHour" class="pointer tbtn"><img class="img-responsive" :src="icons.up" /></section></td>
            <td></td>
            <td><section @click="upMinute" class="pointer tbtn"><img class="img-responsive" :src="icons.up" /></section></td>
          </tr>
          <tr>
            <td><input type="number" @blur="isNum" v-model="hour" class="form-control input-box text-center" /></td>
            <td class="text-center fs-middle">:</td>
            <td><input type="number" @blur="isNum" v-model="minute" class="form-control input-box text-center" /></td>
          </tr>
          <tr>
            <td><section @click="cutHour" class="pointer tbtn"><img class="img-responsive" :src="icons.down" /></section></td>
            <td></td>
            <td><section @click="cutMinute" class="pointer tbtn"><img class="img-responsive" :src="icons.down" /></section></td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>
  const Component = require('./component');
  export default new Component();
</script>
<style lang="scss" scoped="scoped">
/*根字体*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #efefef;
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  color: #1c2438;
}
.pointer{
  cursor: pointer;
}
.left {
  float: left;
}
.right {
  float: right;
}
.abs {
  position: absolute;
}
.rel {
  position: relative;
}
.img-responsive{
  display: block;
  width: 100%;
  height: auto;
}
.clearfix:before,
.clearfix:after{
  display: block;
  clear: both;
  content: '';
  height:0;
}
.form-control {
    background-color: #FFFFFF;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 2px;
    color: inherit;
    display: block;
    padding: 3px 6px;
    height: 36px;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
    width: 100%;
    font-size: 14px;
    box-shadow: none;
}
.form-control.inline-block {
  display: inline-block;
  vertical-align: middle;
}
.text-center{
  text-align: center;
}
input{
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;
  -webkit-appearance: none;
  height: auto;
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
input:focus{
  border-color: #999;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-shadow: none;
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
section {
  display: block;
}
img {
  border: 0;
}
/**字体大小*/
$fontSizeSmall: 12px;
$fontSizeNormal: 14px;
$fontSizeMiddle: 16px;
.fs-middle {
  font-size: $fontSizeMiddle;
}
$white: #FFFFFF;
.bg-white {
  background-color: $white;
}
.ui-timepicker-layout.form-control{
    width: 100px;
    height: 30px;
    padding: 3px;
}
.ui-timepicker-layout{
    .time-input{
        background-color: #fff;
        line-height: 24px;
        border: none;
        font-size: 14px;
        width: 56px;
        padding-left: 5px;
    }
    .time-icon{
        width: 22px;
        height: 22px;
    }
    .time-choose{
        left: 0;
        top: 30px;
        width: 140px;
        border-top: 1px solid #ccc;
        table{
            width: 100%;
            table-layout: fixed;
        }
        td:nth-child(1){
            border-left: 1px solid #ccc;
        }
        td{
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            text-align: center;
            padding: 2px;
        }
        .tbtn{
            border-radius: 2px;
            padding: 8px;
        }
        .tbtn:hover{
            background-color: #eee;
        }
        .form-control.input-box{
            width: 100%;
        }
    }
}

</style>