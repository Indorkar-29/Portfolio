var tabLinks=document.getElementsByClassName("tab-links");
var tabContents=document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu=document.getElementById("sidemenu");

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu(){
    sideMenu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYPw6e2iFHKzbCRHFTpuI2R1DA5oEM8DvLhP3Pq4Y2RjrcpuOYZuUF6O4aH2qadEKr/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response);

        msg.innerHTML="Message sent successfully";

        setTimeout(function(){
            msg.innerHTML="";
        },5000);

        form.reset();

    })
      .catch(error => console.error('Error!', error.message))
  });

const arr=["Data Structures and Algorithm","MongoDB","Express JS","React JS","Node JS","JavaScript","GIT"];

const skill=document.getElementById("skill");

let i=0;
setInterval(()=>{
    if(i===arr.length){
        i=0;
    }
    skill.innerHTML=arr[i];
    i++;
},1000);

const text=document.querySelector('.sec-text');

const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="MongoDB"
    },0);
    setTimeout(()=>{
        text.textContent="ExpressJS"
    },4000);
    setTimeout(()=>{
        text.textContent="ReactJS"
    },8000);
    setTimeout(()=>{
        text.textContent="NodeJS"
    },12000);
    setTimeout(()=>{
        text.textContent="HTML"
    },16000);
    setTimeout(()=>{
        text.textContent="CSS"
    },20000);
    setTimeout(()=>{
        text.textContent="DSA"
    },24000);
    setTimeout(()=>{
        text.textContent="GIT"
    },28000);
}

textLoad();
setInterval(textLoad,32000);