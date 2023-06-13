function breakProblem(text){
    text = text.split("\n[BREAK]\n");
    const sections = ["Problem Statement","Solution","Method","Time Complexity"];
    let html = "";
    for(let i = 0; i < 4; i++){
        html += `
        <h2 onclick="toggleView(${i})"><span id="hideIcon${i}">+</span> ${sections[i]}</h2>
        <div class="problemSection" id="problemSection${i}" style="display:none">
            ${mdToHTML(text[i])}
        </div>
        `;
    }
    return html;
}

async function viewProblem(folder,ind){
    const response = await fetch(`problem-markdown/${folder}/${problemFiles[folder][ind][1]}`);
    const text = await response.text();
    document.getElementById("problemView").innerHTML = breakProblem(text);
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