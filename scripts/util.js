function randomChoice(arr){
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

function shuffleArray(arr){
    const newArr = [];
    const used = [];
    for(let i in arr) used.push(0);

    while(newArr.length != arr.length){
        const ind = Math.floor(Math.random()*arr.length);
        if(used[ind] == 0){
            newArr.push(arr[ind]);
            used[ind] = 1;
        }
    }

    return newArr;
}

function hideLoadingScreen(){
    document.getElementById("loadingScreen").style["pointer-events"] = "none";
    setTimeout(function(){document.getElementById("loadingScreen").style["opacity"] = "0";},0);
}

function renderCheckBox(element, on){
    if(on){

        document.getElementById(element).innerHTML = `<img src="assets/svg/check.svg" style="background:var(--pretty-green)">`;
    }
    else{
        document.getElementById(element).innerHTML = `<img src="assets/svg/minus.svg" style="background:var(--light-transp-blue)">`;
    }
}

//used for when you make changes to the url variables without changing the actual page, but actually want to update the page with those changes
//window.open by itself just changes the url but the page isn't updated
function openAndReload(url){
    window.open(url,"_self")
    location.reload();
}