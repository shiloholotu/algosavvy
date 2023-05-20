let converter = new showdown.Converter();


//makes in line MathJax a little easier
//uses $...$ instead of \(...\)
function formatMath(input){
    let dollarSignCount = 0;
    let output = "";
    for(let c of input){
        if(c == "$"){
            if(dollarSignCount % 2 == 0)output += "\\\\(";
            else output += "\\\\)";
            dollarSignCount++;
        }
        else output += c;
        
    }
    return output;
}


function mdToHTML(text){
    text = formatMath(text);
    return converter.makeHtml(text);
}
