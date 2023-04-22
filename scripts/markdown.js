let converter = new showdown.Converter();
let text = `
![zoomread](https://shiloholotu.github.io/zoomread/res/slides/wave.png)
# **zoomread**

A unique way to improve reading speed, comprehension, and memory!
You can visit the website right now at [shiloholotu.github.io/zoomread](https://shiloholotu.github.io/zoomread)

ZoomRead was created by Ifedolapo Shiloh Olotu and was the winner of the 2022 Congressional App Challenge in Texas District 7.
The web app allows users to read and then quiz themselves on passages using various reading and quizzing modes.


## read modes
When reading a passage, the user can use the **Free-Read** mode, which allows the users to read at their own pace with a timer and WPM(Words-Per-Minute) tracker,

or they can use the **Speed-Read** mode, where the user can read at a set WPM to put their skills to the test!


## quiz modes
When quizzing themselves on a passage, the user has 4 modes for quizzing: **Summarize, Fill-In-The-Blank, Imposter, and Timeline**.

In the Summarize mode, the user can test their memory by trying their best to summarize the passage read.

In the Fill-In-The-Blank mode, the user is tested through unique algorithm-generated fill-in-the-blank questions.

In the Imposter mode, the user is presented with 2 versions of the same sentence and must discern which is the correct one.

And finally, in the Timeline mode, the user is presented with 3 sentences which they must rearrange into the correct order.

ZoomRead aims to be a one-stop-shop for all your reading needs! It utilizes various reading and quizzing modes to build up your reading speed and comprehension. Happy reading!


\`\`\`cpp
#include <bits/stdc++.h>


using namespace std;
typedef vector<int> vi;
typedef vector<string> vs;
typedef vector<char> vc;
typedef long long lint;
typedef vector<long long> vli;
typedef pair<int,int> pi;
typedef set<int> si;


#define forn(i, n) for (int i = 0; i < int(n); i++)
#define endl '\n'

/*
int main(){
    freopen("hps.in", "r", stdin);
	// the following line creates/overwrites the output file
	freopen("hps.out", "w", stdout);


}
*/
\`\`\``;




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
        let suffix = "";//what will be added to end of line
        
        if(input[i] == ""){
            allMD += "<br>\n";
            continue;
        }
        
        //every character
        for(let j = 0; j < input[i].length;j++){
            let char = input[i][j];
            
            
           
            
            
            //multiline code block
            if(j < input[i].length-2 && input[i].substring(j,j+3) == "```"){

                let mode = input[i].split("```")[1];
                let ind = i+1; 
                let codeStr = "";
                
                
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
                    
                    allMD += `<div class='multiCodeBlock'>${codeStr.replaceAll("\n","<br>").replaceAll("\\\\","\\")}</div>`;
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
                
                if(!warning3){
                    let warningTitle = input[i].split("!!!!")[1];
                    line = `<div class="warning3"><h3><img class="warningIcon" src='assets/svg/warning.svg' align='top'> ${warningTitle}</h3>`;
                    warning3 = !warning3;
                    break;
                }
                
                warning3 = !warning3;
                line = "</div>";
                break;
                
            }
            
                     
            //warning 2
            if(j < input[i].length-2 && input[i].substring(j,j+3) == "!!!" && j == 0){
                if(!warning2){
                    let warningTitle = input[i].split("!!!")[1];
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
                    let warningTitle = input[i].split("!!")[1];
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

let r = mdToHTML(text);
document.getElementById("test").innerHTML = r[0];
eval(r[1]);

