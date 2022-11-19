const imgs = document.querySelectorAll('.textWithPhoto img');
imgs[0].style.opacity = "1";
imgs[1].style.opacity = "1";
imgs[4].style.opacity = "1";
imgs[3].style.right = "0";
imgs[5].style.left = "0";
imgs[0].style.left = "0";
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        imgs[1].classList.add('scrol-animate-right');
    }
  });
});
observer1.observe(document.querySelector('.st2'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        imgs[2].classList.add('scrol-animate-left');
        imgs[2].classList.add('scrol-animate-opacity');
    }
  });
});
observer2.observe(document.querySelector('.st3'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        imgs[3].classList.add('scrol-animate-opacity');
    }
  });
});
observer3.observe(document.querySelector('.st4'));

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        imgs[4].classList.add('scrol-animate-left');
    }
  });
});
observer4.observe(document.querySelector('.st5'));

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        imgs[5].classList.add('scrol-animate-opacity');
    }
  });
});
observer5.observe(document.querySelector('.st6'));