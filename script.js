const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const refImage = document.querySelector("#ref");
const msg = document.querySelector(".msg");
const winImage = document.querySelectorAll(".win");


// Random Number Genrator..
const randNumber = Math.floor(Math.random() * 101);

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(randNumber);

    if(Number(input.value) === randNumber){
        msg.innerText = "You Win!";
        input.style.display = "none";
        input.style.width = "0%";
        btn.style.width = "100%";
        btn.innerText = "Reset";
        btn.style.borderRadius = "20px";

        btn.addEventListener('click', (e) => {
            location.reload();
        })
    }else if(Number(input.value) > randNumber){
        msg.innerText = "Too High!";
    }else if(Number(input.value) < randNumber){
        msg.innerText = "Too Low!";
    }
});
