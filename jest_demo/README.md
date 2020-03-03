教学网址：
https://www.cnblogs.com/Wolfmanlq/p/8012847.html
这个网址有监听的功能：
https://www.cnblogs.com/SamWeb/p/11454923.html



新建文件夹然后通过npm 命令安装：

npm install --save-dev jest
或者通过yarn来安装：

yarn add --dev jest
让我们来测试一个简单两个数字相加的function吧，新建 Sum.js

function sum(a, b){
   return a + b;
}

module.exports = sum;
然后新一个Sum.test.js的文件来测试我们的sum function：

复制代码
const sum = require('./sum.js')

test('test 1 plus 2 result', () => {
  expect(sum(1 , 2)).toBe(3);
})


test('test 2 plus 2 should equal 4', () => {
  expect(sum(2 , 2)).toBe(4);
})
