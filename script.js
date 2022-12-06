let inpEl = document.querySelector(".text-inp");
let addEl = document.querySelector(".add-btn")
let ulEl = document.querySelector(".ul-el")
let added = 0

addEl.addEventListener("click", ()=>{
    add()
})

inpEl.addEventListener("keydown", (e)=> {
    if (e.key == "Enter") {
        add()
    } else {
        return
    }
})



function add() {

  inpEl = document.querySelector(".text-inp")

  if (inpEl.value == "" || inpEl.value == " " || inpEl.value == "  "|| inpEl.value == "   "|| inpEl.value == "    ") {
    return 
} else {
    added++
    ulEl.innerHTML += `
    <br class="br${added}">
    <button onclick="del(${added})" class="del-btn btn${added}">x</button>  
    <li onclick="done(${added})" class="li-el li${added}">${inpEl.value}</li>
    `
//<input type="checkbox" onclick="done(${added})" class="check${added}">
    inpEl.value = ""
  }
}

function del(num) {
    ulEl.removeChild(document.querySelector(`.btn${num}`))
    ulEl.removeChild(document.querySelector(`.li${num}`))
    ulEl.removeChild(document.querySelector(`.br${num}`))
  //  ulEl.removeChild(document.querySelector(`.check${num}`))
    var rem = new Audio('SFX/remove.mp3');
    rem.play();
}

function done(val) {
    document.querySelector(`.li${val}`).classList.toggle("active")
    var done = new Audio('SFX/done.mp3');
    done.play();
}
