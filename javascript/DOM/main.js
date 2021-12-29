///////////////////////////////////                  QUERYSELECTOR          ///////////////////////////////////////
// var node0 = document.getElementsByClassName('.box5');
// var node1 = document.getElementById('5');
// var node4 = document.getElementsByTagName('a');
// var node2 = document.querySelector('.box');
// var node3 = document.querySelectorAll('.box5');
// var node4 = document.getElementsByTagName('a');
// node3[0].className = 'heading';
///////////////////////////    SET ELEMENT //////////////////////
// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<haha>heading</haha>';
///////////////////////////////////                  SETER           ///////////////////////////////////////
// var boxNode = document.querySelectorAll('.box2');
// console.log(boxNode[0]);
// boxNode[0].setAttribute = 'heading';
///////////////////////////////////                  SET ATTRIBUTE         ///////////////////////////////////////
// var boxNode1 = document.getElementsByClassName('box');
// console.log(boxNode1[0]);
// boxNode1[0].setAttribute('style', 'color: red;');
// boxNode1[1].setAttribute('data-x', 'Name');
///////////////////////////////////                 GET ATTRIBUTE         ////////////////////////\
var boxNode = document.querySelector('.box');
// boxNode.setAttribute('haha', 'hello')
// var getAtribute = boxNode.getAttribute('class');
// boxNode.innerHTML = '<h1>hi</h1>'
boxNode.innerText = 'hoangthebao';

console.log(boxNode);
// console.log(boxNode);
// console.log(getAtribute);

///////////////////////////////////                 GET INNER TEXT & TEXT CONTENT         ////////////////////////\
// var elementNode = document.querySelector('.box');
// console.log(elementNode);
// console.log(elementNode);
// elementNode.outerHTML = '<div>hello Bao dep trai</div>'
// elementNode.textContent = "Hoang The Bao";
// console.log(elementNode.textContent);
// console.log(elementNode.innerText);
///////////////////////////////////                 DOM CSS        ////////////////////////\

// var elementNode = document.querySelector('.box');
// elementNode.style.height = '100px';
// elementNode.style.backgroundColor = 'red';
// elementNode.style.width = '100px';
// elementNode.style.position = 'relative';
// elementNode.style.top = '200px';

// Object.assign(elementNode.style, {
//     height : '100px',
//     backgroundColor : 'black',
//     width : '200px'
// });
///////////////////////////////////                 CLASS LIST       ////////////////////////\
// var elementNode = document.querySelector('.box');
// console.log(elementNode.classList.length);
// elementNode.classList.add('bao1', 'bao2');
// console.log(elementNode.classList.contains('box'));
//////////////////////////////////                 DOM EVENT      /////////////////////////////
//noi bot
// var elementNode = document.querySelector('.box');
// elementNode.click(function (e) {
//     console.log(e.target);
// });
// var inputElement = document.querySelector('input[type = "text"]');
// // inputElement.onchange = function (e) {
// //   console.log(e.target.value);  
// // };

// inputElement.onkeypress = function(e) {
//     console.log(e.which);
// };
//////////////////////////////////////////////////     PREVENT-DEFAULT  & STOP-PROPAGATION///////////////////////////////////////v

// var nodeA = document.querySelector('a[name = google]');
// var aElement = document.links;
// for(var i = 0; i < aElement.length; i++) {
//     aElement[i].onclick = function(e) {
//         if(e.target.href.startsWith("https://f8.edu.vn")) {
//             e.preventDefault();
//         }
//     }
// }

/////////////////////////       EVENT LISTENER ///////////////////////////
// var btnClick = document.querySelector('button');

// function viec1() {
//     console.log(Math.random());
// }
// btnClick.addEventListener('click', viec1);

// setTimeout(function() {
//     btnClick.removeEventListener('click', viec1);
// }, 3000);
/////////////////////////// nothing ///////////

// let a = 3;
// if(a){
//     let a = 4;
//     let b = 6;
//     var c =10;
//     if(a){
//         let a = 5;
//         console.log(b);
//     }
// }
// console.log(c);
////////////////// TỔNG QUAN /////////////////////////////
//  -get:
//      + element: getElementById, getElementsByClassName(HTMLcollection), getElementsByTagName
//                  querySelector, querySelectorAll(Nodelist).
//      + attribute: Node.getAttribute('class'), Node.class, Node.title (getter);
//      + text/content: Node.textContent, Node.innerText, 
//                      Node.innerHTML (return element as String)
//  -set:
//      + element: Node.outerHTML, Node.innerHTML, document.createElement('h1')
//      + attribute: Node.setAttribute('style', 'color: red'), Node.style = 'color: green'
//      + text/content: Node.innerText = 'hello'
document.querySelector