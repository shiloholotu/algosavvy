function displayRandomProblem(){
    const problem = generateProblem(gameMode);
    renderMd(problem[0][0],"problemView");

}