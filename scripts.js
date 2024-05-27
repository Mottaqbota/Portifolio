document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new TypeIt("#text-write", {
            speed: 100,
            loop: true
        })
        .type("Olá, meu nome é Motta!", {delay: 1000}).delete(22)
        .type("su eou", {delay: 400})
        .move(-5, {speed: 1500})
        .delete(1)
        .type("E")
        .move(3,{speed: 1500})
        .delete(1)
        .type("s")
        .move(null, { to: "END" })
        .type(" Desenvolvedor Front-End!", {delay: 1600}).delete(24)
        .type("Designer ", {delay: 200} )
        .type("UI/UX!", {delay: 1600}).delete(22)
        .type("A caminho do Full-Stack!", {delay: 2000}).delete(40)
        // .type("E Posso ser seu Programador!", {delay: 2000}).delete(28)
        .go()
    }, 2000)
})

ScrollReveal({ reset: true });
ScrollReveal().reveal('section', { delay: 500 });

const cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function(e){
  var x = e.clientX
  var y = e.clientY

  cursor.style.left = x + "px"
  cursor.style.top = y + "px"
})
const elementLink = document.querySelectorAll("a")
elementLink.addEventListener("mouseover", function(e){
  for(let i = 0; i < elementLink.length; i++)
  cursor.classList.add("hovering")
})
