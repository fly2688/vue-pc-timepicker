import {BaseModule} from './lib/BaseModule';
import icons from './icons.json';

class Component extends BaseModule {
  constructor() {
    super();
    this.setName('timePicker');
    this.setProps(['options']);
    this.setComponent({});
    this.setMethod({
      setOption () {
        let self = this;
        let tmp = self.options || {};
        self.timeShow = tmp.time || '00:00';
        if (tmp.time) {
          let tmpArr = tmp.time.split(':');
          this.hour = tmpArr[0];
          this.minute = tmpArr[1];
        }
        self.success = tmp.success || null;
        self.$nextTick(() => {
          document.addEventListener('click', (e) => {
            if (!self.$el.contains(e.target)) {
              typeof self.success === 'function' && self.success(self.timeShow);
              self.isShow = false;
            }
          });
        });
      },
      upHour () {
        if (Number(this.hour) === 23) {
          this.hour = '00';
        } else {
          this.hour = this.upMath(this.hour);
        }
      },
      upMinute () {
        if (Number(this.minute) === 59) {
          if (this.hour === '23') {
            this.hour = '00';
          } else {
            this.hour = this.upMath(this.hour);
          }
          this.minute = '00';
        } else {
          this.minute = this.upMath(this.minute);
        }
      },
      cutHour () {
        if (this.hour === '00') {
          this.hour = '23'
        } else {
          this.hour = this.cutMath(this.hour);
        }
      },
      cutMinute () {
        if (this.minute === '00') {
          this.minute = '59';
          if (this.hour === '00') {
            this.hour = '23';
          } else {
            this.hour = this.cutMath(this.hour);
          }
        } else {
          this.minute = this.cutMath(this.minute);
        }
      },
      upMath (num) {
        let tmp = Number(num) + 1;
        if (tmp < 10) tmp = '0' + tmp;
        return tmp;
      },
      cutMath (num) {
        let tmp = Number(num)
        if (tmp !== 0) {
          tmp = tmp - 1;
        }
        if (tmp < 10) tmp = '0' + tmp;
        return tmp;
      },
      isNum () {
        this.hour = this.getRightNum(this.hour, 1);
        this.minute = this.getRightNum(this.minute, 0);
      },
      getRightNum (num, flag) {
        let tmp = Number(num);
        if (tmp < 10) {
          tmp = '0' + tmp;
        }
        if (flag === 1 && tmp > 23) tmp = '00';
        if (flag === 0 && tmp > 59) tmp = '00';
        return tmp;
      },
      toggleShow () {
        this.isShow = !this.isShow;
      }
    });
    this.setCompute({
    });
    this.setWatch({
      minute (val) {
        this.timeShow = this.hour + ':' + val;
      },
      hour (val) {
        this.timeShow = val + ':' + this.minute;
      },
      options () {
        this.setOption();
      }
    });
  }

  getData() {
    return {
      hour: '00',
      minute: '00',
      timeShow: '00:00',
      isShow: false,
      success: null,
      icons
    };
  }

  onCreate() {
    this.app.setOption();
  }

  onMount() {
  }
}

module.exports = Component;
