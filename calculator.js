const display1=document.getElementById("display");
let iscCalculated=false;
function display(text){
    if(iscCalculated){
        display1.value=" ";
        iscCalculated=false;
    }
    display1.value+=text;
}
function calculate(){
    display1.value=eval(display1.value);
    iscCalculated=true;
}
function clear1(){
    display1.value=" ";
    localStorage.removeItem("previousValue");
}
function backSpace(){
    const currentValue=display1.value;
    const trimValue=currentValue.trim();
    if(trimValue){
        display1.value=trimValue.substring(0,trimValue.length - 1);
    }
}
function store(){
    const currentValue=display1.value;
    const trimValue=currentValue.trim();
    if(trimValue){
    localStorage.setItem("previousValue",trimValue);
    }
}
function retrive(){
    const storedValue=localStorage.getItem("previousValue");
    if(storedValue){
    display1.value=storedValue;
    }
}