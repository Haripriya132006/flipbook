//

const prevbtn=document.querySelector("#prevbtn");
const nextbtn=document.querySelector("#nextbtn");
const book= document.querySelector("#book");

const paper1=document.querySelector("#p1");
const paper2=document.querySelector("#p2");
const paper3=document.querySelector("#p3");
const paper4=document.querySelector("#p4");
const paper5=document.querySelector("#p5");
const paper6=document.querySelector("#p6");
const paper7=document.querySelector("#p7");

prevbtn.addEventListener("click",prevpage);
nextbtn.addEventListener("click",nextpage);


document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowRight':
        nextpage();
        break;
      case 'ArrowLeft':
        prevpage();
        break;
      case 'Enter':
        nextpage();
        break;
    }
  });
let current=1;
let numofpage=7;
let maxloc=numofpage+1;

function openbook(){
    book.style.transform="translateX(60%)";
    prevbtn.style.transform="translateX(-180px)";
    nextbtn.style.transform="translateX(270px)";

}

function closebook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform="translateX(0%)";

    }
    else{
        book.style.transform="translateX(100%)";

    }
    prevbtn.style.transform="translateX(0px)";
    nextbtn.style.transform="translateX(30px)";
}

function nextpage(){
    if (current<maxloc){
        switch(current){
            case 1:
                openbook();
                paper1.classList.add("flipped");
                paper1.style.zIndex=1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex=2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex=3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex=4;
                break;         
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex=5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex=6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex=7;
                closebook(false);
                break;
            default:
                throw new Error("undefineddd");
        }
        current++;
    }
}

function prevpage(){
    if (current>1){
        switch(current){
            case 2:
                closebook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex=7;
                break;

            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex=6;
                break;
            
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex=5;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex=4;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex=3;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex=2;
                break;
            case 8:
                openbook();
                paper7.classList.remove("flipped");
                paper7.style.zIndex=1;
                break;


            default:
                throw new Error("undefineddd");
        }
        current--;
    }
}