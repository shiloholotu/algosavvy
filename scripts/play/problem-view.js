function breakProblem(text){
    text = text.split("\n[BREAK]\n");
    const sections = ["Problem Statement","Solution","Method","Time Complexity"];
    let html = "";
    for(let i = 0; i < 4; i++){

        let display = mdToHTML(text[i]);
        if(i == 3)display = "\\(" + text[i] + "\\)";
        html += `
        <h2 class="problemSectionHeader" onclick="toggleView(${i})"><span id="hideIcon${i}">+</span> ${sections[i]}</h2>
        <div class="problemSection" id="problemSection${i}" style="display:none">
            ${display}
        </div>
        `;
    }
    return html;
}

async function viewProblem(folder,ind){
    let response = null;
    try{
        response = await fetch(`problem-markdown/${folder}/${problemFiles[folder][ind][1]}`);
    }catch(error){
        renderMd(`# Uh Oh🫤\nWe can't find that problem. **Sorry**!\n\nHere's the error: \`${error}\``,"problemView");
        console.error(error);
        document.getElementById("diffIndicator").style["display"] = "none";
        document.getElementById("problemView").classList.remove("mdNoTopPadding");
        hideLoadingScreen();
        return;
    }
    
    const text = await response.text();
    document.getElementById("problemView").innerHTML = breakProblem(text);


    document.getElementById("diffIndicator").innerHTML = folder[0].toUpperCase() + folder.slice(1);
    if(folder == "easy")document.getElementById("diffIndicator").style["background"] = "var(--pretty-green)";
    else if(folder == "medium")document.getElementById("diffIndicator").style["background"] = "var(--pretty-yellow)";
    else if(folder == "hard")document.getElementById("diffIndicator").style["background"] = "var(--pretty-red)";
    else document.getElementById("diffIndicator").style["background"] = "var(--pretty-purple)";

    MathJax.typeset();
    hljs.highlightAll();
    hideLoadingScreen();
}

function toggleView(section){
    if(document.getElementById("problemSection"+section).style["display"] == "none"){
        document.getElementById("problemSection"+section).style["display"] = "block";
        document.getElementById("hideIcon"+section).innerHTML = "-";
    }
    else{
        document.getElementById("problemSection"+section).style["display"] = "none";
        document.getElementById("hideIcon"+section).innerHTML = "+";
    }
}