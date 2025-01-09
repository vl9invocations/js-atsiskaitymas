// 1 Taškas

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.getElementById('output');
const input = document.getElementById('search');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    output.innerHTML = '';
    if (input.value === '') {
        alert('Please enter a value');
        return;
    }

    if (isNaN(input.value)) {
        alert('Please enter a number');
        return;
    }

    output.innerHTML += `
    <div style="${styles.output}">
            <h2>${input.value} kg converted into:</h2>
            <ol>
                <li>Pounds (lb): ${Math.round(input.value * 2.2046 * 1000) / 1000}</li>
                <li>Grams (g): ${input.value / 0.0010000}</li>
                <li>Ounces (uz): ${Math.round(input.value * 35.274 * 1000) / 1000}</li >
            </ol >
    </div >
    `;
    return;
});

const styles = {
    output: `
        display: block;
        margin: 0 auto;
        max-width: 470px;
        padding: 2em 4em;
        background-color: #f7f7f7;;
        line-height: 1.5;
    `
}   