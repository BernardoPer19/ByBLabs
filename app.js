const sapn1 = document.querySelector(".span1")
const sapn2 = document.querySelector(".span2")
const sapn3 = document.querySelector(".span3")
const sapn4 = document.querySelector(".span4")

const el = document.querySelector(".itemFlex")
const height = el.clientHeight
const width = el.clientWidth




let contador=0
let contador1=0
let contador2=0
let contador3=0

let suma = setInterval(() => {
        contador+=5

        sapn1.textContent=contador
        if (contador>=1200) {
            clearInterval(suma)
        }
}, 15);


let suma1 = setInterval(() => {
    contador1+=10

    sapn2.textContent=contador1
    if (contador1>=2351) {
        clearInterval(suma1)
    }
}, 15);



let suma2 = setInterval(() => {
    contador2+=3

    sapn3.textContent=contador2
    if (contador2>=705) {
        clearInterval(suma2)
    }
}, 15);


let suma3 = setInterval(() => {
    contador3+=5

    sapn4.textContent=contador3
    if (contador3>=1200) {
        clearInterval(suma3)
    }
}, 15);


window.addEventListener("scroll",()=>{
    let header = document.querySelector(".navbar")
    header.classList.toggle("abajo",window.scrollY>1)
})


const navbar = document.querySelector(".navbar")
const menuhamburguesa = document.querySelector(".hamburgerMenu")


// window.addEventListener("scroll",()=>{
//     let navbar = document.querySelector(".navbar")
//     navbar.classList.toggle("abajo",window.scrollY>1)
// })


menuhamburguesa.addEventListener("click",()=>{
    navbar.classList.toggle("clicki")
    if (navbar.classList.contains("clicki")) {
        navbar.style.display="block"
    }else{
        navbar.style.display="none"
    }
   
})