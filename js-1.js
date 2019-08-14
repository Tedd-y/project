var words = [["Hangman", "That game you are playing right now."], ["Teddy", "The creator of this website."], ["HTML", "Markup language for creating Web pages."], ["CSS", "Wep page styles"], ["PHP", "A very popular server scripting language."], ["JavaScript", "Make web-page dynamic without reload the web page."], ["Java", "Run 15 billion devices.\nA program can be run in Windows, Linux and Mac"], ["SoloLearn", "A company that everyone can code for fun and share."], ["Love", "What is ?\nBaby don't hurt me\nDon't hurt me\nNo more"], ["Document", "A lot of text in the a file."], ["Playground", "There school kids go to."], ["Run", "Usain bolt."], ["Code", "var hw = 'Hello World';"], ["Samsung", "A company create Phone, Tv, Monitor, SDD, Memory chip..."], ["Super Mario", "A very popular game in Nintendo 64 that have red hat."], ["Star", "Super Mario like to get."], ["Clock", "14:12 or 14pm"], ["Binary Clock", "A clock that only use 0 or 1."], ["Sword", "Link from Zelda have on the hand."], ["Girl", "Not boy but ?"], ["Boy", "Not girl but ?"], ["Female", "Other name as girl."], ["Male", "Other name as boy."], ["Smartphone", "Something you've always on you."]]



//Game Keyboard
var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//Game Memory
var select = 0
var fails = 0
var wordLeft = []




function startGame(){
    var div1 = document.getElementById("gone")
    div1.style.display = "none";
    
    newWord()
    keyboard()
}

function newWord(){
    var letterDiv = document.getElementById("theLetter")
    select = Math.floor(Math.random() * words.length)
    var guessIt = words[select][0]
    
    for(i=0; i<guessIt.length; i++){
        var x = guessIt[i].toUpperCase()
        var y = document.createElement("span")
        if(x==" "){
            y.className="space"
        }
        else{
            y.className="l"
        }
        y.innerHTML = x//change later
        y.id = "l" + i

        letterDiv.appendChild(y)
        if(x !=" "){
            if(wordLeft.indexOf(x)==-1){
                wordLeft.push(x)
            }
        }
    }
}

function keyboard(){
    var board = document.getElementById("keyboard")
    for(i=0; i<keys.length; i++){
        var b = document.createElement("span")
        b.className = "key"
        b.innerText = keys[i]
        b.onclick = function(){
            check(this)
        }
        board.appendChild(b)
    }
}

function check(b){
    //to either end or show next fail
    var x = doesExist(b.innerHTML)
    if(x){
        if(wordLeft.length==0){
            //end the game
            console.log("tamat")
        }
    }else{
        //function to show its wrong
        console.log("salah")
    }
}

function doesExist(k){
    var x = wordLeft.indexOf(k)
    if(x!= -1){
        wordLeft.splice(x,1)
        reveal(k)
        return true
    }else{
        return false
    }
}

function reveal(a){
    for(i=0; i<words[select][0].length; i++){
        if(a==words[select][0][i].toUpperCase()){
            document.getElementById("l"+i).innerText = "tes"
        }
    }
}