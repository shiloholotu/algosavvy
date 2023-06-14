const modeInfo = {
    "solution-search": ["HEY!","Solution Search", "Write a solution in plain english"],
    "method-madness": ["o o o","Method Madness", "Choose the best DS/A for a problem"],
    "time-crunch": ["O(?)","Time Crunch", "Determine the time complexity of a scenario"],
    "error-blitz": ["! ! !","Error Blitz", "Spot the potential error"]
};

const prefDetails = {
    "difficulty": ["Difficulty",["Easy","Medium","Hard","Advanced"]],
    "problemInfo": ["Problem Info",["Problem Statement","Solution","Method","Time Compexltiy"]],
    "language":["Language",["C++","Java"]]
};


function generatePrefenceCheckboxes(mode,preference){

    let html = `
    <div class="gameModeSettings">
        <h3>${prefDetails[preference][0]}</h3>
    `;

    const checkboxes = prefDetails[preference][1];
    const modePref = getPlayPreference(mode,preference);
    for(const i in checkboxes){

        let imgAttr = "src='assets/svg/minus.svg' style='background:var(--light-transp-blue)'";
        if(modePref[i]) imgAttr = "src='assets/svg/check.svg' style='background:var(--pretty-green)'";

        html += `
        <div style="display:flex;align-items:middle;margin-top:7px;margin-bottom:7px">
            <div id="${mode}-${preference}-${i}" class="checkBox" onclick="togglePreference('${mode}','${preference}',${i})">
                <img ${imgAttr}>
            </div>
            <p>${checkboxes[i]}</p>
        </div>`;
    }

    html += "</div>";

    return html;
}

function gameModePopup(mode){
    let html = "";
    let bgColor = "var(--pretty-purple)";

    if(mode == "method-madness") bgColor = "var(--pretty-yellow)";
    if(mode == "time-crunch") bgColor = "var(--pretty-green)";
    if(mode == "error-blitz") bgColor = "var(--pretty-red)";

    html += `
    <div style="display:flex;align-items: center;">
        <div class="gameModeIcon" style="background:${bgColor}"><p>${modeInfo[mode][0]}</p></div>

        <div>
            <h2>${modeInfo[mode][1]}</h2>
            <p class="gameModeDesc">${modeInfo[mode][2]}</p>
        </div>

    </div>
    `;


    //generate difficulty input
    if(mode != 'error-blitz') html += generatePrefenceCheckboxes(mode,"difficulty");

    //generate problem info input
    if(mode != 'error-blitz') html += generatePrefenceCheckboxes(mode,"problemInfo");
    
    //generate language input
    else html += generatePrefenceCheckboxes(mode,"language");

    html += `<button id="restoreButton" onclick="restoreDefault('${mode}');gameModePopup('${mode}')">Restore to default</button>`;

    html += `<a href='play#${mode}'>Play!</a>`;

    document.getElementById("popupContent").innerHTML = html;

    document.getElementById("gameModePopup").style["opacity"] = 1;
    document.getElementById("gameModePopup").style["pointer-events"] = "all";

    document.getElementById("popupBackdrop").style["opacity"] = 1;
    document.getElementById("popupBackdrop").style["pointer-events"] = "all";
    
}

function hidePopup(){
    document.getElementById("gameModePopup").style["opacity"] = 0;
    document.getElementById("gameModePopup").style["pointer-events"] = "none";

    document.getElementById("popupBackdrop").style["opacity"] = 0;
    document.getElementById("popupBackdrop").style["pointer-events"] = "none";
}

function togglePreference(mode,preference,ind){
    const curVal = getPlayPreference(mode,preference)[ind];
    let newPref = getPlayPreference(mode,preference);
    newPref[ind] = !curVal;
    renderCheckBox(`${mode}-${preference}-${ind}`,newPref[ind]);
    setPlayPreference(mode,preference,newPref);
}