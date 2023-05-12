function generateTOC(){
    const table = document.getElementById("tableOfContents")
    table.innerHTML = "";
    table.innerHTML += "<h2>Introduction</h2>";
    for(let i in docs["introduction"]){
        table.innerHTML += `<a href="learn#introduction/${i}">${docs["introduction"][i][0]}</a><br>`;
    }

}

generateTOC();