// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText;
    el.remove()
  }
});

Vue.filter('formDate',function (time) {
    // console.log(time)
    var d = new Date(time);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) <10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours()<10 ? '0' + d.getHours() : '' + d.getHours();
    var minutes = d.getMinutes()<10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds()<10 ? '0' + d.getSeconds() : '' + d.getSeconds();
    // console.log(d)

    // 格式年月日+时分用这个
    return year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes

    // 格式年月日+时分秒用这个
    // return year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
});

Vue.filter('currency', function(price, sign, len) {
 // 保证是正数
 price =  Math.abs(price);
 // 默认值
 // sign = sign || '￥';
 // len = len || 2;
 //  每三位加上一个,
 // 我们可以将价格转化成数组，每三位加上,
 var arr = String(parseInt(price)).split(''); // [1, 2, ',', 3, 4, 5, ',', 6, 7, 8]
 // 添加了成员后面的位置变了，所以从后向前遍历
 // 1 倒数第三个开始处理，首位不能添加
 for (var i = arr.length - 3; i > 0; i -= 3) {
  // 添加,
  arr.splice(i, 0, ',')
 }
  var point;
  // 获取小数部分
  // console.log((price - parseInt(price)+'').substr(1,len+1)=='.99')
  if((price - parseInt(price)+'').length>(len+2)){
    point= sign + arr.join('') +(price - parseInt(price)+'').substr(1,len+1)
  }else{
    point = sign + arr.join('') + (price - parseInt(price)).toFixed(len).slice(1)
  }
 // 转化成小数 原数字减去整数 保留len位小数，去掉整数部分
  return point
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
