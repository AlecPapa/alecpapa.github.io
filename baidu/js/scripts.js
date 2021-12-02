/*!
 * Start Bootstrap - The Big Picture v5.0.4 (https://startbootstrap.com/template/the-big-picture)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
 */


// var oDiv = document.getElementById('div1');
// var box = document.getElementById('box');
// var scal = 1;

// function onMouseWheel(ev) { /*当鼠标滚轮事件发生时，执行一些操作*/
//     var ev = ev || window.event;
//     var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
//     down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
//     if (down) {
//         console.log('鼠标滚轮向下放大---------')
//         scal = (parseFloat(scal) + 0.01).toFixed(2);
//         console.log("放大系数: " + scal)
//         oDiv.style.transform = "scale(" + scal + ")"; //scale()在这里要使用拼接的方式才能生效
//         oDiv.style.transformOrigin = '0 0';
//     } else {
//         console.log('鼠标滚轮向上缩小++++++++++')
//         if (scal == 0.01) {
//             scal = 0.01
//             return
//         } else {
//             scal = (parseFloat(scal) - 0.01).toFixed(2);
//         }
//         console.log("缩小系数: " + scal)
//         oDiv.style.transform = "scale(" + scal + ")"; //scale()在这里要使用拼接的方式才能生效。
//         oDiv.style.transformOrigin = '0 0';
//     }
//     if (ev.preventDefault) { /*FF 和 Chrome*/
//         ev.preventDefault(); // 阻止默认事件
//     }
//     return false;
// }

// addEvent(box, 'mousewheel', onMouseWheel);
// addEvent(box, 'DOMMouseScroll', onMouseWheel);


// function addEvent(obj, xEvent, fn) {
//     if (obj.attachEvent) {
//         obj.attachEvent('on' + xEvent, fn);
//     } else {
//         obj.addEventListener(xEvent, fn, false);
//     }
// }

// function centerScale() {
//     console.log("还原------")
//     scal = 1;
//     oDiv.style.transform = "scale(" + scal + ")";
//     oDiv.style.transformOrigin = '0 0';
//     // $("#drag").css({"transform": "scale(" + scal + ")","transformOrigin": "0 0"});//jquery写法
// }