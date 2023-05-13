//make empty completion history if its not already there
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