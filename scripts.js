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

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
      cursor.translate = `${e.clientX}vw`, `${e.clientY}vh`
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });

  const hoverElements = ["a", "i", "img", "button", "input"]

  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (hoverElements.includes(target.tagName.toLowerCase())) {
        cursor.classList.add('hovering');
    } else {
        cursor.classList.remove('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target;
      if (hoverElements.includes(target.tagName.toLowerCase())) {
          cursor.classList.remove('hovering');
      }
  });
})

const elementLink = document.querySelectorAll(".nav-link a")
// elementLink.addEventListener("mouseover", (e){
//   for(let i=0; i < elementLink.length; i++) {
//     cursor.classList.add("hovering")
//   }
// })

var sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target)
    }
  })

  const sections = document.querySelectorAll("section")
  sections.forEach(section => {
    sectionObserver.observe(section);
  })
})
