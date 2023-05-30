
function displayRandomProblem(){
    const problem = generateProblem(gameMode);
    document.getElementById("answerSection").innerHTML = "";
    renderMd(problem[0][0],"problemView");

    const choiceContainer = document.createElement("div");
    

    if(gameMode != "solution-search" && gameMode != "error-blitz"){
        choiceContainer.style["display"] = "flex";
        //generate answer choice buttons - solution search and error blitz are free response modes
        for(let i = 0; i < 4; i++){

            let marginStyle = "10px";
            if(i == 3){//right-most button doesn't need space to its right
                marginStyle = "0";
            }
            const choiceText = formatMath(problem[1][i]);//because timeCrunch answer choices use MathJax
            choiceContainer.innerHTML += `<button class="answerChoice" style="margin-right:${marginStyle}">${choiceText}</button>`;
        }
        document.getElementById("answerSection").appendChild(choiceContainer);
        MathJax.typeset();
    }

}