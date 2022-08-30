import CinnaMaker from "./CinnaMaker.js";

const cinnaCountEl = document.querySelector("#counter");
const autoClickerE1 = document.querySelector("#auto-clicker-count");
const autoClickCostEl = document.querySelector("#uto-clicker-cost");
const clickValueEl = document.querySelector("#click-value");
const multiClickEl = document.querySelector(".multiplier")
const multiCostEl = document.querySelector("#multiplier-cost")


const cinnaMaker = new CinnaMaker(0);


const makeCinnaBtn = document.querySelector("#clicker");
makeCinnaBtn.addEventListener("click", () => {
  cinnaMaker.makeCinnabuns();
  clickValueEl.innerText = cinnaMaker._clickValue;
  disableMultiplierBtn();
  cinnaCountEl.innerText = Math.round(cinnaMaker._cinnaNum)
  disableAutoClickerBtn();
  

} )

const autoClickerBtn = document.querySelector("#auto-clicker-button");



function disableAutoClickerBtn(){
  if(cinnaMaker._cinnaNum < cinnaMaker._autoClickerCost){
  autoClickerBtn.setAttribute("disabled", "disabled");
} else if(cinnaMaker._cinnaNum > cinnaMaker._autoClickerCost){
  autoClickerBtn.removeAttribute("disabled"); 
}

}

autoClickerBtn.addEventListener("click", () => {

  disableMultiplierBtn();
  disableAutoClickerBtn();
  cinnaMaker.buyAutoClicker();
  cinnaCountEl.innerText = Math.round(cinnaMaker._cinnaNum)
  autoClickCostEl.innerText = Math.round(cinnaMaker._autoClickerCost);
  autoClickerE1.innerText = cinnaMaker._autoClicker;


})

const cinnaMultiplierBtn = document.querySelector("#cinna-multiplier-button");
function disableMultiplierBtn() {
  if(cinnaMaker._cinnaNum < cinnaMaker._multiplerCost) {
    cinnaMultiplierBtn.setAttribute("disabled, disabled");
  }
  else if(cinnaMaker._cinnaNum > cinnaMaker._multiplerCost) {
    cinnaMultiplierBtn.removeAttribute("disabled");
  }
}
cinnaMultiplierBtn.addEventListener("click", () => {
  cinnaMaker.buyMultipier();
  clickValueEl.innerText = Math.round(cinnaMaker._clickValue*1000)/1000;
  cinnaCountEl.innerText = Math.round(cinnaMaker._cinnaNum);
  multiClickEl.innerText = cinnaMaker._multiplier;
  disableMultiplierBtn();
  multiCostEl.innerText = Math.rouund(cinnaMaker._multiplerCost*1000)/1000;

})

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  location.reload();
})

setInterval(() => {
  for(let i = 0; i<cinnaMaker.autoClicker; i++){
    cinnaMaker.makeCinnabuns();
  }

  disableAutoClickerBtn();
  disableMultiplierBtn();
  
  cinnaCountEl.innerText = Math.round(cinnaMaker._cinnaNum);
  autoClickCostEl.innerText = Math.round(cinnaMaker._autoClicker);
}, 1000)





