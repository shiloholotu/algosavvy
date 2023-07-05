function generateTOC(){
    const table = document.getElementById("tableOfContents")
    table.innerHTML = "";
    table.innerHTML += "<h2>INTRODUCTION</h2>";
    for(let i in tutorialFiles["introduction"]){

        //completion status
        let compStatusStr = "<p style='font-weight:lighter'><img src='assets/svg/minus.svg'><span style='opacity:.5'>Incomplete</span></p>";
        let boxShadowStr = "";
        if(getCompletionStatus(tutorialFiles["introduction"][i][0]) == "complete"){
            compStatusStr = "<p style='font-weight:lighter'><img src='assets/svg/check.svg' style='background:var(--pretty-green);border:none'><span style='opacity:.5'>Complete</span></p>";
            boxShadowStr = "style='box-shadow:none'";
        }
        table.innerHTML += `
        <a href="learn#introduction/${i}">
            <div class='tocBlock' ${boxShadowStr}>
                ${compStatusStr}
                <h3>${tutorialFiles["introduction"][i][0]}</h3>
                <p style="opacity: .7"> Last Updated: ${tutorialFiles["introduction"][i][2]}</p>
            </div>
            
        </a>`;
        if(i != tutorialFiles["introduction"].length-1){
            table.innerHTML += "<div class='tocBlockSeparator'></div>";
        }
    }

}

generateTOC();