window.sr = new ScrollReveal();

const scrollRevealOption = {
  distance:'50px',
  origin:'bottom',
  duration:'1000',
}

sr.reveal('h3',{
  ...scrollRevealOption,
})
sr.reveal('h1',{
  ...scrollRevealOption,
  origin:'left',
  delay: '500',
})
sr.reveal('h2',{
  ...scrollRevealOption,
  origin:'right',
  delay: '800',
})
sr.reveal('.title_section button',{
  ...scrollRevealOption,
  origin:'right',
  delay: '1200',
})
sr.reveal('.nav_links li',{
  ...scrollRevealOption,
  origin:'right',
  interval:300,
  delay: '1200',
})
sr.reveal('.title_section button',{
  ...scrollRevealOption,
  origin:'right',
  delay: '1200',
})
sr.reveal('footer a',{
duration:'1000',
interval:300,
delay:3000
})