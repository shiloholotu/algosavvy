


let colors = shuffleArray(["var(--pretty-red)","var(--pretty-yellow)","var(--pretty-purple)","var(--pretty-blue)"]);
            
const sp = new ScrollParallax();


if(localStorage.getItem("parallax") == "true"){
    renderCheckBox("parallaxCheckbox",true);
    sp.tracking = true;
}
else{
    renderCheckBox("parallaxCheckbox",false);
    sp.tracking = false;
}

function toggleParallax(){
    if(localStorage.getItem("parallax") == "true"){
        localStorage.setItem("parallax","false");
        renderCheckBox("parallaxCheckbox",false);
        sp.tracking = false;
    }
    else{
        localStorage.setItem("parallax","true");
        renderCheckBox("parallaxCheckbox",true);
        sp.tracking = true;
    }
}

for(let i = 1; i <= 12; i++){

    const cube = document.getElementById(`floatingWidget${i}`);
    let cubeColor = colors[(i - 1) % 4];
    if(cube.tagName == "IMG")cubeColor = "var(--pretty-green)";

    cube.style["margin-top"] = `${Math.random() * 15 * randomChoice([1,-1])}vh`;
    cube.style["background"] = cubeColor;
    cube.style["box-shadow"] = "0 0 150px " + cubeColor;

    const intensity = Math.random();
    cube.style["opacity"] = Math.max(.2,intensity);
    sp.enable(`floatingWidget${i}`,intensity);
}


colors = shuffleArray(colors);

for(let i = 13; i <= 16; i++){

    const cube = document.getElementById(`floatingWidget${i}`);
    let cubeColor = colors[(i - 1) % 4];
    if(cube.tagName == "IMG")cubeColor = "var(--pretty-green)";

    cube.style["margin-top"] = `${Math.random() *15 * randomChoice([1,-1])}vh`;
    cube.style["background"] = cubeColor;
    cube.style["box-shadow"] = "0 0 100px " + cubeColor;

    const intensity = Math.max(.2,Math.min(.5,Math.random()));
    cube.style["opacity"] = 2*intensity;
    sp.enable(`floatingWidget${i}`,intensity);
}