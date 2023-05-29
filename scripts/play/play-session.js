function displayRandomProblem(){
    const problem = generateProblem(gameMode);
    document.getElementById("answerSection").innerHTML = "";
    renderMd(problem[0][0],"problemView");

    const choiceContainer = document.createElement("div");
    

    if(gameMode != "solution-search" && gameMode != "error-blitz"){
        choiceContainer.style["display"] = "flex";
        for(let i = 0; i < 4; i++){
            let marginStyle = "10px";
            if(i == 3){
                marginStyle = "0";
            }
            choiceContainer.innerHTML += `<button class="answerChoice" style="margin-right:${marginStyle}">${problem[1][i]}</button>`;
        }
        document.getElementById("answerSection").appendChild(choiceContainer);
    }

}