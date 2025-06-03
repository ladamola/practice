const btn = document.querySelector('.js-button');
const btnMusic = document.querySelector('.js-music');
const btnTech = document.querySelector('.js-tech');

    function isToggled(button){
      if(button === 'game'){
          !btn.classList.contains('btn-dark') ? btn.classList.add('btn-dark') : btn.classList.remove('btn-dark');
      }else if(button === 'music'){
        !btnMusic.classList.contains('btn-dark') ? btnMusic.classList.add('btn-dark') : btnMusic.classList.remove('btn-dark');
      }else if(button === 'tech'){
        !btnTech.classList.contains('btn-dark') ? btnTech.classList.add('btn-dark') : btnTech.classList.remove('btn-dark');
      }

      if(button === 'game'){
        btnMusic.classList.remove('btn-dark');
        btnTech.classList.remove('btn-dark');
      } else if(button === 'music'){
        btn.classList.remove('btn-dark');
        btnTech.classList.remove('btn-dark');
      }else if(button === 'tech'){
        btnMusic.classList.remove('btn-dark');
        btn.classList.remove('btn-dark');
      }
    }