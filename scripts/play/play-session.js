
function displayRandomProblem(){
    const problem = generateProblem(gameMode);
    document.getElementById("answerSection").innerHTML = "";
    renderMd(problem[0][0],"problemView");
    document.getElementById("diffIndicator").innerHTML = problem[2];

    const choiceContainer = document.createElement("div");
    

    if(gameMode != "solution-search" && gameMode != "error-blitz"){
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

}