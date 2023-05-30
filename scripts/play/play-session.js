
function displayRandomProblem(){
    const problem = generateProblem(gameMode);
    document.getElementById("answerSection").innerHTML = "";
    renderMd(problem[0][0],"problemView");

    //difficulty indicator color based on difficulty
    document.getElementById("diffIndicator").innerHTML = problem[2][0].toUpperCase() + problem[2].slice(1);
    if(problem[2] == "easy")document.getElementById("diffIndicator").style["background"] = "var(--pretty-green)";
    else if(problem[2] == "medium")document.getElementById("diffIndicator").style["background"] = "var(--pretty-yellow)";
    else if(problem[2] == "hard")document.getElementById("diffIndicator").style["background"] = "var(--pretty-red)";
    else document.getElementById("diffIndicator").style["background"] = "var(--pretty-purple)";

    
    if(gameMode != "solution-search" && gameMode != "error-blitz"){

        const choiceContainer = document.createElement("div");
        choiceContainer.style["display"] = "flex";
        //generate answer choice buttons - solution search and error blitz are free response modes
        for(let i = 0; i < 4; i++){

            let marginStyle = "10px";
            if(i == 3){//right-most button doesn't need space to its right
                marginStyle = "0";
            }

            let choiceText = problem[1][i];
            if(gameMode == "time-crunch") choiceText = "\\(" + choiceText + "\\)";//because time crunch answer choices use MathJax
            choiceContainer.innerHTML += `<button class="answerChoice" style="margin-right:${marginStyle}">${choiceText}</button>`;
        }
        document.getElementById("answerSection").appendChild(choiceContainer);
        MathJax.typeset();//for rendering math in time crunch answers
    }

    else{
        document.getElementById("answerSection").innerHTML = "<div id='answerTextareaContainer'><textarea id='answerTextarea'></textarea></div>";
    }

}