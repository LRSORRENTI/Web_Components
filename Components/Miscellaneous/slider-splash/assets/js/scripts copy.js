var feature = [{
  awardImg: "Pic1",
  awardName: "Deuvaux Monet",
  awardNameFull: "Deuvaux Monet",
  awardDate: "November 2021",
  awardColor: "#feb37d"
},
{
  awardImg: "Pic2",
  awardName: "Haisser -blad",
  awardNameFull: "Haisserblad",
  awardDate: "August 2019",
  awardColor: "#0C4767"
}, 
{
  awardImg: "Pic3",
  awardName: "The Dress -rosa",
  awardNameFull: "The Dressrosa",
  awardDate: "March 2021",
  awardColor: "#febebc"
},
{
  awardImg: "Pic4",
  awardName: "Picto Prix",
  awardNameFull: "Picto Prix",
  awardDate: "December 2018",
  awardColor: "#6b6f6b"
}]

/*GLOBAL DECLARATION*/
var splash = gsap.timeline({paused:true});
splash
  .fromTo("#splash",{opacity: "0%", pointerEvents: "none"},{opacity: "100%", pointerEvents: "auto", immediateRender: false, duration: 0}, 0)
  .fromTo("#splash-curtain",{x: "0%"},{x: "-100%", duration: 3.3}, 0)
  .fromTo("#splash-title",{opacity: "0%"},{opacity: "100%", duration: 4}, 0)
  .fromTo("#splash-desc",{opacity: "0%"},{opacity: "100%", duration: 1}, 2)
  .fromTo("#splash",{opacity: "100%", pointerEvents: "auto"},{opacity: "0%", pointerEvents: "none", immediateRender: false, duration: 1}, 4)

/*HOME PAGE DECLARATION*/
var awards;
var awardsLength;
var belt;
var val = 1;
var phase = 0;
const slider = document.body;

/*WORKS PAGE DECLARATION*/
var picQty = 20;

gsap.config({ //nullify all warnings
  nullTargetWarn: false
});


function navigationType(){
  var result;
  var p;
  if (window.performance.navigation) {
      result=window.performance.navigation;
      if (result==255){result=4} // 4 is my invention!
  }
  if (window.performance.getEntriesByType("navigation")){
     p=window.performance.getEntriesByType("navigation")[0].type;

     if (p=='navigate'){result=0}
     if (p=='reload'){result=1}
     if (p=='back_forward'){result=2}
     if (p=='prerender'){result=3} //3 is my invention!
  }
  return result;
}

window.onload = function(){
  referrer = document.referrer;
  if((navigationType()===0 || navigationType()===1 || navigationType()===2) && referrer.includes("anadeufont.gioreyes.me/")){
      //DON'T SPLASH
  }
  else{
      splash.play();
  }
}

/*HOME FUNCTIONS*/

function init_home(){
  phase = 0;
  val = 1;
  getShotTotal();
  changeBaseColor(2,3,4);
  document.getElementById("shot_node_0").innerHTML = val;
  document.getElementById("at1_node_0").innerHTML = feature[0].awardName.split(" ")[0];
  document.getElementById("at2_node_0").innerHTML = feature[0].awardName.split(" ")[1];
  document.getElementById("at3_node_0").innerHTML = feature[0].awardName.split(" ")[2];
  document.getElementById("date_node_0").innerHTML = feature[0].awardDate;

  document.getElementById("at_node_0_m").innerHTML = feature[0].awardNameFull;
  document.getElementById("date_node_0_m").innerHTML = feature[0].awardDate;
}


