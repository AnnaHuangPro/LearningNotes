console.log(undefined === null);

var i = 2 ;
console.log(++i == 2);


var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2;
    /*前置型的递增递减操作与执行语句的优先级相等，
      因此整个语句会从左至右被求值*/
var num4 = num1 + num2;
console.log(num3);
console.log(num4);

/*
var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;
    /!*后置型的递增递减操作是在包含它们的语句被求值之后才执行*!/
var num4 = num1 + num2;
console.log(num3);
console.log(num4);*/

console.log(i === 'i');
/*console.log(&quot;&quot; == 0);*/
console.log("" == 0);

/*====================================*/
/* &quot; 为""*/
/*ECMAScript提供了两组操作符 相等和不相等 全等和不全等
* == 与 != 在比较时先将操作符强制转换在进行比较
* === 与 !== 在比较时不转换类型 直接比较
* 如 ：null == undefined (在比较相等性之前 不能将null和undefined转换成其他任何值，规则是两个相等)
*      null !== undefined(类型不同)
* 规则 NaN != NaN  规定两个NaN不相等*/
