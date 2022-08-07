let string=`/*大家好，我是青游，让我来为大家画一只皮卡丘吧*/
*{
    margin: 0;padding: 0;box-sizing: border-box;
}
*::before{
    box-sizing: border-box;     
}
*::after{
    box-sizing: border-box;
}
.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}

.nose{
    border: 10px solid #000;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 144px;
    margin-left: -10px;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    /* border: 1px solid #000; */
    top: -16px;
    left: -10px;
    border-radius: 6px 6px 0 0;
    background: black;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    /* 转动圆心：原中心为标签左上角，改为水平向右50%，垂直向下100% */
    /* 同样可以写成 transform-origin: center bottom; */
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
}

.eye{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye.left{
    transform: translateX(-100px);

}
.eye.right{
    transform: translateX(100px);
}
.eye::before{
    /* 先给content,不然看不见；因为默认span内联元素，还要转成块级 */
    content: '';
    display: block;
    border: 3px solid black;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background: white;
    transform: translateX(9px) translateY(-1px);
}

.mouth{
    width: 200px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip.left{
    border: 3px solid #000;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 30px;
    border-top: none;
    border-right: none;
    transform: rotate(-15deg) translateX(-53px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}
.mouth .up .lip.right{
    border: 3px solid #000;
    height: 30px;
    width: 100px;
    border-radius: 0 0 30px 0;
    border-top: none;
    border-left: none;
    transform: rotate(15deg) translateX(53px);
    position: absolute;
    left: 50%;
    margin-left: -50px;  
    background: #ffe600;
}

.mouth .down{
    position: absolute;
    width: 100%;
    height: 150px;
    overflow: hidden;
    top: 5px;
}
.mouth .down .yuan1{
    border: 3px solid #000;
    width: 150px;
    height: 1000px;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    position: absolute;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -180px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}

.face {
    border: 3px solid #000;
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    margin-left: -40px;
    top: 200px;
    z-index: 3;
}
.face.left{
    transform: translateX(-170px);
    border-radius: 50%;
    background: #ff0000;
}
.face.right{
    transform: translateX(170px);
    border-radius: 50%;
    background: #ff0000;
}
.face>img{
    position: absolute;
}
.face.left>img{
    transform: rotateY(180deg);
    right: 0;
}
`
const demoText=document.querySelectorAll('#demoText')[0]
const demoStyle=document.querySelectorAll('#demoStyle')[0]

let n=1
// 字符串不包括下标n
demoText.innerText=string.substring(0,n)
demoStyle.innerHTML=string.substring(0,n)

const run=()=>{
    n++
    if(n<=string.length){
        // console.log(n+':'+string.substring(0,n));
        demoText.innerText=string.substring(0,n)
        demoStyle.innerHTML=string.substring(0,n)
        demoText.scrollTop=demoText.scrollHeight
    }else{
        window.clearInterval(id)
        return
    }
}

// const play=()=>{
//     // 注意不是run()作为参数，因为run是函数，而run()是调用函数/函数返回值
//     // 见setInterval mdn:返回一个id，计时标志作为进度，window.clearInterval(id)可以清除计时进度
//     let time
//     return setInterval(run,time)
// }
let time=100
let id=setInterval(run,time)

const pause=()=>{
    window.clearInterval(id)
}
const slow=()=>{
    pause()
    let time=300
    id=setInterval(run,time)
}
const normal=()=>{
    pause()
    let time=100
    id=setInterval(run,time)
}
const fast=()=>{
    pause()
    let time=0
    id=setInterval(run,time)
}

btnPause.onclick=pause
btnPlay.onclick=()=>{
    // 继续计时
    id=setInterval(run,time)
}

btnSlow.onclick=slow
btnNormal.onclick=normal
btnFast.onclick=fast