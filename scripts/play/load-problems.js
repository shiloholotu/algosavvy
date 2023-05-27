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
    const response = await fetch(gameProblemFiles[type][ind]);
    const text = await response.text();
    let data = null;
    if(type != "snippet") data = text.split("\n[BREAK]\n");
    else data = text;

    problemData[type].push(data);

    ind++;//move onto next file
    if(ind >= gameProblemFiles[type].length){
        ind = 0;
        if(type == "easy")type = "medium";
        else if(type == "medium") type = "hard";
        else if(type == "hard") type = "advanced";
        else if(type == "advanced") type = "snippet";
        else type = "Done";
    }
    loadProblems(type,ind);
}