function generateTOC(){
    const table = document.getElementById("tableOfContents")
    table.innerHTML = "";
    table.innerHTML += "<h2>Introduction</h2>";
    for(let i in docs["introduction"]){
        table.innerHTML += `
        <a href="learn#introduction/${i}">
            <div class='tocBlock'>
                <h3>${docs["introduction"][i][0]}</h3>
                <p> Last Updated: ${docs["introduction"][i][2]}</p>
            </div>
            
        </a>`;
        if(i != docs["introduction"].length-1){
            table.innerHTML += "<div class='tocBlockSerparator'></div>";
        }
    }

}

generateTOC();