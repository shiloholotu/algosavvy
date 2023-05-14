let curFolder = null;
let curDoc = null;

//displays competion indicator at bottom of doc content preview
function displayCompletionIndicator(){
    const status = getCompletionStatus(docs[curFolder][curDoc][0]);
    const completionIndicatorImg = document.getElementById("completionIndicatorImg");
    const completionIndicatorLabel = document.getElementById("completionIndicatorLabel");
    if(status == "complete"){
        completionIndicatorImg.style["background"] = "rgb(144 238 144)";
        completionIndicatorImg.style["float"] = "right";
        completionIndicatorImg.setAttribute("src","assets/svg/check.svg");
        completionIndicatorLabel.textContent = "Complete";

    }
    else{
        completionIndicatorImg.style["background"] = "var(--light-border-color)";
        completionIndicatorImg.style["float"] = "left";
        completionIndicatorImg.setAttribute("src","assets/svg/minus.svg");
        completionIndicatorLabel.textContent = "Incomplete";
    }
}

function toggleCompletionIndicator(){
    if(getCompletionStatus(docs[curFolder][curDoc] == "incomplete")) setCompletionStatus(docs[curFolder][curDoc],"complete");
    else setCompletionStatus(docs[curFolder][curDoc],"incomplete");
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

        //add <a> tags to all headers in docView
        i.appendChild(link);
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
        <div id="completionIndicator">
            <img id="completionIndicatorImg" src="assets/svg/check.svg">
        </div>
        <p id="completionIndicatorLabel">Complete</p>
    </div>
    `;

    displayCompletionIndicator();

}



function loadMdFile(text,scrollTo){
	const r = mdToHTML(text);
	document.getElementById("docView").innerHTML = r[0];
	eval(r[1]);//😱😱
    console.log(scrollTo);
    if(scrollTo != null){
        setTimeout(function(){document.getElementById(scrollTo).scrollIntoView();},100);//to stop the scroll function from being called before the page content is rendered
    }
        
    linkHeaders();

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

    readMdFile("learn-docs/"+folder+"/" + docs[folder][doc][1],section);
}