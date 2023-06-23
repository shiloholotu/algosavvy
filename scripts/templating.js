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

        <div id="mobileNavbar">
            <a href="index"><img src="assets/logo/alvin64_r.png"></a>
            <img id="burgerMenuIconBlack" class="lightModeSvg" src="assets/svg/menu.svg" onclick="toggleBurgerMenu()">
            <img id="burgerMenuIconWhite" class="darkModeSvg" src="assets/svg/menu.svg" onclick="toggleBurgerMenu()">
        </div>

        <div id="burgerMenu">
            <a href="contents">Tutorials</a>
            <a href="modes">Game Modes</a>
            <a href="problemset">Problemset</a>
            <a href="https://github.com/shiloholotu/algosavvy"><img src="assets/svg/github-mark-white.svg"></a>
        </div>

        <div class="navbarGap"></div>
    ` + body.innerHTML;
}

function toggleBurgerMenu(){
    if(document.getElementById("burgerMenu").style["opacity"] == 0){

        document.getElementById("burgerMenu").style["opacity"] = 1;
        document.getElementById("burgerMenu").style["pointer-events"] = "all";
        document.getElementById("burgerMenuIconBlack").setAttribute("src","assets/svg/cancel.svg");
        document.getElementById("burgerMenuIconWhite").setAttribute("src","assets/svg/cancel-white.svg");
    }

    else{
        document.getElementById("burgerMenu").style["opacity"] = 0;
        document.getElementById("burgerMenu").style["pointer-events"] = "none";
        document.getElementById("burgerMenuIconBlack").setAttribute("src","assets/svg/menu.svg");
        document.getElementById("burgerMenuIconWhite").setAttribute("src","assets/svg/menu-white.svg");
    }
}

//footer
function renderFooter(){
    const body = document.getElementsByTagName("body")[0];
    body.innerHTML += `
    <div class='bigGap'></div>
    <div id="footer">
        <p>Contact: <a href="mailto:shiloholotu@gmail.com">shiloholotu@gmail.com</a><span style="color:black;text-shadow: 0 0 2px;">🤙</span></p>
        <p>Licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0 License</a></p>
    </div>`;
}

//loading screen
function hideLoadingScreen(){
    document.getElementById("loadingScreen").style["pointer-events"] = "none";
    setTimeout(function(){document.getElementById("loadingScreen").style["opacity"] = "0";},0);
}


//check boxes
function renderCheckBox(element, on){

    if(on) document.getElementById(element).innerHTML = `<div style="background:var(--pretty-green)"></div>`;
    else document.getElementById(element).innerHTML = `<div style="background:var(--light-transp-blue)"></div>`;

}
