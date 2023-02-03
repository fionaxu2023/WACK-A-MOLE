//declare elements from html
let count=document.getElementById("count");
let hole=document.querySelectorAll(".hole")
let hammer=document.getElementById("hammer")
let score=0;
let timer=null;

//the function means to move the mole randomly and put it in the appropriate hole each time
function moleMove(){
    let i= Math.floor(Math.random() * hole.length);
    let holechoose=hole[i];
    //create image in the js
    let imgmole= document.createElement("img");
    imgmole.classList.add('mole')
    imgmole.setAttribute("src","mole.png");

    imgmole.addEventListener('click', function() {
        score += 1
        count.textContent = score
        holechoose.removeChild(imgmole)
        moleMove()
        })

    holechoose.appendChild(imgmole);

}

moleMove()