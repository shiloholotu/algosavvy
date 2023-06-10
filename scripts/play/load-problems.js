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
    if(type == "done"){
        displayRandomProblem();
        return;
    }
    //fetch problem file
    const response = await fetch(`problem-markdown/${type}/${problemFiles[type][ind][1]}`);
    const text = await response.text();
    let data = null;
    if(type != "snippet") data = text.split("\n[BREAK]\n");//break up file into problem statment, solution, algorithm/data structure, and time complexity
    else data = text;

    problemData[type].push(data);

    ind++;//move onto next file
    if(ind >= problemFiles[type].length){
        ind = 0;
        if(type == "easy")type = "medium";
        else if(type == "medium") type = "hard";
        else if(type == "hard") type = "advanced";
        else if(type == "advanced") type = "snippet";
        else type = "done";
    }
    loadProblems(type,ind);
}


function generateProblem(type){

    const diffNames = ["easy","medium","hard","advanced"];
    let diff = [];
    
    if(type != "error-blitz"){
        for(const i in diffNames){
            if(getPlayPreference(type,"difficulty")[i])diff.push(diffNames[i]);
        }
    }
    if(diff.length == 0) diff = diffNames;

    if(type == "solution-search"){
        const diffChoice = randomChoice(diff);
        const probChoice = randomChoice(problemData[diffChoice]);

        
        const correctAnswer = probChoice[1];
        return [probChoice, correctAnswer, diffChoice];//having correctAnswer in the return is redudant, but having it there makes sure that diffChoice is in the 3rd index, just like in all the other modes
    }

    if(type == "method-madness"){
        const diffChoice = randomChoice(diff);
        const probChoice = randomChoice(problemData[diffChoice])

        const correctAnswer = probChoice[2];
        const answerChoices = [correctAnswer];

        while(answerChoices.length < 4){
            const anotherDiffChoice = randomChoice(["easy","medium","hard","advanced"]);
            const anotherProbChoice = randomChoice(problemData[anotherDiffChoice]);
            const answerChoice = anotherProbChoice[2];
            if(answerChoices.includes(answerChoice))continue;
            answerChoices.push(answerChoice);
        }
        return [probChoice, shuffleArray(answerChoices), diffChoice];
    }

    if(type == "time-crunch"){
        const diffChoice = randomChoice(diff);
        const probChoice = randomChoice(problemData[diffChoice])

        const correctAnswer = probChoice[3];
        const answerChoices = [correctAnswer];

        while(answerChoices.length < 4){
            const anotherDiffChoice = randomChoice(["easy","medium","hard","advanced"]);
            const anotherProbChoice = randomChoice(problemData[anotherDiffChoice]);
            const answerChoice = anotherProbChoice[3];
            if(answerChoices.includes(answerChoice))continue;
            answerChoices.push(answerChoice);
        }
        return [probChoice, shuffleArray(answerChoices), diffChoice];
    }

    if(type == "error-blitz"){

        const errorType = Math.floor(Math.random()*6);
        const snippet = randomChoice(problemData["snippet"]).split("");//must be broken into array because strings are immutable
        const ogSnippet = [...snippet];//wont be messed with
        let errorExplanation = "There is no error.";

        
        if(errorType == 0){//case change
            
            //find random letter
            let ind = Math.floor(Math.random() *snippet.length);
            while(snippet[ind].toLowerCase() == snippet[ind].toUpperCase() || ind <= snippet.indexOf("\n")){
                ind = (ind + 1)% snippet.length;
            }
            

            //switch its case
            if(snippet[ind] == snippet[ind].toUpperCase()){
                snippet[ind] = snippet[ind].toLowerCase();
            }
            else snippet[ind] = snippet[ind].toUpperCase();

            //find line and word where error occured
            let wrongWord = "";
            let rightWord = "";
            let line = 0;
            let hitErrorIndex = false;

            for(let i = 0; i < snippet.length;i++){
                if(" \n+-/*%'\"`[](){}<>;.".includes(snippet[i])){
                    if(hitErrorIndex){
                        break;
                    }
                    wrongWord = "";
                    rightWord = "";
                    if(snippet[i] == "\n")line++;
                }
                else{
                    if(i == ind)hitErrorIndex = true;
                    wrongWord += snippet[i];
                    rightWord += ogSnippet[i];
                }
                
            }

            errorExplanation = `At Line ${line}: "${wrongWord}" should be "${rightWord}"`;

        }
        else if(errorType == 1){//typo

            //find random letter
            let ind = Math.floor(Math.random() *snippet.length);
            while(!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".includes(snippet[ind]) || ind <= snippet.indexOf("\n")){
                ind = (ind + 1)% snippet.length;
            }
            
            //switch with random character
            let randomChar = randomChoice("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
            while(randomChar.toLowerCase() == snippet[ind].toLowerCase()){//keep picking until the random character doesn't match the original
                randomChar = randomChoice("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
            }
            snippet[ind] = randomChar;


            //find line and word where error occured
            let wrongWord = "";
            let rightWord = "";
            let line = 0;
            let hitErrorIndex = false;

            for(let i = 0; i < snippet.length;i++){
                if(" \n+-/*%'\"`[](){}<>;.".includes(snippet[i])){
                    if(hitErrorIndex){
                        break;
                    }
                    wrongWord = "";
                    rightWord = "";
                    if(snippet[i] == "\n")line++;
                }
                else{
                    if(i == ind)hitErrorIndex = true;
                    wrongWord += snippet[i];
                    rightWord += ogSnippet[i];
                }
                
            }

            errorExplanation = `At Line ${line}: "${wrongWord}" should be "${rightWord}".`;
            
        }
        else if(errorType == 2){//missing or extra "{}()[]" brackets
            
            //find bracket
            let ind = Math.floor(Math.random() *snippet.length);
            while(!"{}()[]".includes(snippet[ind]) || ind <= snippet.indexOf("\n")){
                ind = (ind + 1)% snippet.length;
            }

            let line = 0;
            let hitErrorIndex = false;
            for(let i = 0; i < snippet.length;i++){
                if(snippet[i] == "\n"){
                    if(hitErrorIndex)break;
                    line++;
                }
                if(i == ind)hitErrorIndex = true;
            }

            if(Math.random() >= .5){//erase bracket
                errorExplanation = `Line ${line}: Missing '${snippet[ind]}' bracket.`;
                snippet[ind] = "";
            }else{//add extra bracket

                if("{}".includes(snippet[ind])){
                    snippet[ind] += "\n" + snippet[ind];
                    line++;
                } else snippet[ind] += snippet[ind];
                errorExplanation = `Line ${line}: Extra '${snippet[ind][0]}' bracket.`;
            }
            
        }
        else if(errorType == 3){//swap "{}()[]" brackets

            //find bracket
            let ind = Math.floor(Math.random() *snippet.length);
            while(!"{}()[]".includes(snippet[ind]) || ind <= snippet.indexOf("\n")){
                ind = (ind + 1)% snippet.length;
            }

            let line = 0;
            let hitErrorIndex = false;
            for(let i = 0; i < snippet.length;i++){
                if(snippet[i] == "\n"){
                    if(hitErrorIndex)break;
                    line++;
                }
                if(i == ind)hitErrorIndex = true;
            }

            //switch with random bracket
            let randomChar = randomChoice("{}()[]");
            while(randomChar == snippet[ind]){//keep picking until the random character doesn't match the original
                randomChar = randomChoice("{}()[]");
            }
            snippet[ind] = randomChar;

            errorExplanation = `Line ${line}: '${snippet[ind]}' should be '${ogSnippet[ind]}'.`;
        }

        else if(errorType == 4){//missing ';'
            //find semi colon
            let ind = Math.floor(Math.random() *snippet.length);
            while(snippet[ind] != ";" || ind <= snippet.indexOf("\n")){
                ind = (ind + 1)% snippet.length;
            }

            let line = 0;
            let hitErrorIndex = false;
            for(let i = 0; i < snippet.length;i++){
                if(snippet[i] == "\n"){
                    if(hitErrorIndex)break;
                    line++;
                }
                if(i == ind)hitErrorIndex = true;
            }

            snippet[ind] = "";
            errorExplanation = `Line ${line}: Missing ';'.`;
        }


        return [[snippet.join("")],errorExplanation];
        /*having the brackets around the snippet in the return looks redudant, but having them there helps this mode's return line up
        with the returns of the other modes, which look like this [[problem statement,...],...]
        */
    }
    

}