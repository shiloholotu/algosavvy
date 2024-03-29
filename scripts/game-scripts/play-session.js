
let sessionStats = [0,0];//[attempted,correct]
let curProblem = null;

function displayRandomProblem(){
    const problem = generateProblem(gameMode);
    curProblem = problem;
    
    document.getElementById("answerSection").innerHTML = "";
    document.getElementById("correctionSection").style["display"] = "none";
    document.getElementById("explanationSection").style["display"] = "none";
    document.getElementById("confirmationSection").style["display"] = "none";

    let problemInfo = "";
    if(gameMode != "error-blitz"){
        const infoPref = getPlayPreference(gameMode,"problemInfo");
        if(infoPref[0]) problemInfo += problem[0][0];
        if(infoPref[1]) problemInfo += "\n" + "## Solution\n" + problem[0][1];
        if(infoPref[2]) problemInfo += "\n" + "## Method\n" + problem[0][2];
        if(infoPref[3]) problemInfo += "\n" + "## Complexity\n$" + problem[0][3] + "$";
    }
    else problemInfo = problem[0][0];

    renderMd(problemInfo,"problemView");//dispay problem statement

    //difficulty indicator color based on difficulty, or langauge if error blitz
    
    document.getElementById("diffIndicator").innerHTML = problem[2][0].toUpperCase() + problem[2].slice(1);
    if(problem[2] == "easy")document.getElementById("diffIndicator").style["background"] = "var(--pretty-green)";
    else if(problem[2] == "medium")document.getElementById("diffIndicator").style["background"] = "var(--pretty-yellow)";
    else if(problem[2] == "hard" || problem[2] == "java")document.getElementById("diffIndicator").style["background"] = "var(--pretty-red)";
    else if(problem[2] == "c++")document.getElementById("diffIndicator").style["background"] = "var(--pretty-blue)";
    else document.getElementById("diffIndicator").style["background"] = "var(--pretty-purple)";
    

    
    if(gameMode != "solution-search" && gameMode != "error-blitz"){//generate answer choice buttons

        const choiceContainer = document.createElement("div");
        choiceContainer.style["display"] = "flex";

        for(let i = 0; i < 4; i++){

            let marginStyle = "10px";
            if(i == 3){//right-most button doesn't need space to its right
                marginStyle = "0";
            }

            let choiceText = problem[1][i];
            if(gameMode == "time-crunch") choiceText = "\\(" + choiceText + "\\)";//because time crunch answer choices use MathJax

            let answerType = "incorrectAnswer";
            if(problem[1][i] == problem[0][2] && gameMode == "method-madness")answerType = "correctAnswer";
            if(problem[1][i] == problem[0][3] && gameMode == "time-crunch") answerType = "correctAnswer";

            choiceContainer.innerHTML += `<button onclick="checkAnswerChoice(${i})" class="answerChoice ${answerType}" style="margin-right:${marginStyle}">${choiceText}</button>`;
        }
        document.getElementById("answerSection").appendChild(choiceContainer);
        MathJax.typeset();//for rendering math in time crunch answers
    }

    else{//generate answer textarea
        let placeholder = "Describe a solution...";
        if(gameMode == "error-blitz") placeholder = "Describe the error...(There may not be one)";
        document.getElementById("answerSection").innerHTML = `
        <div id='answerTextareaContainer'>
            <textarea id='answerTextarea' placeholder='${placeholder}'></textarea>
        </div>
        <button id="answerDoneButton" onclick="submitTextAnswer()">Done</button>`;
    }

}

function checkAnswerChoice(answer){

    document.getElementById("correctionSection").innerHTML = "";
    document.getElementById("correctionSection").style["display"] = "block";

    //show solution if its method madness
    if(getPlayPreference(gameMode,"problemInfo")[1] == false){
        renderMd(curProblem[0][1],"explanationSection")
        document.getElementById("explanationSection").style["display"] = "block";
    }
    
    const buttons = document.getElementsByClassName("answerChoice");

    //disable the buttons
    for(let i of buttons){
        i.style["pointer-events"] = "none";
        i.style["opacity"] = ".6";
        if(i.classList.contains("correctAnswer")){
            i.style["background"] = "var(--pretty-green)";
            i.style["color"] = "black";
            i.style["border"] = "2px solid transparent"
        }
    }

    if(buttons[answer].classList.contains("correctAnswer")){//picked right answer

        document.getElementById("correctionSection").innerHTML = `
        <p id="correctionIndicator" style='background:var(--pretty-green)'>
            <img src="assets/svg/check.svg">Correct
            <button id="nextProblemButton" onclick="nextProblem(true)">Next</button>
            <button id="changeCorrectButton" onclick="nextProblem(false)">No, I was incorrect</button>
        </p>
        `
    }

    else{//picked wrong answer

        buttons[answer].style["background"] = "var(--light-transp-blue)";

        document.getElementById("correctionSection").innerHTML = `
        <p id="correctionIndicator" style='background:var(--pretty-red)'>
            <img src="assets/svg/minus.svg"> Incorrect
            <button id="nextProblemButton" onclick="nextProblem(false)">Next</button>
            <button id="changeCorrectButton" onclick="nextProblem(true)">No, I was correct</button>
        </p>
        `
    }
}

function submitTextAnswer(){//for solution search and error blitz

    document.getElementById("answerDoneButton").style["display"] = "none";
    document.getElementById("answerTextareaContainer").style["opacity"] = ".5";
    document.getElementById("confirmationSection").innerHTML = "";

    if(gameMode == "solution-search"){
        renderMd(curProblem[1],"explanationSection");
        document.getElementById("explanationSection").style["display"] = "block";
    }
    
    if(gameMode == "error-blitz"){
        document.getElementById("confirmationSection").innerHTML = `<p id='errorText'>${curProblem[1]}</p>`;
        if(curProblem[1] != "There is no error.") document.getElementById("errorText").style["color"] = "var(--pretty-red)";
    }
    document.getElementById("confirmationSection").innerHTML += `
        <div style="display:flex; align-items:center; justify-content:space-between;background:var(--light-transp-blue);padding:10px;border-radius:10px">
            <p id="confirmChoiceLabel">Were you correct?</p>
            <div>
                <button class="confirmChoiceButton" onclick="nextProblem(false)">No</button>
                <button class="confirmChoiceButton" onclick="nextProblem(true)" style="background:var(--pretty-green)">Yes</button>
            </div>
        </div>
    `
    document.getElementById("confirmationSection").style["display"] = "block";
}


function updateStats(){
    let progress = 0;
    if(sessionStats[0] != 0)progress = sessionStats[1]*100/sessionStats[0];
    document.getElementById("greenBar").style["width"] = `${progress}%`;
    document.getElementById("progressDesc").innerHTML = `${sessionStats[1]} / ${sessionStats[0]} questions correct.`;
}

function nextProblem(correct){
    sessionStats[0]++;
    if(correct)sessionStats[1]++;
    updateStats();
    displayRandomProblem();
}