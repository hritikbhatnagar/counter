let d=document.querySelectorAll("button");
let a=d[0];
let b=d[1];
let c=d[2];
var i=0;
let count=document.querySelector(".b2 p");
a.addEventListener("click",function(e)
{
i--;
count.innerHTML=i;
});
b.addEventListener("click",function(e)
{
i=0;
count.innerHTML=i;
});
c.addEventListener("click",function(e)
{
i++;
count.innerHTML=i;
});