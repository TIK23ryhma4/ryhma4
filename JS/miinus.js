

const laskut = ["15-14", "10-8", "14-10", "8-3", "12-6", "13-5", "20-10", "17-6", "16-2", "15-0", "1", "2", "4", "5", "6", "8", "10", "11", "14", "15"]
const btn = document.querySelectorAll(".control")
const button = document.querySelector(".pelaa")

let user = []
let keys = []
let isGame = false

function game(){
    btn.forEach((item)=>{
        item.textContent = "?"
    })

    btn.forEach((item,id) =>{
        item.addEventListener("click", () =>{
            if(!isGame) return
            if(user.length <2 && keys.length <2){
                item.textContent = random[id]
                user.push(random[id])
                keys.push(id)
            }
            evaluating()
        })
    })
    
    button.classList.add("hide")
    isGame = true
}

function evaluating(){
    if(user[0] && user [1]){
        if(user[0] === user[1]) {
            user = []
            keys = []
        }
        else{
            setTimeout(() => {
                btn[keys[0]].textContent ="?"
                btn[keys[1]].textContent ="?"
                user = []
                keys = []
            } , 200)
        }
    }
}
function shuffle(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

let shuffledLaskut = shuffle(laskut);

onload = function() {
    btn.forEach((item, id) => {
        item.textContent = "?";
        item.addEventListener("click", () => {
            if (!isGame) return;
            const id = Array.from(btn).indexOf(item);
            if (user.length < 2 && keys.length < 2) {
                item.textContent = shuffledLaskut[id];
                user.push(shuffledLaskut[id]);
                keys.push(id);
            }
            evaluating();
        });
    });
}

button.addEventListener("click", game);