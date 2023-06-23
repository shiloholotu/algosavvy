let curFolder = null;
let curDoc = null;




//adds funcitonality to a tags in doc nav bar
function displayDocNavBar(){

    //previous doc
    let prevDocInd = parseInt(curDoc)-1;
    let prevDocFolder = curFolder;
    //if first doc of folder
    if(prevDocInd == -1){


        if(prevDocFolder == "easy") prevDocFolder = "introduction";
        else if(prevDocFolder == "medium") prevDocFolder = "easy";
        else if(prevDocFolder == "hard") prevDocFolder = "medium";
        else if(prevDocFolder == "advanced") prevDocFolder = "hard";
        else{
            document.getElementById("prevDocLink").style["background"] = "var(--light-transp-blue)";
            document.getElementById("prevDocLink").style["pointer-events"] = "none";
        }

        prevDocInd = docs[prevDocFolder].length-1;
    }
    document.getElementById("prevDocLink").setAttribute("href",`learn#${prevDocFolder}/${prevDocInd}`);
    document.getElementById("prevDocLink").setAttribute("onclick",`openAndReload("learn#${prevDocFolder}/${prevDocInd}"); return false`);

    //next doc
    let nextDocInd = parseInt(curDoc)+1;
    let nextDocFolder = curFolder;
    //if last doc of folder
    if(nextDocInd >= docs[nextDocFolder].length){

        nextDocInd = 0;

        if(nextDocFolder == "introduction")nextDocFolder = "easy";
        else if(nextDocFolder == "easy") nextDocFolder = "medium";
        else if(nextDocFolder == "medium") nextDocFolder = "hard";
        else if(nextDocFolder == "hard") nextDocFolder = "advanced";
        else{
            document.getElementById("nextDocLink").style["background"] = "var(--light-transp-blue)";
            document.getElementById("nextDocLink").style["pointer-events"] = "none";
        }
    }
    document.getElementById("nextDocLink").setAttribute("href",`learn#${nextDocFolder}/${nextDocInd}`);
    document.getElementById("nextDocLink").setAttribute("onclick",`openAndReload("learn#${nextDocFolder}/${nextDocInd}"); return false`);
}

//displays competion indicator at bottom of doc content preview
function displayCompletionIndicator(){
    const status = getCompletionStatus(docs[curFolder][curDoc][0]);
    const completionIndicatorImg = document.getElementById("completionIndicatorImg");
    const completionIndicatorLabel = document.getElementById("completionIndicatorLabel");
    if(status == "complete"){
        completionIndicatorLabel.textContent = "Complete";
        renderCheckBox("completionIndicator",true);

    }
    else{
        completionIndicatorLabel.textContent = "Incomplete";
        renderCheckBox("completionIndicator",false);
    }
}


function toggleCompletionIndicator(){
    if(getCompletionStatus(docs[curFolder][curDoc][0]) == "incomplete") setCompletionStatus(docs[curFolder][curDoc][0],"complete");
    else setCompletionStatus(docs[curFolder][curDoc][0],"incomplete");
    displayCompletionIndicator();
}

//adds links to headers in docView
function linkHeaders(){

    const capitalizedCurFolder = curFolder[0].toUpperCase() + curFolder.slice(1);
    document.getElementById("docContents").innerHTML = `<a href="contents">${capitalizedCurFolder}</a>`;

    const headers = document.getElementById("docView").querySelectorAll("h1, h2, h3, h4, h5, h6");
    for(i of headers){

        const link = document.createElement("a");
        link.innerHTML = "<img src='assets/svg/link.svg'>";
        link.classList.add("headerLink");
        const newUrl = "learn#" + curFolder + "/" + curDoc + "/" + i.id;
        link.setAttribute("href",newUrl);

        const blackLink = link.cloneNode(true);
        blackLink.classList.add("lightModeSvg");

        const whiteLink = link.cloneNode(true);
        whiteLink.innerHTML = "<img src='assets/svg/link-white.svg'>";
        whiteLink.classList.add("darkModeSvg");

        //add <a> tags to all headers in docView
        i.appendChild(blackLink);
        i.appendChild(whiteLink);
        //duplicate link in doc contents preview
        const docContLink = link.cloneNode(false);
        docContLink.textContent = i.textContent;
        const indent = parseInt(i.nodeName[1]);//indent based on header size
        docContLink.style["margin-left"] = `${indent*2}vw`;
        docContLink.setAttribute("onclick",`document.getElementById("${i.id}").scrollIntoView();return false`);
        document.getElementById("docContents").appendChild(docContLink);
    }

    //completion indicator
    document.getElementById("docContents").innerHTML += `
    <div>
        <div id="completionIndicator" class="checkBox"onclick="toggleCompletionIndicator()">
            <img id="completionIndicatorImg" src="assets/svg/check.svg">
        </div>
        <p id="completionIndicatorLabel">Complete</p>
    </div>
    `;

    displayCompletionIndicator();
    displayDocNavBar();
    hideLoadingScreen();

}



function loadMdFile(text,scrollTo){

    renderMd(text,"docView");

    if(scrollTo != null){
        setTimeout(function(){document.getElementById(scrollTo).scrollIntoView();},100);//to stop the scroll function from being called before the page content is rendered
    }
        
    linkHeaders();
    document.getElementById("title").innerHTML = docs[curFolder][curDoc][0];

}
async function readMdFile(location,scrollTo = null){
    const response = await fetch(location);
    const text = await response.text();
    loadMdFile(text,scrollTo);
}


function loadMdFromUrl(){
    const url = window.location.href;
    if(url.search("#") == -1)return 0;

    const loc = url.split("#")[1].split("/");
    
    const folder = loc[0];
    const doc = loc[1];
    curFolder = folder;
    curDoc = doc;
    let section = null;
    if(loc.length == 3 && loc[2] != "")section = loc[2];

    try{
        readMdFile("doc-markdown/"+folder+"/" + docs[folder][doc][1],section);
    }catch(error){
        renderMd(`# Uh Oh🫤\nWe can't find that page. **Sorry**!\n\nHere's the error: \`${error}\``,"docView");
        console.error(error);
        document.getElementById("docNavBar").style["display"] = "none";

        hideLoadingScreen();
    }
}