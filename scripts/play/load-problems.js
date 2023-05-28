const problemData = {
    "easy":[],
    "medium":[],
    "hard":[],
    "advanced":[],
    "snippet":[]
};



/*there are really 2 types of problems: 
 - full problems, which can be broken into easy, medium, and hard, and are used by solution search, method madness, and time crunch
 - code snippets, which are used by error blitz
 */
async function loadProblems(type = "easy", ind = 0){
    console.log(`${type}:${ind}`);
    if(type == "Done"){
        console.log("Done!");
        return;
    }
    const response = await fetch(problemFiles[type][ind]);
    const text = await response.text();
    let data = null;
    if(type != "snippet") data = text.split("\n[BREAK]\n");
    else data = text;

    problemData[type].push(data);

    ind++;//move onto next file
    if(ind >= problemFiles[type].length){
        ind = 0;
        if(type == "easy")type = "medium";
        else if(type == "medium") type = "hard";
        else if(type == "hard") type = "advanced";
        else if(type == "advanced") type = "snippet";
        else type = "Done";
    }
    loadProblems(type,ind);
}


function generateProblem(type, diff = ["easy","medium","hard","advanced"]){

    if(type == "solutionSearch"){
        const diffChoice = randomChoice(diff);
        const probChoice = randomChoice(problemData[diffChoice])
        
        const correctAnswer = probChoice[1]
        return [probChoice, correctAnswer];
    }

    if(type == "methodMadness"){
        const diffChoice = randomChoice(diff);
        const probChoice = randomChoice(problemData[diffChoice])

        const correctAnswer = probChoice[2];
        const answerChoices = [correctAnswer];

        while(answerChoices.length < 4){
            const anotherDiffChoice = randomChoice(["easy","medium","hard","advanced"]);
            const anotherProbChoice = randomChoice(problemData[anotherDiffChoice]);
            const answerChoice = anotherProbChoice[2];
            //if(answerChoices.includes(answerChoice))continue;
            answerChoices.push(answerChoice);
        }
        return [probChoice, answerChoices];
    }

    if(type == "timeCrunch"){
        const diffChoice = randomChoice(diff);
        const probChoice = randomChoice(problemData[diffChoice])

        const correctAnswer = probChoice[3];
        const answerChoices = [correctAnswer];

        while(answerChoices.length < 4){
            const anotherDiffChoice = randomChoice(["easy","medium","hard","advanced"]);
            const anotherProbChoice = randomChoice(problemData[anotherDiffChoice]);
            const answerChoice = anotherProbChoice[3];
            //if(answerChoices.includes(answerChoice))continue;
            answerChoices.push(answerChoice);
        }
        return [probChoice, answerChoices];
    }

    if(type == "errorBlitz"){
        //i'll figure this out later
    }
    

}