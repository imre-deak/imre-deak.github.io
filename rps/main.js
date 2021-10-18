const allapotok = ['rock','paper','scissors']
// allapotok.forEach(element => {
//     //console.log(element)
//     document.getElementsByClassName('bd')[0].
//     innerHTML += `<li class="${element}"">
//     <img src="${element}-512.jpg" alt=${element} width="200" height="200" id="${element}" ></li>`
// });
document.getElementsByTagName('body')[0].innerHTML += '';

let machine_score=0;
let my_score=0;
let my_choice="";
let machine_choice;

function enlargeImg(clicked_id,color) {
    img = document.getElementById(clicked_id);
    your_select=clicked_id;
    img.style.transform = "scale(1.1)";
    img.style.transition = "transform 0.50s ease";
    img.style.border=`8px solid ${color}`;
}

function resetImg(clicked_id) {
    imgreset = document.getElementById(clicked_id);
    imgreset.style.transform = "scale(1)";
    imgreset.style.transition = "transform 0.25s ease";
    imgreset.style.border="8px solid black";
}

function resetAll(){
    resetImg("scissors");
    resetImg("rock");
    resetImg("paper");
    my_choice=""
}


function clicked(clicked_id) {
    img = document.getElementById(clicked_id);
    if(my_choice!=clicked_id){
       my_choice=clicked_id;
       if(my_choice==="paper"){
           enlargeImg("paper","green");
           resetImg("scissors");
           resetImg("rock");
       }
       else if(my_choice==="rock"){
           enlargeImg("rock","green");
           resetImg("scissors");
           resetImg("paper");
        }
        else if(my_choice==="scissors"){
            enlargeImg("scissors","green");
            resetImg("rock");
            resetImg("paper");
         }

    }

    console.log(clicked_id);
}

function machineTurn() {
    console.log("Machine turn");
    machine_choice = (allapotok[Math.floor(Math.random() * 3)]);
    if(my_choice===""){
        return;
    }
    if(machine_choice===my_choice){
        enlargeImg(my_choice,"orange");
    }
    else{
        enlargeImg(machine_choice,"red");
    }
    console.log(my_choice + machine_choice);
    if(whoWins(my_choice,machine_choice)==0){
        document.getElementsByClassName("wins")[0].innerHTML = "draw";
    }
    else if(whoWins(my_choice,machine_choice)==1){
        my_score++;
        document.getElementsByClassName("wins")[0].innerHTML = "You won!";
        console.log(my_score)
        document.getElementById("you").innerHTML = `Your score: ${my_score}`;
    }
    else{
        document.getElementsByClassName("wins")[0].innerHTML = "Machine won!";
        machine_score++;
        console.log(machine_score)
        document.getElementById("machine").innerHTML = `Machine score: ${machine_score}`
    }
}

function whoWins(my_choice,machine_choice){
    if(my_choice==="rock"){
        if(machine_choice==="rock"){
            return 0;
        }
        else if(machine_choice==="paper"){
            return 2;
        }
        else{
            return 1;
        }
    }

    else if(my_choice==="paper"){
        if(machine_choice==="paper"){
            return 0;
        }
        else if(machine_choice==="scissors"){
            return 2;
        }
        else{
            return 1;
        }
    }
    else if(my_choice==="scissors"){
        if(machine_choice==="scissors"){
            return 0;
        }
        else if(machine_choice==="rock"){
            return 2;
        }
        else{
            return 1;
        }
    }
}