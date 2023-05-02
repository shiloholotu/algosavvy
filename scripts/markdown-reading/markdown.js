let converter = new showdown.Converter();


//adds extra markdown syntax for: codeMirror code editors, warnings, line breaks, etc.
function extraMD(input){
    input = input.split("\n");
    let allMD = "";
    
    //will create all code mirror editors
    let editorCalls = "";
    //keeps track of code editors
    let codeEditors = 0;
    
    
    //rules
    let warning1 = false;
    let warning2 = false;
    let warning3 = false;
    
    
    

    
    
    //every line
    for(let i = 0; i < input.length; i++){
        
        
        
        
        let line = "";
        
        if(input[i] == ""){
            allMD += "<br>\n";
            continue;
        }
        
        //every character
        for(let j = 0; j < input[i].length;j++){
            let char = input[i][j];
            
            
           
            
            
            //multiline code block
            if(j < input[i].length-2 && input[i].substring(j,j+3) == "```"){

                let mode = input[i].split("```")[1];//gets the languange
                let ind = i+1;//next line
                let codeStr = "";
                
                //parse through markdown until reaching end of block
                while(ind < input.length && input[ind] != "```"){
                    codeStr += input[ind] + "\n";
                    ind++;
                }
                
                //remove last \n
                codeStr = codeStr.substring(0,codeStr.length-1).replaceAll("\\","\\\\");//when initalizing the codemirror, the any "\n" will be read as a line break, so they must be replaced
                i = ind;
                
                
                
                if(mode == "cpp"){
                    allMD += `<div id="editor${codeEditors}"></div>`
                    editorCalls += `

var myCodeMirror = CodeMirror(document.getElementById("editor${codeEditors}"),{
    mode: "text/x-c++src",
    readOnly:true,
    value: \`${codeStr}\`
})

`;
                }
                
                else if(mode == "java"){
                    allMD += `<div id="editor${codeEditors}"></div>`
                    editorCalls += `

var myCodeMirror = CodeMirror(document.getElementById("editor${codeEditors}"),{
    mode: "text/x-java",
    readOnly:true,
    value: \`${codeStr}\`
})

`;
                }
                
                else if(mode == "py"){
                    allMD += `<div id="editor${codeEditors}"></div>`
                    editorCalls += `

var myCodeMirror = CodeMirror(document.getElementById("editor${codeEditors}"),{
    mode: "text/x-python",
    readOnly:true,
    value: \`${codeStr}\`
})

`;
                }
                
                else{
                    
                    allMD += `<div class='multiCodeBlock'><pre>${codeStr.replaceAll("\n","<br>").replaceAll("\\\\","\\")}<pre></div>`;
                    line = "";
                }
                codeEditors++;
                
                break;
            }
            
            //single line code block
            if(char == "`"){
                //iterate through line until reaching the ending "`"; doing this to prevent styling within code lines
                let ind = j+1;
                let codeLine = "";
                while(ind < input[i].length && input[i][ind] != '`'){
                    codeLine += input[i][ind];
                    ind++;
                }
                
                line += `<span class='singleCodeBlock'>${codeLine}</span>`;
                //jump to end of code line
                j = ind;
                continue;
                
            }
            
            

            //warning 3
            if(j < input[i].length-3 && input[i].substring(j,j+4) == "!!!!" && j == 0){
                
                //if this is the start of the warning block
                if(!warning3){
                
                    let warningTitle = converter.makeHtml(input[i].split("!!!!")[1]);//get parse the title
                    line = `<div class="warning3"><h3><img class="warningIcon" src='assets/svg/warning.svg' align='top'> ${warningTitle}</h3>`;
                    warning3 = !warning3;
                    break;
                }
                //if this is the end of the warning block
                warning3 = !warning3;
                line = "</div>";
                break;
                
            }
            
                     
            //warning 2
            if(j < input[i].length-2 && input[i].substring(j,j+3) == "!!!" && j == 0){
                if(!warning2){
                    let warningTitle = converter.makeHtml(input[i].split("!!!")[1]);//get parse the title
                    line = `<div class="warning2"><h3><img class="warningIcon" src='assets/svg/warning.svg' align='top'> ${warningTitle}</h3>`;
                    warning2 = !warning2;
                    break;
                }
                
                warning2 = !warning2;
                line = "</div>";
                break;
            }
            
            //warning 1
            if(j < input[i].length-1 && input[i].substring(j,j+2) == "!!" && j == 0){
                if(!warning1){
                    let warningTitle = converter.makeHtml(input[i].split("!!")[1]);//get parse the title
                    line = `<div class="warning1"><h3><img class="warningIcon" src='assets/svg/info.svg' align='center'> ${warningTitle}</h3>`;
                    warning1 = !warning1;
                    break;
                }
                
                warning1 = !warning1;
                line = "</div>";
                break;
            }
            
            
            line += char;
        }

        allMD += line + "\n";
    }
    
    
    
    
    return [allMD, editorCalls];
    //editorCalls are what initialize the codeMirror editors and will be called through eval(BE CAREFUL!!!!)
}


function mdToHTML(text){
    let returns = extraMD(text);
    let html = converter.makeHtml(returns[0]);
    return [html,returns[1]];
}
