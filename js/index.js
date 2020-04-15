const url = "https://elephant-api.herokuapp.com/elephants";
const corsEnableUrl = "https://noroffcors.herokuapp.com/" + url;


async function getElephants() {
	try {
		const response = await fetch(corsEnableUrl);
        const results = await response.json();
        
        displayElephants(results);

    } catch (error) {
		console.log(error);
	} finally {
		console.log("everything is done");
	}
}

getElephants();

function displayElephants(elephants){
    const container = document.querySelector(".elephant-container");
    let html="";

    for(let i = 0; i < elephants.length; i++){
        console.log(elephants[i].name);
        
         if (!elephants[i].name ){ //SKIP LOOP _ NICE TO KNOW
            continue;
            }
        html += `<div><h3>${elephants[i].name}</h3></div>`;

    }

    container.innerHTML = html;
}