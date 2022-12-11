a = 5
b = 5
sum = a + b
square = a ** a
mul = a * b 
div = a / b
mod = a % b
console.log("Sum of: "+sum)
console.log("square of: "+square)
console.log("Mul: "+mul)
console.log("Div: "+div)
console.log("Mod: "+mod)    

for(i = 0;i<100;i=i+2){
    console.log(i)
}
for(i = 1 ;i<100;i++){
    if(i%2!=0){
        console.log(i)
    }
}
a= [5,6,8];
console.log(a)
// isPrime = false;
flag = 0
n =2
i=0 
m=n/2
if(n==0||n==1){
    console.log(n+" is not prime")
}
else{
    for(i=2;i<=2;i++){
        if(n%2==0){
            console.log(n+" is not prime")
            flag=1
            break;
        }
    }
    if(flag==0){
        console.log(n+"is prime")
    }
}

 fact = 1;
 j = 1;
 n = 5;
while (j<=n) {
  // fact =fact* j;
  fact *= j;
  j++;
}
console.log(fact);
fac = 1
 p = 5
for(i =1;i<=p;i++){
    fac*=i
}
console.log(fac)
