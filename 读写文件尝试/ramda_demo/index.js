let fs = require('fs')
let path = require('path')
let R = require('ramda');
let Maybe = require('./../test');
// Ramda API 介绍
// 目录
// 一、比较运算
Maybe.of()
  .print('gt：判断第一个参数是否大于第二个参数。')
  .reWriteValuePrint(R.gt(2)(1)) // true
  .reWriteValuePrint(R.gt(1)(2)) // false
  .reWriteValuePrint(1) // 1
  .mapPrint(R.gt(2)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.gt(1)) // 
  .print('gte：判断第一个参数是否大于等于第二个参数。')
  .reWriteValuePrint(R.gte(2)(1)) // 
  .reWriteValuePrint(R.gte(1)(1)) // 
  .reWriteValuePrint(R.gte(1)(2)) // 
  .reWriteValuePrint(1) // 1
  .mapPrint(R.gte(2)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.gte(1)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.gte(2)) // 

  .print('lt：判断第一个参数是否小于第二个参数。')
  .reWriteValuePrint(R.lt(2)(1)) // 
  .reWriteValuePrint(R.lt(1)(1)) // 
  .reWriteValuePrint(R.lt(1)(2)) // 
  .reWriteValuePrint(1) // 1
  .mapPrint(R.lt(2)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.lt(1)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.lt(2)) // 

  .print('lte：判断第一个参数是否小于等于第二个参数。')
  .reWriteValuePrint(R.lte(2)(1)) // 
  .reWriteValuePrint(R.lte(1)(1)) // 
  .reWriteValuePrint(R.lte(1)(2)) // 
  .reWriteValuePrint(1) // 1
  .mapPrint(R.lte(2)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.lte(1)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.lte(2)) // 

  .print('equals：比较两个值是否相等（支持对象的比较）。')
  .reWriteValuePrint(R.equals(2)(1)) // 
  .reWriteValuePrint(R.equals(1)(1)) // 
  .reWriteValuePrint(R.equals(1)(2)) // 
  .reWriteValuePrint(R.equals('1')(1)) // 
  .reWriteValuePrint(R.equals(1)('1')) // 
  .reWriteValuePrint(R.equals(1)(1)) // 
  .reWriteValuePrint(R.equals([1, 2, 3], [1, 2, 3])) // 


  .reWriteValuePrint(1) // 1
  .mapPrint(R.equals(2)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.equals(1)) // 
  .reWriteValuePrint(2) // 1
  .mapPrint(R.equals(2)) // 

  .print('eqBy：比较两个值传入指定函数的运算结果是否相等。')
  .reWriteValuePrint(R.eqBy(Math.abs, 5, -5)) // 
  .reWriteValuePrint(R.eqBy(Math.abs, 5)(-5)) // 
  .reWriteValuePrint(R.eqBy(Math.abs)(5)(-5)) // 



// 二、数学运算
// add：返回两个值的和。


R.add(7)(10) // 17
// subtract：返回第一个参数减第二个参数的差。


R.subtract(10)(8) // 2
// multiply：返回两个值的积。


R.multiply(2)(5)  // 10
// divide：返回第一个参数除以第二个参数的商。


R.divide(71)(100) // 0.71
// 三、逻辑运算
// 四、字符串
// 五、函数
// - 5.1 函数的合成
// - 5.2 柯里化
// - 5.3 函数的执行
// 六、数组
// - 6.1 数组的特征判断
// - 6.2 数组的截取和添加
// - 6.3 数组的过滤
// - 6.4 单数组运算
// - 6.5 双数组运算
// - 6.6 复合数组
// 七、对象
// - 7.1 对象的特征判断
// - 7.2 对象的过滤
// - 7.3 对象的截取
// - 7.4 对象的运算
// - 7.5 复合对象
