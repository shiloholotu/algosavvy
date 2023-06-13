async function viewProblem(folder,ind){
    const response = await fetch(`problem-markdown/${folder}/${problemFiles[folder][ind][1]}`);
    const text = await response.text();
    renderMd(text,"problemView");
    hideLoadingScreen();
}