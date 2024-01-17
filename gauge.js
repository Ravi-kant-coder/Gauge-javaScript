const gaugeBody = document.querySelector(".gauge-body");
const gaugeFill = gaugeBody.querySelector(".gauge-fill");
const gaugeCover = gaugeBody.querySelector(".gauge-cover");
const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");

btn.addEventListener("click", function(){
        gaugeFill.style.transform = `rotate(${inp.value/200}turn)`;
        gaugeCover.textContent = `${Math.round(inp.value)}%`;
        inp.value = "";
});