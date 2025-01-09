// 2 Taškai

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const DATA = './cars.json';

const output = document.querySelector('#output');

async function getData(url) {
    try {
        return await fetch(url)
            .then(response => response.json());
    } catch (error) {
        console.log("Error", error);
    }
}

getData(DATA).then(data => {
    data.forEach(car => {
        const brandCard = document.createElement('div');
        brandCard.style = `
            background-color: lightgray;
            border-radius: 10px;
            padding: 1.5em 3em;
            margin: 1em;
        `;

        const brandHeader = document.createElement('div');
        brandHeader.style = `
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        const headerBtn = document.createElement('button');
        headerBtn.dataset.brand = car.brand;
        headerBtn.textContent = 'Show models';
        headerBtn.style = `
            padding: .5em 1em;
            background-color: darkgray;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;

        const brandName = document.createElement('h2');
        brandName.textContent = car.brand;
        brandName.style = `
            margin: 0;
            font-size: 2em;
        `;
        brandHeader.appendChild(brandName);
        brandHeader.appendChild(headerBtn);
        brandCard.appendChild(brandHeader);

        const modelList = document.createElement('ul');
        modelList.dataset.brand = car.brand;
        modelList.style = `
            margin-top: 1em;
            list-style-type: none;
            padding: 0;
            line-height: 1.35em;
            display: none;
        `;
        car.models.forEach(model => {
            const modelItem = document.createElement('li');
            modelItem.textContent = model;
            modelList.appendChild(modelItem);
        });

        brandCard.appendChild(modelList);
        output.appendChild(brandCard);
    });
});

output.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.tagName === 'BUTTON') {
        const modelsList = document.querySelector(`ul[data-brand="${e.target.dataset.brand}"]`);
        modelsList.style.display = modelsList.style.display === 'none' ? 'block' : 'none';
    }
});