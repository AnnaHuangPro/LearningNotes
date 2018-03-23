
let arrayMerge = (...list) => {
    const args_len = list.length;
    //得到参数的数量
    let res = [];
    for(let i = 0; i < args_len; i ++){
        res = [...res, ...list[i]];
    }
    return res;
};
const res = arrayMerge([1,2,3],[4,5],[34,324,23,1]);
for(r in res){
    console.log(res[r]);
}
