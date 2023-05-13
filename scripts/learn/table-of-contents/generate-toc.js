function generateTOC(){
    const table = document.getElementById("tableOfContents")
    table.innerHTML = "";
    table.innerHTML += "<h2>INTRODUCTION</h2>";
    for(let i in docs["introduction"]){

        //completion status
        let compStatusStr = "<p style='opacity:.5'><img src='assets/svg/minus.svg'>Incomplete</p>";
        if(getCompletionStatus(docs["introduction"][i][0]) == "complete"){
            compStatusStr = "<p style='opacity:.5'><img src='assets/svg/check.svg' style='background:rgb(0,200,50,0.5)'>Complete</p>";
        }
        table.innerHTML += `
        <a href="learn#introduction/${i}">
            <div class='tocBlock'>
                ${compStatusStr}
                <h3>${docs["introduction"][i][0]}</h3>
                <p> Last Updated: ${docs["introduction"][i][2]}</p>
            </div>
            
        </a>`;
        if(i != docs["introduction"].length-1){
            table.innerHTML += "<div class='tocBlockSeparator'></div>";
        }
    }

}

generateTOC();