//tutorial completion history
if(localStorage.getItem("completionHistory") == null){
    const completionHistory = {};
    localStorage.setItem("completionHistory",JSON.stringify(completionHistory));
}

function getCompletionStatus(title){
    let completionHistory = JSON.parse(localStorage.getItem("completionHistory"));
    if(completionHistory[title] == null)completionHistory[title] = "incomplete";
    localStorage.setItem("completionHistory",JSON.stringify(completionHistory));
    return completionHistory[title];
}

function setCompletionStatus(title,status){
    let completionHistory = JSON.parse(localStorage.getItem("completionHistory"));
    completionHistory[title] = status;
    localStorage.setItem("completionHistory",JSON.stringify(completionHistory));
}

//game mode preferences

const defaultPrefs = {
    "solution-search":{
        //what part of the problem is shown
        "problemInfo":[true,false,false,false],//[statement, solution, method, time complexity]
        "difficulty":[true,true,true,true]//[easy, medium, hard, advanced]
    },
    "method-madness":{ 
        "problemInfo":[true,false,false,false],
        "difficulty":[true,true,true,true]
    },
    "time-crunch":{
        "problemInfo":[true,true,false,false],
        "difficulty":[true,true,true,true]
    },
    "error-blitz":{
        "language":[true,false]//[c++,java]
    }
};

if(localStorage.getItem("playPreferences") == null){
    const playPreferences = defaultPrefs;
    localStorage.setItem("playPreferences",JSON.stringify(playPreferences));
}

function restoreDefault(mode){
    const playPreferences = JSON.parse(localStorage.getItem("playPreferences"));
    playPreferences[mode] = defaultPrefs[mode];
    localStorage.setItem("playPreferences",JSON.stringify(playPreferences));
}

function setPlayPreference(mode,preference, value){
    const playPreferences = JSON.parse(localStorage.getItem("playPreferences"));
    playPreferences[mode][preference] = value;
    localStorage.setItem("playPreferences",JSON.stringify(playPreferences));
}

function getPlayPreference(mode,preference){
    try{
        const playPreferences = JSON.parse(localStorage.getItem("playPreferences"));
        return playPreferences[mode][preference];  
    }
    catch(error){
        console.log("There was an error trying to access a game mode preference, so we're setting the current preferences of that game mode to the defaults to see if that fixes it. This usually happens when the local storage variables for the game mode settings aren't up to date. If you still see an error then...erm...sorry");
        console.log(`Error: ${error}`);
        restoreDefault(mode);
        return playPreferences[mode][preference];
    }
     
}