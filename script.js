
const showAbout = document.querySelector('.show-about');
const paragraph = document.querySelector('.about');


showAbout.onclick = function(){
      if(paragraph.style.display === 'none' || paragraph.style.display === ''){
        paragraph.style.display = 'flex';
      }else {
        paragraph.style.display = 'none';
      }
    }


