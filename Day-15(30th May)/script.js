let num1 =5;
let  num2= 10;
document.getElementById('div1').innerHTML = ` Add - ${num1+num2} :: Sub - ${num1-num2} :: Mul - ${num1*num2} :: Div - ${num1/num2} :: Mod - ${num1%num2} :: Exp - ${num1**num2} :: Inc - ${num1++} :: Dec - ${num2--}`; 

let num3=num1
let num4=num2;
num1+=num2;
num3*=num4;
num2/=num3;
num4-=num1;
document.getElementById('div2').innerHTML = ` ${num1}  ${num2} ${num3} ${num4}`; 

document.getElementById('div3').innerHTML = ` > - ${num1>num2} :: < - ${num1<num2} :: = - ${num1==num2} :: != - ${num1!=num2} :: >= - ${num1>=num2} :: <= - ${num1<=num2} :: ! - ${!num1}`; 
num1=1 , num2=0
document.getElementById('div4').innerHTML = ` && - ${num1&&num2} :: || - ${num1||num2} :: ! - ${num1!=num2}`; 


document.getElementById('div5').innerHTML = `  ${typeof num2} ::  ${ typeof num1}`; 


document.getElementById('div6').innerHTML = ` & - ${num1&num2} :: | - ${num1|num2} :: >> - ${num1>>num2} :: << - ${num1<<num2} :: ^ - ${num1^num2} :: >>> - ${num1>>num2} :: ~ - ${~num1}`; 
