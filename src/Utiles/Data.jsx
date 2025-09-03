import bgImage1 from '../assets/testimonial/01.png';
import bgImage2 from '../assets/testimonial/02.png';
import bgImage3 from '../assets/testimonial/03.png';
import bgImage4 from '../assets/testimonial/04.png';
import bgImage5 from '../assets/testimonial/01.png';
import bgImage6 from '../assets/testimonial/02.png';
import bgImage7 from '../assets/testimonial/03.png';
import bgImage8 from '../assets/testimonial/04.png';
import bgImage9 from '../assets/testimonial/01.png';
import bgImage10 from '../assets/testimonial/02.png';
import bgImage11 from '../assets/testimonial/03.png';
import bgImage12 from '../assets/testimonial/04.png';
import ScrollReveal from 'scrollreveal';

const Product=[
    { id:'1', name: 'Emma Rodriguez', image:bgImage1 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'2', name: 'Liam Chen', image:bgImage2 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'3', name: 'Sophia Patel', image:bgImage3 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'4', name: 'Noah Williams', image:bgImage4 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'5', name: 'Ava Thompson', image:bgImage5 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'6', name: 'Ethan Kim', image:bgImage6 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'7', name: 'Oliver Bennett', image:bgImage7 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'8', name: 'Mia Johnson', image:bgImage8 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'9', name: 'James Okafor', image:bgImage9 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'10', name: 'Isabella Garcia', image:bgImage10 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'11', name: 'Grace Nguyen', image:bgImage11 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
    { id:'12', name: 'Lucas Muller', image:bgImage12 , description:'Absolutely stunning work! The attention to detail and elegant design transformed my space into something out of a magazine.'},
]
export default Product;

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

export const revealHeroText = () => {
  sr.reveal('.hero--text', { origin: 'top' });
};

export const revealstepText = () => {
  sr.reveal('.steps--step', { distance:'150px', interval:100 });
};

export const revealaboutText = () => {
  sr.reveal('.about--text', { origin:'Right' });
  sr.reveal('.about--img', { origin:'left' });
  sr.reveal('.testimonial--card', { delay:500,distance:'100px' });
  sr.reveal('.testimonial--title');
  sr.reveal('.testimonial--slider');
  sr.reveal('.brands--img', { delay:500,distance:'60px',interval:100 });
  sr.reveal('.work--title');
  sr.reveal('.work--para');
  sr.reveal('.work--img');
  sr.reveal('.stats');
  sr.reveal('.new--img', { delay:500,distance:'100px',interval:100 });
};
