/*for(var i = 1 ; i < 4 ;i++){/!*输出444*!/
    setTimeout(
        function() {console.log(i);}
     ,0);
}*/
for(let i = 1 ; i < 4 ;i++){/*输出123*/
    setTimeout(()=>console.log(i),0);/*箭头函数*/
}
/*=====================================*/
/*subString*/
console.log("abcdef".substring(2,3));/*包含起始字母，不包含终止字母*/
