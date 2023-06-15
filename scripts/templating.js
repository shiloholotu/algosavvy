//navbar
function renderNavbar(){
    const body = document.getElementsByTagName("body")[0];
    body.innerHTML = `
        <div id="navbar">
            <a href="index"><h1 id="navbarLogo"><img src="assets/logo/alvin64_r.png">algosavvy</h1></a>
            <div id="navbarSide">
                <a href="contents">Tutorials</a>
                <a href="modes">Game Modes</a>
                <a href="problemset">Problemset</a>
                <a href="https://github.com/shiloholotu/algosavvy"><img src="assets/svg/github-mark-white.svg"></a>
            </div>
        </div>
        <div class="navbarGap"></div>
    ` + body.innerHTML;
}

//loading screen
function hideLoadingScreen(){
    document.getElementById("loadingScreen").style["pointer-events"] = "none";
    setTimeout(function(){document.getElementById("loadingScreen").style["opacity"] = "0";},0);
}


//check boxes
function renderCheckBox(element, on){

    if(on) document.getElementById(element).innerHTML = `<img src="assets/svg/check.svg" style="background:var(--pretty-green)">`;
    else document.getElementById(element).innerHTML = `<img src="assets/svg/minus.svg" style="background:var(--light-transp-blue)">`;

}
