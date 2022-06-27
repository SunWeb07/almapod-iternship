// switch case
let num1 = prompt("enter any number between (1-10)")
switch(num1){
    case 1:document.getElementById('one').innerHTML = "have a nice day";
            console.log("have a nice day");
            break;
    case 3:document.getElementById('one').innerHTML = "have a happy day";
    console.log("have a happy day");
            break;    
    case 4:document.getElementById('one').innerHTML = "have a bang day";
    console.log("have a bang day");
            break;    
    case 7:document.getElementById('one').innerHTML = "have a tough day";
    console.log("have a tough day");
            break;
    case 8:document.getElementById('one').innerHTML = "have a great day";
    console.log("have a great day");
            break;    
    default:document.getElementById('one').innerHTML = "have a good day"
    console.log("have a good day");
            break;
}

//javascript loop 
let i=0,sum1=0,sum2,sum3,sum4,sum5;
//for
for(  i=0;i<10;i++){
sum1+=i;
console.log(i);
}
document.getElementById('two-1').innerHTML=sum1;
//while 
sum2=0;
i=0;
while(i<10){
   sum2+=2*i;
    i++
    console.log(i);
}
document.getElementById('two-2').innerHTML=sum2;
//do while
sum3=0

i=0;
do{
 sum3+=3*i;
    i++;
    console.log(i);
}while(i<10);
document.getElementById('two-3').innerHTML=sum3;
// for in
sum4=0;
let arr=[1,2,3,4,5,6];
for(x in arr){
    sum4+=4*x;
    console.log(x);
}
document.getElementById('two-4').innerHTML=sum4;
//foreach
sum5=0;
arr.forEach(function(ele){
sum5+=5*ele;
    console.log(ele);

})
document.getElementById('two-5').innerHTML=sum5;

//debugging

console.log("Welcome to Almapod");
console.warn("num1 should be in number only");
console.error("if any error i'll come" + num1);
