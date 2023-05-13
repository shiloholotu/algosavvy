//adds links to headers in docView
function linkHeaders(){

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
        const indent = parseInt(i.nodeName[1]) - 1;//indent based on header size
        docContLink.style["margin-left"] = `${indent*5}px`;
        document.getElementById("docContents").appendChild(docContLink);
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