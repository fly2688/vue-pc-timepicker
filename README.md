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

### 标签（Target）
#### *vue
```html
<timePicker :options="timePickerOptions"></timePicker>
```
### 功能（Api）

| Options         | Type     | Description                 | Default | Result   |
|-----------------|:--------:|:---------------------------:|:--------:|:--------:|
| success | function | 时间弹窗消失后执行 | undefined | 返回时间为00:00格式 |
| time | string | 时间 | 00:00 | |
