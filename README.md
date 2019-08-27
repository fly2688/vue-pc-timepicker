# vue-pc-timepicker

### 安装（Install）
``
npm install vue-pc-timepicker -save
``

### 导入（Import）
#### *.js
```javascript
import timePicker from 'vue-pc-timepicker'
```

### 可全局注册使用
```javascript
Vue.use(timePicker);
```

### 标签（Target）
#### *vue
```html
<timePicker :options="timePickerOptions"></timePicker>
```

### demo
```javascript
 let timePickerOptions = {
    time: '2:00', // 默认显示的时间
    success: (val) => {
       console.log(val); // val是返回的时间
    }
 }
```

### 功能（Api）

| Options         | Type     | Description                 | Default | Result   |
|-----------------|:--------:|:---------------------------:|:--------:|:--------:|
| success | function | 时间弹窗消失后执行 | undefined | 返回时间为00:00格式 |
| time | string | 默认显示时间 | 00:00 | |
