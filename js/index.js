// const url = "https://elephant-api.herokuapp.com/elephants";
const url = "https://myapitestup.azurewebsites.net";
const corsEnableUrl = "https://noroffcors.herokuapp.com/" + url;


async function getElephants() {
    try {
        const response = await fetch(corsEnableUrl);
        const results = await response.json();
        console.log(results);

        displayElephants(results); // CALL FUNCTION TO FILL IN CONTAINER WITH API 

    } catch (error) {
        console.log(error);
    } finally {
        console.log("everything is done");
    }
}

getElephants();

function displayElephants(elephants) {
    const container = document.querySelector(".elephant-container");
    let html = "";





    html += `<div>
         <img class="image" src="${elephants[0].background_image}">
         <h2>${elephants[0].title}</h2>
         <h3>${elephants[0].description}</h3>
         <a href ="detail.html?name=${elephants[0].link}">Details</a>
         </div>`;










    // for (let i = 0; i < 4; i++) {
    //     console.log(elephants[i].name);

    //     if (!elephants[i].name) { //SKIP ONE i IN THE LOOP - NICE TO KNOW
    //         continue;
    //     }
    //     html += `<div>
    //     <img class="image" src="${elephants[i].image}">
    //     <h3>${elephants[i].name}</h3>
    //     <a href ="detail.html?name=${elephants[i].name}">Details</a>
    //     </div>`;

    // }

    container.innerHTML = html;
}