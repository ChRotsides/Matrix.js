let a;
let b;
let counter=1;
let c;
 function setup(){
    a=new matrix(3,1);
    b=new matrix(3,3);
    a.intrandomize(1,10);
    b.intrandomize(1,10);
    c=a.dot(b);
    console.table(a.ar);
    console.table(b.ar);
    console.table(c.ar);
 }

 function draw(){
}