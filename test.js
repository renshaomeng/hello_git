// var events = require("events");
// var emitter =  new events.EventEmitter();
// emitter.on("some_event",function(arg1,arg2){
//     console.log("listener",arg1,arg2);
// });
// emitter.on("some_event",function(arg1,arg2){
//     console.log("lisenter1",arg1,arg2);
// });
// emitter.emit("some_event","arg1","arg2");
//
//
// const buf = Buffer.from([1,2,3,4,5]);
// //转成字符串
// const json =  JSON.stringify(buf);
// console.log(json);
// //转成js对象
// const copy = JSON.parse(json,(key,value)=>{
//     return value && value.type === "Buffer"?
//         Buffer.from(value.data):
//         value;
// });
// console.log(copy);
//
// var buf1=Buffer.from("zaiaaaaa");
// var buf2 = Buffer.from("nihao");
// var buf3 = Buffer.concat([buf1,buf2],8);
// console.log(buf3.toString());
// //比较，buf1在2前面，结果为-1,从头按位比较
// var result = buf1.compare(buf2);
// console.log(result);
// //复制到，并覆盖原来位置的数据
// buf2.copy(buf1,2);
// console.log(buf1.toString());
// //剪裁
// var buf4 = buf2.slice(0,2);
// console.log(buf4.toString());
// console.log(buf4.length);


//fs  node.js的内置模块
// var fs = require("fs");
// var data = "";
// //流 自带emit触发事件
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('utf8');
// readerStream.on('data', chunk => {
//
//     console.log('==>', chunk);
//     data += chunk;
// });
//
// readerStream.on('end', () => {
//     console.log(data);
// });
// readerStream.on("error", function (err) {
//     console.log(err.stack);
// });
//

function say(word){
    console.log(word);

}
function ee(somefunction,value){
    somefunction(value);
}
ee(say,"hello");