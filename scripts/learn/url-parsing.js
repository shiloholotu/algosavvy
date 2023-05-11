let curFolder = null;
let curDoc = null;

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