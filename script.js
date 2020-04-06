console.log("hello");
var numsquares =6;
var colors = colorgenerator(numsquares); 
var squares = document.querySelectorAll(".square");
var pickedcolor = colorpicker();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent= pickedcolor;
var h1 = document.querySelector("h1");
var message =document.getElementById("message");
var resetbutton = document.querySelector("#resetbutton");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click",function(){
    easy.classList.add("gamemode");
    hard.classList.remove("gamemode");
    numsquares =3;
    var colors = colorgenerator(numsquares); 
    pickedcolor = colorpicker();
    colordisplay.textContent= pickedcolor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display= "none";
        }
    }
    h1.style.background = "rgb(78, 161, 55)";
    message.textContent="";
});
hard.addEventListener("click",function(){
    easy.classList.remove("gamemode");
    hard.classList.add("gamemode");
    numsquares =6;
    var colors = colorgenerator(numsquares); 
    pickedcolor = colorpicker();
    colordisplay.textContent= pickedcolor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display= "block";
    }
    h1.style.background = "rgb(78, 161, 55)";
    message.textContent="";
});
resetbutton.addEventListener("click",function(){
    colors = colorgenerator(numsquares);
    pickedcolor = colorpicker();
    colordisplay.textContent= pickedcolor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "rgb(78, 161, 55)";
    resetbutton.textContent="NEW GAME";
    message.textContent="";
});
for(var i = 0; i < squares.length; i++)
{
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.background;
        if(clickedcolor === pickedcolor)
        {
           message.textContent="WELL PLAYED";
           for(var i=0;i<squares.length;i++)
           {
               squares[i].style.background = pickedcolor;
           }
           h1.style.background = pickedcolor;
           resetbutton.textContent="PLAY AGAIN ?"
        }
        else
        {
            this.style.background = "rgb(44, 44, 37)";
            message.textContent="TRY AGAIN !!";
        }
    });

}
function colorpicker()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function colorgenerator(num)
{
    var arr=[];
    for(var i=0; i<num ;i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}
function randomcolor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r +", "+ g +", "+ b + ")");
}

  