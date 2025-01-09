// 2 Taškai

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsersBtn = document.querySelector('#btn');
const output = document.querySelector('#output');
const message = document.querySelector('#message');

output.append(createList());
output.style.maxWidth = '700px';

const list = document.querySelector("#list");
const users = new Map();

showUsersBtn.addEventListener('mousedown', () => {
    getUsers();
    generateOutput();
});


async function getUsers() {
    await fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            data.map(element => {
                users.set(element.id, {
                    login: element.login,
                    avatar: element.avatar_url
                })
            });
        })
}

function createList() {
    const list = document.createElement('ul')
    list.id = "list";
    return list;
}

async function generateOutput() {
    if (users.size !== 0) {
        message.style.display = "none"
        list.innerHTML = ``;
        users.forEach(user => {
            list.innerHTML += `
                <li style="${styles.userCard}">
                    <div style="${styles.userName}"> 
                        ${user.login}
                    </div>
                    <div style="${styles.userAvatar}">
                        <img style="${styles.img}" src="${user.avatar}" alt="${user.login} avatar}">
                    </div>
                </li>
            `
        })
    } else {
        message.style.display = "block"
    }
}

const styles = {
    userCard: `
        display: flex;
        align-items: center;
        margin: 1em 0;
        padding: 5px 10px;
        background-color: lightgrey;
        border-radius: 10px;
    `,
    userName: `
        display: flex;
        margin-left: 2em;
        flex:50%;
        font-size: 2em;
        font-weight: 500;
    `,
    userAvatar: `
        display: flex;
        align-items: center;
        margin-right: 2em;
    `,
    img: `
        max-height: 115px;
        border-radius: 50%;
    `
}


