
function loadMdFile(text,scrollTo){
	const r = mdToHTML(text);
	document.getElementById("pageView").innerHTML = r[0];
	eval(r[1]);//😱😱
    if(scrollTo != null)document.getElementById(scrollTo).scrollIntoView();
}
async function readMdFile(location,scrollTo = null){
    const response = await fetch(location);
    const text = await response.text();
    loadMdFile(text,scrollTo);
}