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