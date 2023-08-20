const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-box ul li a');


window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 80;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            links.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});