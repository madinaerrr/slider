let start = 0;
let offset = 0;


const sliderLine = document.querySelector('.slider_line');
const names = document.querySelector('.names');

document.querySelector('.next').addEventListener('click', function(){
      start = start + 450;
      if (start > 1350) {
        start = 0;}

      sliderLine.style.left = -start + 'px';


      offset = offset + 200;
      if (offset > 600) {
        offset = 0;}

      names.style.left = -offset + 'px';



})


document.querySelector('.prev').addEventListener('click', function(){

    start = start - 450;
    if (start < 0) {
      start = 1350;}

    sliderLine.style.left = -start + 'px';

    offset = offset - 200;
    if (offset < 0) {
      offset = 600;}

    names.style.left = -offset + 'px';

})




