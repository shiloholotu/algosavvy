
if(localStorage.getItem("colorScheme") == "system"){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("darkMode").setAttribute("href","styles/dark.css");
    }
}
else if(localStorage.getItem("colorScheme") == "dark"){
    document.getElementById("darkMode").setAttribute("href","styles/dark.css");
}