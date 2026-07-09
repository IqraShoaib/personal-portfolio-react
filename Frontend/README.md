Personal-Portfolio

#HTML

<header>
    <a href="" class="logo">DigiLibrary</a>
    <nav>
      <a href="#home" class="active">Home</a>
      <a href="#features">Features</a>
      <a href="#testimonials">Testinomials</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <a href="#footer">Footer</a>
    </nav>
  </header>

#CSS
.logo {
font-size: 25px;
color:black;
text-decoration:solid;
font-weight: 600;
}

nav a {
font-size: 18px;
color: black;
text-decoration: none;
font-weight: 500;
margin-left: 35px;
transition: 3s;
}
nav a:hover {
background-color:#CC0066
;
}
nav a.active{
background-position: absolute;
}
header {
position:fixed;
top: 0;
left: 0;
width: 100%;
padding: 20px 120px;
background: linear-gradient(300deg, #00bfff, #ff4c68, #ef8172);
display: flex;
justify-content:space-between;
align-items:center;
z-index: 100;
}

#JS

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
let top =window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id +']').classList.add('active');
            });
        };
    });

};
