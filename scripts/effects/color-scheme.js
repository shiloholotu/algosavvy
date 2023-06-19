
if(localStorage.getItem("colorScheme") == "system"){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("darkMode").setAttribute("href","styles/dark.css");
        document.getElementById("codeStyle").setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark-reasonable.min.css");
    }
}
else if(localStorage.getItem("colorScheme") == "dark"){
    document.getElementById("darkMode").setAttribute("href","styles/dark.css");
    document.getElementById("codeStyle").setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark-reasonable.min.css");
}