



function generateProblemList(diff){
    let html = "";

    for(let i in problemFiles[diff]){

        //completion status
        let compStatusStr = "<p style='font-weight:lighter'><div class='checkBox' style='margin-right:10px'><div style='background:var(--light-transp-blue)'></div></div><span style='opacity:.5'>Incomplete</span></p>";
        let boxShadowStr = "";
        if(getCompletionStatus(problemFiles[diff][i][0]) == "complete"){
            compStatusStr = "<p style='font-weight:lighter'><div class='checkBox' style='margin-right:10px'><div style='background:var(--pretty-green)'></div></div><span style='opacity:.5'>Complete</span></p>";
            boxShadowStr = "style='box-shadow:none'";
        }

        //difficulty label
        let diffLabelStr = '<p class="diffLabel">Easy</p>';
        if(diff == "medium") diffLabelStr = '<p class="diffLabel" style="background:var(--pretty-yellow)">Medium</p>';
        if(diff == "hard") diffLabelStr = '<p class="diffLabel" style="background:var(--pretty-red)">Hard</p>';
        if(diff == "advanced") diffLabelStr = '<p class="diffLabel" style="background:var(--pretty-purple)">Advanced</p>';

        html += `
        <a href="problem#${diff}/${i}">
            <div class='tocBlock' ${boxShadowStr}>

                ${diffLabelStr}

                ${compStatusStr}
                <h3>${problemFiles[diff][i][0]}</h3>
                <p style="opacity: .7"> Last Updated: ${problemFiles[diff][i][2]}</p>
            </div>
            
        </a>`;
        
        html += "<div style='height:20px'></div>";
    }

    return html;
}


function generateTOC(){
    const table = document.getElementById("tableOfContents")
    table.innerHTML = "";

    for(let i of ["easy","medium","hard","advanced"]){
        table.innerHTML += generateProblemList(i);
    }


}

generateTOC();