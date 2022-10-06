function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let pop_text_time= document.getElementById("Ptext_time");
let attribut_DataVal = parseInt(pop_text_time.getAttribute("data-val"));
const time = findGetParameter("time");
attribut_DataVal = time;

async function compteur () {
    for (let i = attribut_DataVal ; i > 0 ; i--){

        attribut_DataVal -= 1;
        let minutes = Math.floor(attribut_DataVal/60);
        let seconds = attribut_DataVal % 60;

        pop_text_time.innerText = `${minutes} m et ${seconds} s`;
        await sleep(1000);
    }
}

compteur();