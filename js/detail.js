const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const name = params.get("name");

const url = "https://elephant-api.herokuapp.com/elephants/name/" + name;
const corsEnableUrl = "https://noroffcors.herokuapp.com/" + url;

async function getElephantByName() {

    const h2 = document.querySelector("h2");
    let html = ""
    try {
        const response = await fetch(corsEnableUrl);
        const results = await response.json();

        h2.innerHTML = results.name;

        const species = document.querySelector(".species");
        species.innerHTML = results.species;


    } catch (error) {
        console.log(error);
    } finally {
        console.log("everything is done");
        const loading = document.querySelector(".loading");
        loading.style.display = "none";
    }
}

getElephantByName();