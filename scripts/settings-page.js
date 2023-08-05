//color scheme
function displayColorSettings(){
    for(i of ["light","dark","system"]) renderCheckBox(`${i}SchemeBox`,false);
    renderCheckBox(`${localStorage.getItem("colorScheme")}SchemeBox`,true);
}

function setColorSetting(theme){
    localStorage.setItem("colorScheme",theme);
    displayColorSettings();
}

displayColorSettings();


//parallax
if(localStorage.getItem("parallax") == "true") renderCheckBox("parallaxCheckbox",true);
else renderCheckBox("parallaxCheckbox",false);

function toggleParallax(){
    if(localStorage.getItem("parallax") == "true"){
        localStorage.setItem("parallax","false");
        renderCheckBox("parallaxCheckbox",false);
    }
    else{
        localStorage.setItem("parallax","true");
        renderCheckBox("parallaxCheckbox",true);
    }
}



function toggleConfetti(){
    if(localStorage.getItem("confetti") == "true"){
        localStorage.setItem("confetti","false");
        renderCheckBox("confettiCheckbox",false);
    }
    else{
        localStorage.setItem("confetti","true");
        renderCheckBox("confettiCheckbox",true);
    }
}
