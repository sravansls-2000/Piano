
var numberOfButtons = document.querySelectorAll(".piano-keys").length;
const Buttons= document.querySelectorAll(".piano-keys");
for(var i=0 ;i<numberOfButtons;i++){
 
 Buttons[i].addEventListener("click",function(){
    var buttonHtml = this.textContent;
//     console.log("this should be clicking function",buttonHtml)
  makeSound(buttonHtml)
  buttonAnimation(buttonHtml)

})
}

document.addEventListener('keydown',function(e){
var keyPress =e.key;
console.log(keyPress)
makeSound(keyPress);
buttonAnimation(keyPress)
})

function buttonAnimation(key){
var action = document.querySelector("."+key)
action.classList.add("clicked");
setTimeout(() => {
action.classList.remove("clicked");
    
}, 100);
}

function makeSound(key) {
   switch (key) {
    case "a":
        var pianoA = new Audio('./tunes/a.wav');
        pianoA.play();
        break;
    case "w":
        var pianoW = new Audio('./tunes/w.wav');
        pianoW.play();
        break;  
    case "s":
        var pianoS= new Audio('./tunes/s.wav');
        pianoS.play();
        break; 
    case "d":
        var pianoD = new Audio('./tunes/d.wav');
        pianoD.play();
        break;
    case "f":
         var pianoF = new Audio('./tunes/f.wav');
         pianoF.play();
         break;
    case "t":
            var  pianoT= new Audio('./tunes/t.wav');
            pianoT.play();
            break;
    case "g":
         var pianoG = new Audio('./tunes/g.wav');
         pianoG.play();
         break;
    case "y":
            var pianoY = new Audio('./tunes/y.wav');
            pianoY.play();
            break;
    case "h":
             var pianoH = new Audio('./tunes/h.wav');
             pianoH.play();
             break;
    case "u":
           var pianoU = new Audio('./tunes/u.wav');
           pianoU.play();
           break;
   case "j":
            var pianoJ = new Audio('./tunes/j.wav');
            pianoJ.play();
            break;
    case "k":
            var pianoK = new Audio('./tunes/k.wav');
            pianoK.play();
            break; 
    case "o":
            var pianoO = new Audio('./tunes/o.wav');
            pianoO.play();
            break;
    case "l":
           var pianoL = new Audio('./tunes/l.wav');
           pianoL.play();
           break;
    case "p":
            var pianoP = new Audio('./tunes/p.wav');
            pianoP.play();
            break;
    case ";":
                var pianoLast = new Audio('./tunes/;.wav')
                pianoLast.play();
                break;
    
    default:console.log(key)
        break;
   }
}