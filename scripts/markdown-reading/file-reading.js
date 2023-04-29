
function loadMdFile(text){
	const r = mdToHTML(text);
	document.getElementById("pageView").innerHTML = r[0];
	eval(r[1]);//😱😱
}
async function readMdFile(location){
    const response = await fetch(location);
    const text = await response.text();
    loadMdFile(text);
}