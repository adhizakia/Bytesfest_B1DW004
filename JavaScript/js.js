/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// ganti background header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
//  ========================= Scroll reveal animation ===============//
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .footer__container, .footer__group')
sr.reveal('.home__img', {delay: 700, origin: 'bottom'})
sr.reveal('.logos__img , .program__card, .pricing__card', {interval : 100})
sr.reveal('.choose__img, .calculate__content', {origin: 'left'})
sr.reveal('.choose__content, .calculate__img', {origin: 'right'})
// ================ Scroll section aktif ======================//
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
// ================ Show Scroll up =====================//
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
// ================Email JS =======================
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')
const sendEmail = (e) =>{
e.preventDefault()
//  check  apalah itu
if(contactUser.value === ''){
    // gatau juga
    contactMessage.classList.remove('color-green')
    contactMessage.classList.remove('color-red')
    // tampilan message
    contactMessage.textContent = 'kamu harus mengisi emailmu dulu ya 😊'
    // Hapus pesan dalam 3detik
    setTimeout(() =>{
        contactMessage.textContent = ''
    }, 3000)
}   else{
    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_fuvrrcc', 'template_8vofsrp', '#contactForm', 'Pgb-uk_K5TaIb3vrW')
        .then(() => {
            // menunjukkan pesan dan warna
            contactMessage.classList.add('color-green');
            contactMessage.textContent = 'Kamu sudah terdaftar, terimakasih';

            // hapus pesan setelah 3detik
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 3000);
        })
        .catch(error => {
            console.error('Error sending email:', error);
            contactMessage.classList.add('color-red');
            contactMessage.textContent = 'Terjadi kesalahan saat mengirim email. Silakan coba lagi nanti.';
        })
}
}
contactForm.addEventListener('submit', sendEmail)