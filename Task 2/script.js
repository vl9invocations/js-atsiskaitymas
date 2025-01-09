// 1 Taškas

/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let btn = document.querySelector('.btn');
let clickBtn = document.querySelector('#btn__element');
let clickedNum = document.querySelector('#btn__state');

btn.style.userSelect = 'none';
let clickCount = 0;

clickBtn.addEventListener('mouseup', () => {
    clickCount++;
    clickedNum.innerText = clickCount;
});
