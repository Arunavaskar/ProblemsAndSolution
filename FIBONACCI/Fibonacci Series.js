var n1 = 0;
var n2 = 1;

var count = 0;
var limit = 10;

while (count <= limit){
    console.log(n1);
    console.log(n2);

n1 += n2;
n2 += n1;
count += 1;
}