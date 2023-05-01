function loadMdFromUrl(){
    const url = window.location.href;
    if(url.search("#") == -1)return 0;

    const loc = url.split("#")[1].split("/");
    
    const folder = loc[0];
    const doc = loc[1];
    let section = null;
    if(loc.length == 3)section = loc[2];

    readMdFile("pages/"+folder+"/" + docs[folder][doc][0],section);
}