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

async function compteur () {
    for (let i = attribut_DataVal ; i > 0 ; i--){

        attribut_DataVal -= 1;
        let minutes = Math.floor(attribut_DataVal/60);
        let seconds = attribut_DataVal % 60;

        pop_text_time.innerText = `${minutes} m et ${seconds} s`;
        await sleep(1000);
    }

    document.location = findGetParameter("redirect");    // redirection //
    document.location.href = findGetParameter("redirect");
    document.location.replace(findGetParameter("redirect"));
}

let pop_text_time = document.getElementById("Ptext_time");
const time = (findGetParameter("time"));
let attribut_DataVal = parseInt(time.split("\\.")[0]) + 1;  // eviter chiffre à virgule //

compteur();


