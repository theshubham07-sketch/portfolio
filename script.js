const roles = [
"Python Beginner Developer",
"Computer Science Student",
"Web Development Learner",
"Future Software Developer"
];

let roleIndex = 0;

const heading = document.querySelector(".hero-text h2");

function changeRole(){

heading.innerHTML = roles[roleIndex];

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

}

setInterval(changeRole,2000);
// Back To Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 ||

document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
