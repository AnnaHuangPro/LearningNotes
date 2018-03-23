/*{
    //ES3 ES5
    var evens =[1,2,3,4,5];
    var odds = evens.map(function(v){
        return v+1;
    });
    console.log(evens,odds);
};
{
    let evens = [1,2,3,4,5];
    let odds = evens.map(v => v+1);
    console.log(evens,odds);
}
var arr = [10, 20, 1, 2];
// arr.sort((x, y) => x === y ? 0 : x < y ? -1 : 1);
arr.sort((x, y) => x-y);//升序
console.log(arr); // [1, 2, 10, 20]
// arr.sort((x, y) => x === y ? 0 : x < y ? 1 : -1);
arr.sort((x, y) => y-x);//降序
console.log(arr); // [ 20, 10, 2, 1 ]
/!*  定义：sort() 方法用于对数组的元素进行排序。
    api语法：arrayObject.sort(sortby)；
    参数sortby可选，用于规定排序规则，必须是函数。 *!/
{
    //ES3 ES5
    var factory = function(){
        this.a = 'a';
        this.b = 'b';
        this.c={
            a:'a+',
            b:function(){
                return this.a;
            }
        }
    }
    console.log(new factory().c.b());
    /!*this的指向是该函数调用的对象 则上面的b()是c调用的
      则this是指向的c这个对象*!/

}
{
    //ES6的箭头函数
    var factory = function(){   /!*这是一个构造函数 它其中的this是指向他的实例对象*!/
        this.a = 'a';
        this.b = 'b';
        this.c= {
            a: 'a+',
            b: () => this.a
            /!*箭头函数中this的指向是定义时this的指向，
              此时可以把他看做一条语句，而不是一个函数*!/
        }
    }
    console.log(new factory().c.b());
    /!*this的指向是该函数调用的对象 则上面的b()是c调用的
      则this是指向的c这个对象*!/

}
{
    var obj = {
        i: 10,
        b: () => console.log(this.i, this),
        c () {
            console.log(this.i, this)
        }
    }
    obj.b(); // prints undefined, Window
    obj.c(); // prints 10, Object {...}
}*/
/*{
    var arguments = 42;
    var arr = () => arguments;

    console.log(arr()); // 42

    function foo() {
        var f = () => arguments[0]; // foo's implicit arguments binding foo的隐式参数绑定
        return f(2);
    }

    console.log(foo(1)); // 1
}
{
    function foo() {
        var f = (...args) => args[0];
        return f(2);
    }

    console.log(foo(1)); // 2
}*/
{
    setTimeout(function() {
        console.log(1)
    }, 0);
    new Promise(function executor(resolve) {
        console.log(2);
        for( var i=0 ; i<10000 ; i++ ) {
            i == 9999 && resolve();
        }
        console.log(3);
    }).then(function() {
        console.log(4);
    });
    console.log(5);
    /*说白了就是用同步的方式去写异步代码发起异步请求

    fetch('/api/todos')
      .then(res => res.json())
      .then(data => ({ data }))
      .catch(err => ({ err }));*/
}