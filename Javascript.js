function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(a,b,operator) {
    if (operator == '+') {
        const result =add (a,b);
        return result
    }
    if (operator == '-') {
        const result =subtract (a,b);
        return result
    }
    if (operator == '×') {
        const result =multiply (a,b);
        return result
    }
    if (operator == '÷') {
        const result =divide (a,b);
        return result
    }
}
let zeroBtn=document.querySelector('.zero')
let oneBtn=document.querySelector('.one')
let twoBtn=document.querySelector('.two')
let threeBtn=document.querySelector('.three')
let fourBtn=document.querySelector('.four')
let fiveBtn=document.querySelector('.five')
let sixBtn=document.querySelector('.six')
let sevenBtn=document.querySelector('.seven')
let eightBtn=document.querySelector('.eight')
let nineBtn=document.querySelector('.nine')
let plusBtn=document.querySelector('.plus')
let minusBtn=document.querySelector('.minus')
let multiplyBtn=document.querySelector('.multiply')
let divideBtn=document.querySelector('.divide')
let equalBtn=document.querySelector('.equal')
let clearBtn= document.querySelector('.clear')
let deleteBtn= document.querySelector('.delete')
let floatBtn= document.querySelector('.float')




zeroBtn.addEventListener('click',addZero)
oneBtn.addEventListener('click',addOne)
twoBtn.addEventListener('click',addTwo)
threeBtn.addEventListener('click',addThree)
fourBtn.addEventListener('click',addFour)
fiveBtn.addEventListener('click',addFive)
sixBtn.addEventListener('click',addSix)
sevenBtn.addEventListener('click',addSeven)
eightBtn.addEventListener('click',addEight)
nineBtn.addEventListener('click',addNine)
plusBtn.addEventListener('click',addOperator)
minusBtn.addEventListener('click',minusOperator)
multiplyBtn.addEventListener('click',multiplyOperator)
divideBtn.addEventListener('click',divideOperator)
equalBtn.addEventListener('click',calculate)
clearBtn.addEventListener('click',clear)
deleteBtn.addEventListener('click',Delete)
floatBtn.addEventListener('click',addFloat)


function clear() {
    resultSpan.textContent='';
}

function Delete() {
    displayValue=resultSpan.textContent;
    let arr=displayValue.split('')
    arr.pop()
    let newDisplay=arr.join('')
    resultSpan.textContent=newDisplay;
}

function addFloat() {
    let display= resultSpan.textContent;
    let arr=display.split('');
    let newarr= arr.filter(elment=>{ if (elment=='.') {return true}})
    let n=newarr.length
    let n1=display.indexOf(`${operator}`)
    let secondNum= display.slice(n1+2,display.length);
    if (display=='') {
        return 0
    }
    else if (n==0){
            resultSpan.textContent+='.' 
    }
    else if(secondNum.indexOf('.')==-1 && secondNum!== '' && operator!==undefined && n1 !== -1) {
        resultSpan.textContent+='.' 
    }
}

let resultSpan= document.querySelector('.result')
let displayValue;
let operator;
let indexTwo

function addZero(){
resultSpan.textContent+=`0`
displayValue=resultSpan.textContent;
}
function addOne(){
resultSpan.textContent+=`1`
displayValue=resultSpan.textContent;
}
function addTwo(){
resultSpan.textContent+=`2`
displayValue=resultSpan.textContent;
}
function addThree(){
resultSpan.textContent+=`3`
displayValue=resultSpan.textContent;
}
function addFour(){
resultSpan.textContent+=`4`
displayValue=resultSpan.textContent;
}
function addFive(){
resultSpan.textContent+=`5`
displayValue=resultSpan.textContent;
}
function addSix(){
resultSpan.textContent+=`6`
displayValue=resultSpan.textContent;
}
function addSeven(){
resultSpan.textContent+=`7`
displayValue=resultSpan.textContent;
}
function addEight(){
resultSpan.textContent+=`8`
displayValue=resultSpan.textContent;
}
function addNine(){
resultSpan.textContent+=`9`
displayValue=resultSpan.textContent;
}
function addOperator(){
    indexTwo= resultSpan.textContent.indexOf(`${operator}`)
    if (resultSpan.textContent=='') {
        return 0
    }
    else if (operator==undefined|| resultSpan.textContent.indexOf(`${operator}`)==-1){
        resultSpan.textContent+=` + `
        operator='+';
        indexTwo= resultSpan.textContent.indexOf('+')     
    }
    else if(resultSpan.textContent[indexTwo+2]!== undefined){
        let result=calculate();
        operator='+'
        resultSpan.textContent=`${result} + `
    }
    else {
    displayValue=resultSpan.textContent
    let newDisplay=displayValue.replace(` ${operator} `, ' + ');
    resultSpan.textContent=newDisplay;
    operator='+';
    }
}

