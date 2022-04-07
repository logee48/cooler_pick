//score count
var count = 0;
document.getElementById("score").innerHTML = count;

//timer count start point
var timer_count = 29;

//abcd function will call when u click on 1st tilee
document.getElementById("one").addEventListener("click", abcd);
document.getElementById("two").addEventListener("click", abcd1);
document.getElementById("three").addEventListener("click", abcd2);
document.getElementById("four").addEventListener("click", abcd3);

//ref color bar
const label_color = ["red", "black", "green", "orange", "blue"];

//four tile colors
const colo = ["red", "blue", "yellow", "green", "black"];    /*need to work on same random number error*/
const colo1 = ["blue", "yellow", "green", "black", "orange"];
const colo2 = ["yellow", "green", "black", "orange", "blue"];
const colo3 = ["green", "black", "orange", "blue", "yellow"];

function abcd()
{
    // random number generator from 0 through 5
    let x = Math.floor(Math.random() * 5);
    
    //checking if tile and color bar has same color
    if((document.getElementById("lable").style.backgroundColor) == (document.getElementById("one").style.backgroundColor))
    {
        document.getElementById("lable").style.backgroundColor = label_color[x];
        document.getElementById("one").style.backgroundColor = colo[x];
        document.getElementById("two").style.backgroundColor = colo1[x];
        document.getElementById("three").style.backgroundColor = colo2[x];
        document.getElementById("four").style.backgroundColor = colo3[x];
        count++;
    }   
    document.getElementById("score").innerHTML = count;
}
function abcd1()
{
    let x = Math.floor(Math.random() * 5);
    
    if((document.getElementById("lable").style.backgroundColor) == (document.getElementById("two").style.backgroundColor))
    {
        document.getElementById("lable").style.backgroundColor = label_color[x];
        document.getElementById("one").style.backgroundColor = colo[x];
        document.getElementById("two").style.backgroundColor = colo1[x];
        document.getElementById("three").style.backgroundColor = colo2[x];
        document.getElementById("four").style.backgroundColor = colo3[x];
        count++;
    }   
    document.getElementById("score").innerHTML = count;
}
function abcd2()
{
    let x = Math.floor(Math.random() * 5);
    
    if((document.getElementById("lable").style.backgroundColor) == (document.getElementById("three").style.backgroundColor))
    {
        document.getElementById("lable").style.backgroundColor = label_color[x];
        document.getElementById("one").style.backgroundColor = colo[x];
        document.getElementById("two").style.backgroundColor = colo1[x];
        document.getElementById("three").style.backgroundColor = colo2[x];
        document.getElementById("four").style.backgroundColor = colo3[x];
        count++;
    }   
    document.getElementById("score").innerHTML = count;
}
function abcd3()
{
    let x = Math.floor(Math.random() * 5);
    
    if((document.getElementById("lable").style.backgroundColor) == (document.getElementById("four").style.backgroundColor))
    {
        document.getElementById("lable").style.backgroundColor = label_color[x];
        document.getElementById("one").style.backgroundColor = colo[x];
        document.getElementById("two").style.backgroundColor = colo1[x];
        document.getElementById("three").style.backgroundColor = colo2[x];
        document.getElementById("four").style.backgroundColor = colo3[x];
        count++;
    }   
    document.getElementById("score").innerHTML = count;
}
//this will run timerfun every 1second
setInterval(timerfun, 1000);
function timerfun()
{
    document.getElementById("timer").innerHTML = timer_count;
    timer_count-=1;
    //if time run out
    if(timer_count<0)
    {
        // it will clear the whole screen
        document.getElementById("oneforall").style.display = "none";
        //display screen after time run-out
        document.getElementById("scoredisplay").style.display = "block";
        document.getElementById("scoredisplay").innerHTML = "your score : "+count;
    }
}