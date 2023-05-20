let converter = new showdown.Converter();



function formatSpaces(input){
    return input.replace("\n\n","\n<br>");
}


function mdToHTML(text){
    text = formatSpaces(text);
    return converter.makeHtml(text);
}