function browse(dir) {
 rollInfo(dir);

  if(dir == "next") {
    if(($('#belt div:nth-child(1)').attr('class').split(' ').pop() != 'award') && ($('#belt div:nth-child(2)').attr('class').split(' ').pop() != 'award') &&
    ($('#belt div:nth-child(3)').attr('class').split(' ').pop() != 'award') && ($('#belt div:nth-child(4)').attr('class').split(' ').pop() != 'award')
    )
    {
      document.querySelector("#belt div:nth-child(1)").classList.remove($('#belt div:nth-child(1)').attr('class').split(' ').pop()); // reset animation
      document.querySelector("#belt div:nth-child(2)").classList.remove($('#belt div:nth-child(2)').attr('class').split(' ').pop()); // reset animation
      document.querySelector("#belt div:nth-child(3)").classList.remove($('#belt div:nth-child(3)').attr('class').split(' ').pop()); // reset animation
      document.querySelector("#belt div:nth-child(4)").classList.remove($('#belt div:nth-child(4)').attr('class').split(' ').pop()); // reset animation
    }

    if(phase == 0) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot1_next');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot2_next');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot3_next');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot4_next');
      changeBaseColor(1,2,3);
      phase++;
    }
    else if(phase == 1) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot2_next');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot3_next');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot4_next');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot1_next');
      changeBaseColor(4,1,2);
      phase++;
    }
    else if(phase == 2) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot3_next');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot4_next');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot1_next');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot2_next');
      changeBaseColor(3,4,1);
      phase++;
    }
    else if(phase == 3) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot4_next');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot1_next');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot2_next');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot3_next');
      changeBaseColor(2,3,4);
      phase = 0;
    }
  }
  else if(dir == "prev") {
    if(($('#belt div:nth-child(1)').attr('class').split(' ').pop() != 'award') && ($('#belt div:nth-child(2)').attr('class').split(' ').pop() != 'award') &&
    ($('#belt div:nth-child(3)').attr('class').split(' ').pop() != 'award') && ($('#belt div:nth-child(4)').attr('class').split(' ').pop() != 'award')
    )
    {
      document.querySelector("#belt div:nth-child(1)").classList.remove($('#belt div:nth-child(1)').attr('class').split(' ').pop()); // reset animation
      document.querySelector("#belt div:nth-child(2)").classList.remove($('#belt div:nth-child(2)').attr('class').split(' ').pop()); // reset animation
      document.querySelector("#belt div:nth-child(3)").classList.remove($('#belt div:nth-child(3)').attr('class').split(' ').pop()); // reset animation
      document.querySelector("#belt div:nth-child(4)").classList.remove($('#belt div:nth-child(4)').attr('class').split(' ').pop()); // reset animation
    }

    if(phase == 0) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot4_prev');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot1_prev');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot2_prev');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot3_prev');
      changeBaseColor(3,4,1);
      phase = 3;
    }
    else if(phase == 1) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot1_prev');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot2_prev');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot3_prev');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot4_prev');
      changeBaseColor(2,3,4);
      phase--;
    }
    else if(phase == 2) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot2_prev');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot3_prev');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot4_prev');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot1_prev');
      changeBaseColor(1,2,3);
      phase--;
    }
    else if(phase == 3) {  
      document.querySelector("#belt div:nth-child(1)").classList.add('spot3_prev');
      document.querySelector("#belt div:nth-child(2)").classList.add('spot4_prev');
      document.querySelector("#belt div:nth-child(3)").classList.add('spot1_prev');
      document.querySelector("#belt div:nth-child(4)").classList.add('spot2_prev');
      changeBaseColor(4,1,2);
      phase--;
    }
  }
}

window.addEventListener("orientationchange", function() {
  var page = window.location.href.replace('http://','');
  if(page == "anadeufont.gioreyes.me/" || page == "anadeufont.gioreyes.me/index.html"){
    location.reload();
  }
}, false);

function changeBaseColor(elem1,elem2,elem3){
    var color1 = feature[elem1 - 1].awardColor;
    gsap.to(document.querySelector('.base:nth-child(1)'), {backgroundColor: feature[elem1 - 1].awardColor, duration: 1});
    gsap.to(document.querySelector('.base:nth-child(2)'), {backgroundColor: feature[elem2 - 1].awardColor, duration: 1});
    gsap.to(document.querySelector('.base:nth-child(3)'), {backgroundColor: feature[elem3 - 1].awardColor, duration: 1});
}

function retractLine(dir,conf){
  if(dir == 'next'){
    if(conf == true){
      gsap.to(document.querySelector('#nextSection div:nth-child(1) .navLine'), {width: "40%", duration: 0.5});
    }
    else if(conf == false){
      gsap.to(document.querySelector('#nextSection div:nth-child(1) .navLine'), {width: "56%", duration: 0.5});
    }
  }
  else if(dir == 'prev'){
    if(conf == true){
      gsap.to(document.querySelector('#prevSection div:nth-child(2) .navLine'), {width: "40%", duration: 0.5});
    }
    else if(conf == false){
      gsap.to(document.querySelector('#prevSection div:nth-child(2) .navLine'), {width: "56%", duration: 0.5});
    }
  }
}

