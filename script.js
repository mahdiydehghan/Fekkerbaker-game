let $=document
let button=$.getElementById('button')
let text=$.getElementById('txt')
let error=$.getElementById('error')
let pic=$.getElementById('pic')
let text1=$.getElementById('text1')
let text2=$.getElementById('text2')
let text3=$.getElementById('text3')
let pic2=$.getElementById('pic2')
let enternumber1=$.getElementById('enternumber1')
let btncheck=$.getElementById('btncheck')
let toptimer=$.getElementById('timer')
let gride=$.getElementById('gride')
let errorinput2=$.getElementById('errorr')
let numberOfGamesPlayedID=$.getElementById('numberOfGamesPlayedID')
let valplayer=$.getElementById('valplayer')
let firstcol=$.getElementById('firstcol')
let secondcol=$.getElementById('secondcol')
let thirdcol=$.getElementById('thirdcol')
let fourthcol=$.getElementById('fourthcol')
let createRand=Math.floor(Math.random()*11)
let array=[]
let arrayrandom=[]
let countrepet=0
let numberOfGamesPlayed=0
let counterPluse=0
let arraygetnumber=[]
let arraycharacter=[]
let countcharacter=0
let valTxt=text.value
let countgame=false
let winLose=$.getElementById('winLose')
function key(){
    if(text.value.length<3){
        error.innerHTML='The number of letters must be more than 4 letters!' 
        error.style.color='red'
    }
    else{
        error.innerHTML='You are allowed to play :)' 
        error.style.color='green'
    }
}
////////////////Non-repetition of random numbers
while(arrayrandom.length < 4){
    let createRand=Math.floor(Math.random()*10)
    for(let i=0 ; i<=arrayrandom.length ;i++){
        if(createRand==arrayrandom[i]){
            countrepet++
        }
    }
    if(countrepet<=0){
        arrayrandom.push(createRand)
    }
    else{
        countrepet=0
    }
}
// console.log(arrayrandom);
button.addEventListener("click", function(){ 
    if(text.value.length>3){
        valplayer.innerHTML='player : '+valTxt
        button.style.display='none'
        text.style.display='none'
        error.style.display='none'
        pic.style.display='none'
        text1.style.display='none'
        text2.style.display='none'
        text3.style.display='none'
        pic2.style.display='inline'
        enternumber1.style.display='inline'
        btncheck.style.display='inline'
        toptimer.style.display='inline'
        valplayer.style.display='inline'
        btncheck.addEventListener("click",function(){
            let showval=enternumber1.value
            if(showval.length!=4){       
                errorinput2.style.display='inline'
                errorinput2.innerHTML='Enter 4 numbers!' 
                errorinput2.style.color='red'
                setTimeout(function(){
                    errorinput2.style.display='none'
                },3000)
            }
            else if(isNaN(showval)==true){
                errorinput2.style.display='inline'
                errorinput2.innerHTML='Enter Numbers!' 
                errorinput2.style.color='red'
                setTimeout(function(){
                    errorinput2.style.display='none'
                },3000)
            }
            else{
                gride.style.display='grid'
                for(let i=0 ; i<4 ;i++){
                    if(showval[i]==arrayrandom[i]){
                        arraycharacter.push('+')
                        counterPluse++
                        firstcol.style.backgroundColor='green'
                        }
                    else{
                        for(let j=0 ; j<arrayrandom.length ;j++){
                            if(showval[i]==arrayrandom[j]){
                                countcharacter++
                            }
                        }
                        if(countcharacter==0){
                            arraycharacter.push('-')
                        }
                        else{
                            arraycharacter.push('*')
                        }
                    }
                    countcharacter=0
                }
                if(arraycharacter[0]=='+'){
                    firstcol.style.backgroundColor="green";
                }
                else if(arraycharacter[0]=='*'){
                    firstcol.style.backgroundColor="yellow";
                }
                else{
                    firstcol.style.backgroundColor="red";
                }
                if(arraycharacter[1]=='+'){
                    secondcol.style.backgroundColor="green";
                }
                else if(arraycharacter[1]=='*'){
                    secondcol.style.backgroundColor="yellow";
                }
                else{
                    secondcol.style.backgroundColor="red";
                }
                if(arraycharacter[2]=='+'){
                    thirdcol.style.backgroundColor="green";
                }
                else if(arraycharacter[2]=='*'){
                    thirdcol.style.backgroundColor="yellow";
                }
                else{
                    thirdcol.style.backgroundColor="red";
                }
                if(arraycharacter[3]=='+'){
                    fourthcol.style.backgroundColor="green";
                }
                else if(arraycharacter[3]=='*'){
                    fourthcol.style.backgroundColor="yellow";
                }
                else{
                    fourthcol.style.backgroundColor="red";
                }
                // console.log(arraycharacter);
                arraycharacter=[]
                if(counterPluse==4){
                    numberOfGamesPlayed++
                    countgame=true
                }
                else{
                    numberOfGamesPlayed++
                    counterPluse=0
                }
            }
        })
        let min=1
        let sec=0
        let time=setInterval(function(){
            toptimer.innerHTML=min+":"+sec
            if(min>0){
                min--
                sec=60
            }
            if(min==0 && sec==0){
                clearInterval(time)
                numberOfGamesPlayedID.innerHTML=' Score of '+valTxt+ ' : ' + numberOfGamesPlayed
                gride.style.display='none'
                toptimer.style.color='red'
                btncheck.disabled=true
                enternumber1.disabled=true
                numberOfGamesPlayedID.style.display='inline'
                valplayer.style.display='none'
                winLose.innerHTML='You lost'
                winLose.style.color='red'
                enternumber1.value=''
            }
            if(countgame){
                clearInterval(time)
                winLose.innerHTML='You Won'
                winLose.style.color='green'
                btncheck.disabled=true
                enternumber1.disabled=true
                gride.style.display='none'
                numberOfGamesPlayedID.innerHTML=' Score of '+valTxt+ ' : ' + numberOfGamesPlayed
                numberOfGamesPlayedID.style.display='inline'
                toptimer.style.color='green'
                enternumber1.value=''
                valplayer.style.display='none'
            }
            sec--
        },1000)
    }
    else{
        error.innerHTML='Please enter your name!' 
        error.style.color='red'
    }
});