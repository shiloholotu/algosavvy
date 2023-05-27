function randomChoice(arr){
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

//used for when you make changes to the url variables without changing the actual page, but actually want to update the page with those changes
//window.open by itself just changes the url but the page isn't updated
function openAndReload(url){
    window.open(url,"_self")
    location.reload();
}