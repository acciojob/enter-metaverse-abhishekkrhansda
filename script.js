//your JS code here. If required.
let btn = document.querySelector("#enterBtn");
let para = document.querySelector("#status");

btn.addEventListener("click",() =>{
	para.outerHTML = "<h1> Entered Metaverse</h1>";
})