let curProblem = null;
let curFolder = null;

let confetti = null;
//confetti



//adds funcitonality to a tags in doc nav bar
function displayProbNavBar(){

    //previous doc
    let prevProblemInd = parseInt(curProblem)-1;
    let prevProblemFolder = curFolder;
    //if first doc of folder
    if(prevProblemInd == -1){
    
        if(prevProblemFolder == "medium") prevProblemFolder = "easy";
        else if(prevProblemFolder == "hard") prevProblemFolder = "medium";
        else if(prevProblemFolder == "advanced") prevProblemFolder = "hard";
        else{
            document.getElementById("prevProbLink").classList.add("disabledNav");
        }

        prevProblemInd = problemFiles[prevProblemFolder].length-1;
    }
    document.getElementById("prevProbLink").setAttribute("href",`problem#${prevProblemFolder}/${prevProblemInd}`);
    document.getElementById("prevProbLink").setAttribute("onclick",`openAndReload("problem#${prevProblemFolder}/${prevProblemInd}"); return false`);

    //next doc
    let nextProblemInd = parseInt(curProblem)+1;
    let nextProblemFolder = curFolder;
    //if last doc of folder
    if(nextProblemInd >= problemFiles[nextProblemFolder].length){

        nextProblemInd = 0;

        if(nextProblemFolder == "easy") nextProblemFolder = "medium";
        else if(nextProblemFolder == "medium") nextProblemFolder = "hard";
        else if(nextProblemFolder == "hard") nextProblemFolder = "advanced";
        else{
            document.getElementById("nextProbLink").classList.add("disabledNav");
        }
    }
    document.getElementById("nextProbLink").setAttribute("href",`problem#${nextProblemFolder}/${nextProblemInd}`);
    document.getElementById("nextProbLink").setAttribute("onclick",`openAndReload("problem#${nextProblemFolder}/${nextProblemInd}"); return false`);
}


//break problem into html collapsibles
function breakProblem(text){
    text = text.split("\n[BREAK]\n");
    const sections = ["Problem Statement","Solution","Method","Time Complexity"];
    let html = "";
    for(let i = 0; i < 4; i++){

        let display = mdToHTML(text[i]);
        if(i == 3)display = "\\(" + text[i] + "\\)";
        html += `
        <h3 class="problemSectionHeader" onclick="toggleView(${i})">
            <img id="hideIcon${i}Black" class="lightModeSvg" src="assets/svg/right.svg">
            <img id="hideIcon${i}White" class="darkModeSvg" src="assets/svg/right-white.svg">
            ${sections[i]}
        </h3>
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
        document.getElementById("docNavBar").style["display"] = "none";
        document.getElementById("problemView").classList.remove("mdNoTopPadding");
        hideLoadingScreen();
        return;
    }

    curFolder = folder;
    curProblem = ind;
    
    const text = await response.text();
    document.getElementById("problemView").innerHTML = breakProblem(text);

    //side bar links
    document.getElementById("problemName").textContent = problemFiles[folder][ind][0];

    document.getElementById("problemName").setAttribute("href",`problem#${folder}/${ind}`);
    document.getElementById("backToProblemset").setAttribute("href","problemset");

    displayProbNavBar();

    //render checkbox depending on completion status of problem
    if(getCompletionStatus(problemFiles[folder][ind][0]) == "incomplete"){
        renderCheckBox("completionStatus",false);
        document.getElementById("completionStatusLabel").textContent = "Incomplete";
    }
    else{
        renderCheckBox("completionStatus",true);
        document.getElementById("completionStatusLabel").textContent = "Complete";
    }


    //color difficulty indicator
    document.getElementById("diffIndicator").innerHTML = folder[0].toUpperCase() + folder.slice(1);
    if(folder == "easy")document.getElementById("diffIndicator").style["background"] = "var(--pretty-green)";
    else if(folder == "medium")document.getElementById("diffIndicator").style["background"] = "var(--pretty-yellow)";
    else if(folder == "hard")document.getElementById("diffIndicator").style["background"] = "var(--pretty-red)";
    else document.getElementById("diffIndicator").style["background"] = "var(--pretty-purple)";

    MathJax.typeset();
    hljs.highlightAll();
    hideLoadingScreen();

    confetti = new Confetti('completionStatus');
    confetti.setCount(75);
    if(localStorage.getItem("confetti") == "true")confetti.setSize(1);
    else confetti.setSize(0);
    confetti.setPower(25);
    confetti.setFade(false);
    confetti.destroyTarget(false);
}

function toggleView(section){
    if(document.getElementById("problemSection"+section).style["display"] == "none"){
        document.getElementById("problemSection"+section).style["display"] = "block";
        document.getElementById("hideIcon"+section+"Black").setAttribute("src","assets/svg/down.svg");
        document.getElementById("hideIcon"+section+"White").setAttribute("src","assets/svg/down-white.svg");
    }
    else{
        document.getElementById("problemSection"+section).style["display"] = "none";
        document.getElementById("hideIcon"+section+"Black").setAttribute("src","assets/svg/right.svg");
        document.getElementById("hideIcon"+section+"White").setAttribute("src","assets/svg/right-white.svg");
    }
}

function toggleCompletionStatus(){

    if(getCompletionStatus(problemFiles[curFolder][curProblem][0]) == "complete"){

        setCompletionStatus(problemFiles[curFolder][curProblem][0],"incomplete");
        renderCheckBox("completionStatus",false);
        document.getElementById("completionStatusLabel").textContent = "Incomplete";
        confetti.setSize(0);
        
    }

    else{

        setCompletionStatus(problemFiles[curFolder][curProblem][0],"complete");
        renderCheckBox("completionStatus",true);
        document.getElementById("completionStatusLabel").textContent = "Complete";
        if(localStorage.getItem("confetti") == "true")confetti.setSize(1);
        
    }
}