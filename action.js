function solve(level, stp) {
  switch (level) {
    case 0:
      //step 0, open tr8td10 and tr3td10, turn tr6td17 red
      //step 1, open 1,12, turn tr6td3 red
      //step 2, open 0,11, turn tr1td11 red
      if(stp === 0)
      {
        document.getElementById('8').getElementsByClassName('10')[0].classList.remove('wall')
        document.getElementById('3').getElementsByClassName('10')[0].classList.remove('wall')
        document.getElementById('6').getElementsByClassName('18')[0].style.backgroundColor = "red"
        step++
      }
      else if (stp === 1)
      {
        document.getElementById('1').getElementsByClassName('12')[0].classList.remove('wall')
        document.getElementById('6').getElementsByClassName('3')[0].style.backgroundColor = "red"
        step++
      }
      else if (stp === 2)
      {
        let end = document.getElementById('0').getElementsByClassName('11')[0]
        end.classList.remove('wall')
        end.classList.add('exit')
        document.getElementById('1').getElementsByClassName('11')[0].style.backgroundColor = "red"
      }
    break;

    case 1:
       if(stp === 0)
       {
         document.getElementById('10').getElementsByClassName('4')[0].classList.remove('wall')
         document.getElementById('10').getElementsByClassName('1')[0].style.backgroundColor = "red"
         step++
       }
       else if(stp === 1)
       {
         document.getElementById('3').getElementsByClassName('2')[0].style.backgroundColor = "red"
         document.getElementById('5').getElementsByClassName('5')[0].classList.remove('wall')
         step++
       }
       else if (stp === 2)
       {
         document.getElementById('1').getElementsByClassName('5')[0].style.backgroundColor = "red"
         document.getElementById('1').getElementsByClassName('6')[0].classList.remove('wall')
         step++
       }
       else if(stp === 3)
       {
         document.getElementById('4').getElementsByClassName('9')[0].style.backgroundColor = "red"
         document.getElementById('5').getElementsByClassName('9')[0].classList.remove('wall')
         step++
       }
       else if(stp === 4)
       {
         let end = document.getElementById('6').getElementsByClassName('16')[0]
         end.classList.remove('wall')
         end.classList.add('exit')
         document.getElementById('4').getElementsByClassName('13')[0].style.backgroundColor = "red"
       }
    break;
  }
}