function minusOperator(){
    indexTwo= resultSpan.textContent.indexOf(`${operator}`)
    if (resultSpan.textContent=='') {
        return 0
    }
    else if (operator==undefined || resultSpan.textContent.indexOf(`${operator}`)==-1){
            resultSpan.textContent+=` - `
            operator='-';
            indexTwo= resultSpan.textContent.indexOf('-')            
    }
    else if(resultSpan.textContent[indexTwo+2]!== undefined){
        let result=calculate();
        operator='-'
        resultSpan.textContent=`${result} - `
    }
    else {
        displayValue=resultSpan.textContent;
        let newDisplay=displayValue.replace(` ${operator} ` , ' - ')
        resultSpan.textContent=newDisplay;
        operator='-'
    }
}
function multiplyOperator(){
    indexTwo= resultSpan.textContent.indexOf(`${operator}`)
    if (resultSpan.textContent=='') {
        return 0
    }
    else if (operator==undefined|| resultSpan.textContent.indexOf(`${operator}`)==-1){
        resultSpan.textContent+=` × `
        operator='×';
        
    }
    else if(resultSpan.textContent[indexTwo+2]!== undefined){
        let result=calculate();
        operator='×'
        resultSpan.textContent=`${result} × `
    }
    else {
    displayValue=resultSpan.textContent;
    let newDisplay=displayValue.replace(` ${operator} ` , ' × ')
    resultSpan.textContent=newDisplay;
    operator='×'
    }
}
function divideOperator(){
    indexTwo= resultSpan.textContent.indexOf(`${operator}`)
    if (resultSpan.textContent=='') {
        return 0
    }
    else if (operator==undefined|| resultSpan.textContent.indexOf(`${operator}`)==-1){
        resultSpan.textContent+=` ÷ `
        operator='÷';  
    }
    else if(resultSpan.textContent[indexTwo+2]!== undefined){
        let result=calculate();
        operator='÷'
        resultSpan.textContent=`${result} ÷ `
    }
    else {
    displayValue=resultSpan.textContent;
    let newDisplay=displayValue.replace(` ${operator} ` , ' ÷ ')
    resultSpan.textContent=newDisplay;
    operator='÷'
    }
}

function calculate () {
    if (operator== '+'){
    displayValue=resultSpan.textContent;    
    let newValue= displayValue.replace(/ /g,"")
    let index= newValue.indexOf('+')
        if(index==-1){return 0}
        else if(newValue[index+1]=== undefined){
            return 0}
    let firstNum= +newValue.slice(0,index);
    let secondNum= +newValue.slice(index+1,newValue.length);
    return resultSpan.textContent= operate(firstNum,secondNum,operator);
    }

    else if (operator== '-'){
    displayValue=resultSpan.textContent;    
    let newValue= displayValue.replace(/ /g,"")
    let index= newValue.indexOf('-')
        if(index==-1){return 0}
        else if(newValue[index+1]=== undefined){
            return 0}
            
    let firstNum= +newValue.slice(0,index);
    let secondNum= +newValue.slice(index+1,newValue.length);
    return resultSpan.textContent= operate(firstNum,secondNum,operator);
    }
    else if (operator== '×'){
    displayValue=resultSpan.textContent;    
    let newValue= displayValue.replace(/ /g,"")
    let index= newValue.indexOf('×')
        if(index==-1){return 0}
        else if(newValue[index+1]=== undefined){
            return 0}
    let firstNum= +newValue.slice(0,index);
    let secondNum= +newValue.slice(index+1,newValue.length);
    return resultSpan.textContent= operate(firstNum,secondNum,operator);
    }
    else if (operator== '÷'){
    displayValue=resultSpan.textContent;    
    let newValue= displayValue.replace(/ /g,"")
    let index= newValue.indexOf('÷')
        if(index==-1){return 0}
        else if(newValue[index+1]=== undefined){
            return 0}
    let firstNum= +newValue.slice(0,index);
    let secondNum= +newValue.slice(index+1,newValue.length);
    if (secondNum==0) {
        alert("You can't divide by 0!")
        return resultSpan.textContent=''
    }
    return resultSpan.textContent= operate(firstNum,secondNum,operator).toFixed(2);
        }
}

