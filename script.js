const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const refImage = document.querySelector("#ref");
const msg = document.querySelector(".msg");
// const winImage = document.querySelectorAll(".win");
const body = document.querySelector(".body");


// Random Number Genrator..
const randNumber = Math.floor(Math.random() * 101);

// congurational Flag Function Defination.
function congurational(){
    let node = document.createElement("img");
    node.src = "./src/win reb1.gif";
    node.style.position = "absolute";
    node.style.width = "100dvw";
    node.style.height = "100dvh";
    node.style.zIndex = "-50";
        
    body.appendChild(node);
}

function cheakVal(e){
    e.preventDefault();

    if(Number(input.value) === randNumber){
        msg.innerText = "You Win!";
        refImage.src = "./src/win Dance.gif";

        // Style Manipulate
        input.style.display = "none";
        input.style.width = "0%";
        btn.style.width = "100%";
        btn.innerText = "Reset";
        btn.style.borderRadius = "20px";
        // congurational Flag Function Calling
        congurational();
        // Event Listner For Reset Button
        btn.addEventListener('click', (e) => {
            location.reload();
        })
    }else if(Number(input.value) > randNumber){
        msg.innerText = "Too High!";
        refImage.src = "./src/No.gif";
    }else if(Number(input.value) < randNumber){
        msg.innerText = "Too Low!";
        refImage.src = "./src/No.gif";
    }
}

// Input Event Listenor for cheakin input...
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cheakVal(e)
    }
});


// Button Event Listenor...
btn.addEventListener("click", cheakVal);
