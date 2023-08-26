function generateSection(section){
    html = `<h2>${(section[0].toUpperCase() + section.slice(1))}</h2>`;
    for(let i in tutorialFiles[section]){

        //completion status
        let compStatusStr = "<p style='font-weight:lighter'><div class='checkBox' style='margin-right:10px'><div style='background:var(--light-transp-blue)'></div></div><span style='opacity:.5'>Incomplete</span></p>";
        let boxShadowStr = "";
        if(getCompletionStatus(tutorialFiles[section][i][0]) == "complete"){
            compStatusStr = "<p style='font-weight:lighter'><div class='checkBox' style='margin-right:10px'><div style='background:var(--pretty-green)'></div></div><span style='opacity:.5'>Complete</span></p>";
            boxShadowStr = "style='box-shadow:none'";
        }
        html += `
        <a href="learn#${section}/${i}">
            <div class='tocBlock' ${boxShadowStr}>
                ${compStatusStr}
                <h3>${tutorialFiles[section][i][0]}</h3>
                <p style="opacity: .7"> Last Updated: ${tutorialFiles[section][i][2]}</p>
            </div>
            
        </a>`;
        if(i != tutorialFiles[section].length-1){
            html += "<div class='tocBlockSeparator'></div>";
        }
    }

    return html;
}
function generateTOC(){
    const table = document.getElementById("tableOfContents")
    table.innerHTML = "";
    for(let i of ["introduction","easy","medium","hard","advanced"]){
        table.innerHTML += generateSection(i);
    }

}

generateTOC();