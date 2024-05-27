document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new TypeIt("#text-write", {
            speed: 100,
            loop: true
        })
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
        .type("E Posso ser seu Desenvolvedor!", {delay: 2000}).delete(40)
        // .type("E Posso ser seu Programador!", {delay: 2000}).delete(28)
        .go()
    }, 2000)
})
