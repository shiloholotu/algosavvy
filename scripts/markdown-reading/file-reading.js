//adds links to headers in docView
function linkHeaders(){
    const headerTags = ["h1","h2","h3","h4","h5","h6"];
    for(i of headerTags){
        const allHeaders = document.getElementById("docView").getElementsByTagName(i);
        for(let j = 0; j < allHeaders.length; j++){
            const link = document.createElement("a");
            link.appendChild(document.createTextNode("[LINK]"));
            let newUrl = window.location.href.split("#")[0] + "#";
            newUrl += curFolder + "/" + curDoc + "/" + allHeaders[j].id;
            link.setAttribute("href",newUrl);
            allHeaders[j].appendChild(link);
        }
    }
}

function loadMdFile(text,scrollTo){
	const r = mdToHTML(text);
	document.getElementById("docView").innerHTML = r[0];
	eval(r[1]);//😱😱
    if(scrollTo != null)document.getElementById(scrollTo).scrollIntoView();
    linkHeaders();

}
async function readMdFile(location,scrollTo = null){
    const response = await fetch(location);
    const text = await response.text();
    loadMdFile(text,scrollTo);
}