function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  // for (var i = 0; i < reveals.length; i++) {
  //   var windowHeight = window.innerHeight;
  //   var containerTop = reveals[i].getBoundingClientRect().top;
  //   var containerVisible = 150;
  //   if (containerTop < windowHeight - containerVisible) {
  //     reveals[i].classList.add("active");
  //   } else {
  //     reveals[i].classList.remove("active");
  //   }
  // }
  // or:

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const containerTop = reveal.getBoundingClientRect().top;
    const containerVisible = 150;
    if (containerTop < windowHeight - containerVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  })
}

window.addEventListener("scroll", reveal);