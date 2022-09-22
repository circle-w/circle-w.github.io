let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/pic1.jpg'){
        myImage.setAttribute('src','images/pic2.jpg');
    }
    else{
        myImage.setAttribute('src','images/pic1.jpg');
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt("请输入你的昵称");
    if(!myName || myName===null){
        setUserName();
    }
    else{
    localStorage.setItem('name',myName);
    myHeading.textContent=myName+'，欢迎你！';
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('Name');
    myHeading.textContent=storedName+'，欢迎你！';
}
myButton.onclick=function(){
    setUserName();
}