function rollInfo(dir){
    if(dir == "next") {
      if(val < feature.length){ val++;}
      else{ val = 1; }

      document.getElementById("shot_node_1").innerHTML = val;
      document.getElementById("at1_node_1").innerHTML = feature[val-1].awardName.split(" ")[0];
      document.getElementById("at2_node_1").innerHTML = feature[val-1].awardName.split(" ")[1];
      document.getElementById("at3_node_1").innerHTML = feature[val-1].awardName.split(" ")[2];
      document.getElementById("date_node_1").innerHTML = feature[val-1].awardDate;

      //MOBILE
      document.getElementById("at_node_1_m").innerHTML = feature[val-1].awardNameFull;
      document.getElementById("date_node_1_m").innerHTML = feature[val-1].awardDate;

      gsap.to([document.getElementById("shot_node_n"), document.getElementById("shot_node_0"), document.getElementById("shot_node_1")],{yPercent: -266, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("at1_node_n"), document.getElementById("at1_node_0"), document.getElementById("at1_node_1")],{yPercent: -180, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("at2_node_n"), document.getElementById("at2_node_0"), document.getElementById("at2_node_1")],{yPercent: -181, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("at3_node_n"), document.getElementById("at3_node_0"), document.getElementById("at3_node_1")],{yPercent: -181, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("date_node_n"), document.getElementById("date_node_0"), document.getElementById("date_node_1")],{yPercent: -185, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});

      //MOBILE
      gsap.to([document.getElementById("at_node_n_m"), document.getElementById("at_node_0_m"), document.getElementById("at_node_1_m")],{yPercent: -266, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("date_node_n_m"), document.getElementById("date_node_0_m"), document.getElementById("date_node_1_m")],{yPercent: -262, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
    }
    else if(dir == "prev") {
      if(val > 1){ val--; }
      else{ val = feature.length; }
  
      document.getElementById("shot_node_n").innerHTML = val;
      document.getElementById("at1_node_n").innerHTML = feature[val-1].awardName.split(" ")[0];
      document.getElementById("at2_node_n").innerHTML = feature[val-1].awardName.split(" ")[1];
      document.getElementById("at3_node_n").innerHTML = feature[val-1].awardName.split(" ")[2];
      document.getElementById("date_node_n").innerHTML = feature[val-1].awardDate;

      //MOBILE
      document.getElementById("at_node_n_m").innerHTML = feature[val-1].awardNameFull;
      document.getElementById("date_node_n_m").innerHTML = feature[val-1].awardDate;
  
      gsap.to([document.getElementById("shot_node_n"), document.getElementById("shot_node_0"), document.getElementById("shot_node_1")],{yPercent: 265, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("at1_node_n"), document.getElementById("at1_node_0"), document.getElementById("at1_node_1")],{yPercent: 183, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("at2_node_n"), document.getElementById("at2_node_0"), document.getElementById("at2_node_1")],{yPercent: 181, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("at3_node_n"), document.getElementById("at3_node_0"), document.getElementById("at3_node_1")],{yPercent: 181, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("date_node_n"), document.getElementById("date_node_0"), document.getElementById("date_node_1")],{yPercent: 183, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});

      //MOBILE
      gsap.to([document.getElementById("at_node_n_m"), document.getElementById("at_node_0_m"), document.getElementById("at_node_1_m")],{yPercent: 265, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
      gsap.to([document.getElementById("date_node_n_m"), document.getElementById("date_node_0_m"), document.getElementById("date_node_1_m")],{yPercent: 262, ease: Circ.easeInOut, duration: 1, onComplete: swapNodes, onCompleteParams: [dir]});
    }
}

function swapNodes(dir) {
  if(dir == "next") { 
    document.getElementById("shot_node_0").innerHTML = document.getElementById("shot_node_1").innerHTML; 
    document.getElementById("at1_node_0").innerHTML = document.getElementById("at1_node_1").innerHTML;
    document.getElementById("at2_node_0").innerHTML = document.getElementById("at2_node_1").innerHTML;
    document.getElementById("at3_node_0").innerHTML = document.getElementById("at3_node_1").innerHTML;
    document.getElementById("date_node_0").innerHTML = document.getElementById("date_node_1").innerHTML;

    //MOBILE
    document.getElementById("at_node_0_m").innerHTML = document.getElementById("at_node_1_m").innerHTML;
    document.getElementById("date_node_0_m").innerHTML = document.getElementById("date_node_1_m").innerHTML;
  }
  else if(dir == "prev") { 
    document.getElementById("shot_node_0").innerHTML = document.getElementById("shot_node_n").innerHTML; 
    document.getElementById("at1_node_0").innerHTML = document.getElementById("at1_node_n").innerHTML;
    document.getElementById("at2_node_0").innerHTML = document.getElementById("at2_node_n").innerHTML;
    document.getElementById("at3_node_0").innerHTML = document.getElementById("at3_node_n").innerHTML;
    document.getElementById("date_node_0").innerHTML = document.getElementById("date_node_n").innerHTML;

    //MOBILE
    document.getElementById("at_node_0_m").innerHTML = document.getElementById("at_node_n_m").innerHTML;
    document.getElementById("date_node_0_m").innerHTML = document.getElementById("date_node_n_m").innerHTML;
  }

  //Return to original position
  gsap.to([document.getElementById("shot_node_n"), document.getElementById("shot_node_0"), document.getElementById("shot_node_1")],{yPercent: 0, duration: 0});
  gsap.to([document.getElementById("at1_node_n"), document.getElementById("at1_node_0"), document.getElementById("at1_node_1")],{yPercent: 0, duration: 0});
  gsap.to([document.getElementById("at2_node_n"), document.getElementById("at2_node_0"), document.getElementById("at2_node_1")],{yPercent: 0, duration: 0});
  gsap.to([document.getElementById("at3_node_n"), document.getElementById("at3_node_0"), document.getElementById("at3_node_1")],{yPercent: 0, duration: 0});
  gsap.to([document.getElementById("date_node_n"), document.getElementById("date_node_0"), document.getElementById("date_node_1")],{yPercent: 0, duration: 0});

  //MOBILE
  gsap.to([document.getElementById("at_node_n_m"), document.getElementById("at_node_0_m"), document.getElementById("at_node_1_m")],{yPercent: 0, duration: 0});
  gsap.to([document.getElementById("date_node_n_m"), document.getElementById("date_node_0_m"), document.getElementById("date_node_1_m")],{yPercent: 0, duration: 0});
}

function getShotTotal(){
  document.getElementById("shotTotal").innerHTML = feature.length;
}

