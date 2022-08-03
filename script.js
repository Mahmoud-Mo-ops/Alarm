const selectMenu =document.querySelectorAll("select");
let currentTime=document.querySelector("h1");
let selectAlarmBtn=document.querySelector("button");
let content= document.querySelector(".content");
let alarmTime ,isAlarmSet=false;
ringtone=new Audio("./files/NBUK26X-alarm.mp3");
let wrapper=document.querySelector(".wraper");
// HOUR
for(let i=12; i > 0 ;i--){
    i = i < 10? "0"+i : i;
 let option= `<option value="${i}">${i}</option>`;
 selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)

}

// Minute
for(let i=60; i > 0 ;i--){
    i = i < 10? "0"+i : i;
 let option= `<option value="${i}">${i}</option>`;
 selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)

}

// AM/PM
for(let i=2; i > 0 ;i--){
    let ampm =i == 1? "AM": "PM";
 let option= `<option value="${ampm}">${ampm}</option>`;
 selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
}


//clock
// setInterval(()=>{
//     let date=new Date()
//     let Hours=date.getHours();
//     let minutes=date.getMinutes();
//     let second=date.getSeconds();
//     let day="AM";
  
//       Hours
//     if(Hours <10){
//       Hours="0"+Hours
//     }
//     if(Hours > 12){
//         Hours=Hours-12
//         Hours="0"+Hours
//         day="PM"
//     }
//       //minutes
//     if(minutes <10){
//         minutes="0"+minutes
//       }
//       //Seconds   
//       if(second <10){
//         second="0"+second
//       }

//     currentTime.innerText=`${Hours}:${minutes}:${second} ${day}`
//    if(alarmTime == `${Hours}:${minutes} ${day}`){
//     console.log("ring")
//    }
// },)

//clock
setInterval(() => {
  // get hour,min ,sec 
  let date= new Date();
  let h=date.getHours();
  let m=date.getMinutes();
  let s=date.getSeconds();
  let ampm="AM";
  if(h>12){
    h=h-12;
    ampm="PM";
  }
  // if Hour Value is 0 ,set this value to 12
  h =h==0? h=12:h
// adding zero to hour ,minutes or seconds if thoses values are less than 10
  h= h < 10 ? "0" + h : h;
  m= m < 10 ? "0" + m : m;
  s= s < 10 ? "0" + s : s;
  currentTime.innerText=`${h}:${m}:${s} ${ampm}`
 
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
      ringtone.play();
      ringtone.loop=true;
      wrapper.style.opacity=1;
    }
},);

// Alarm
function setAlarm(){
   if(isAlarmSet){
     alarmTime="";
     ringtone.pause();
     content.classList.remove("disabled");
     selectAlarmBtn.innerText="Set Alarm";
     wrapper.style.opacity=".7"
     return isAlarmSet=false; 
   }
    let time=`${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
     //Step to select valid time(will be replaced with pop up!)
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
     return   alert("please,select a valid time to select Alarm! ")
    }
    
    isAlarmSet=true;
    alarmTime=time;
    content.classList.add("disabled")
    selectAlarmBtn.innerText="Clear Alarm" 
}


selectAlarmBtn.addEventListener("click",setAlarm)


















// let hourValue =selectMenu[0].value;
    // let MinuteValue =selectMenu[1].value;
    // let secondValue =selectMenu[2].value;
    // let time=`{${hourValue}:${MinuteValue} ${secondValue}}`;

