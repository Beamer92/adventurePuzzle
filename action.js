function solve(level, stp, pos) {
  switch (level) {
    case 0:
      //step 0, open tr8td10 and tr3td10, turn tr6td17 red
      //step 1, open 1,12, turn tr6td3 red
      //step 2, open 0,11, turn tr1td11 red
      if(stp === 0)
      {
        document.getElementById('8').getElementsByClassName('10')[0].classList.remove('wall')
        document.getElementById('3').getElementsByClassName('10')[0].classList.remove('wall')
        //document.getElementById('6').getElementsByClassName('18')[0].style.backgroundColor = "red"
		    document.getElementById('6').getElementsByClassName('18')[0].classList.add('toggled')
        step++
      }
      else if (stp === 1)
      {
        document.getElementById('1').getElementsByClassName('12')[0].classList.remove('wall')
        document.getElementById('6').getElementsByClassName('3')[0].classList.add('toggled')
        step++
      }
      else if (stp === 2)
      {
        let end = document.getElementById('0').getElementsByClassName('11')[0]
        end.classList.remove('wall')
        end.classList.add('exit')
        document.getElementById('1').getElementsByClassName('11')[0].classList.add('toggled')
      }
    break;

    case 1:
       if(stp === 0)
       {
         document.getElementById('10').getElementsByClassName('4')[0].classList.remove('wall')
         document.getElementById('10').getElementsByClassName('1')[0].classList.add('toggled')
         step++
       }
       else if(stp === 1)
       {
         document.getElementById('3').getElementsByClassName('2')[0].classList.add('toggled')
         document.getElementById('5').getElementsByClassName('5')[0].classList.remove('wall')
         step++
       }
       else if (stp === 2)
       {
         document.getElementById('1').getElementsByClassName('5')[0].classList.add('toggled')
         document.getElementById('1').getElementsByClassName('6')[0].classList.remove('wall')
         document.getElementById('9').getElementsByClassName('13')[0].classList.remove('wall')
         step++
       }
       else if(stp === 3)
       {
         document.getElementById('4').getElementsByClassName('9')[0].classList.add('toggled')
         document.getElementById('5').getElementsByClassName('9')[0].classList.remove('wall')
         document.getElementById('7').getElementsByClassName('13')[0].classList.remove('wall')
         document.getElementById('5').getElementsByClassName('13')[0].classList.remove('wall')
         step++
       }
       else if(stp === 4)
       {
         let end = document.getElementById('6').getElementsByClassName('16')[0]
         end.classList.remove('wall')
         end.classList.add('exit')
         document.getElementById('4').getElementsByClassName('13')[0].classList.add('toggled')
       }
    break;

    case 2:
    if(stp === 0)
    {
      if(pos[0] === 2)
      {
        document.getElementById('2').getElementsByClassName('27')[0].classList.add('toggled')
      }
      else if(pos[0] === 27 && pos[1] === 2)
      {
        document.getElementById('27').getElementsByClassName('2')[0].classList.add('toggled')
      }
      else
      {
        document.getElementById('27').getElementsByClassName('27')[0].classList.add('toggled')
      }

      if(document.getElementById('2').getElementsByClassName('27')[0].classList.contains('toggled') &&
         document.getElementById('27').getElementsByClassName('2')[0].classList.contains('toggled') &&
         document.getElementById('27').getElementsByClassName('27')[0].classList.contains('toggled'))
      {
        document.getElementById('6').getElementsByClassName('10')[0].classList.remove('wall')
        step++
      }
    }
    if(stp === 1)
    {

      if(pos[0] === 6 && pos[1] === 13)
      {
        document.getElementById('6').getElementsByClassName('13')[0].classList.add('toggled')
        document.getElementById('13').getElementsByClassName('12')[0].classList.remove('wall')
        document.getElementById('16').getElementsByClassName('15')[0].classList.add('wall')
      }
      else if(pos[0] === 6 && pos[1] === 16)
      {
        document.getElementById('6').getElementsByClassName('16')[0].classList.add('toggled')
        //document.getElementById('14').getElementsByClassName('19')[0].classList.remove('wall')
        document.getElementById('13').getElementsByClassName('12')[0].classList.add('wall')

      }
      else if(pos[0] === 12 && pos[1] === 7)
      {
        document.getElementById('12').getElementsByClassName('7')[0].classList.add('toggled')
        document.getElementById('11').getElementsByClassName('19')[0].classList.remove('wall')
        document.getElementById('11').getElementsByClassName('15')[0].classList.add('wall')
      }
      else if(pos[0] === 12 && pos[1] === 22)
      {
        document.getElementById('12').getElementsByClassName('22')[0].classList.add('toggled')
        document.getElementById('11').getElementsByClassName('15')[0].classList.remove('wall')
        document.getElementById('12').getElementsByClassName('16')[0].classList.add('wall')
      }
      else if(pos[0] === 15 && pos[1] === 7)
      {
        document.getElementById('15').getElementsByClassName('7')[0].classList.add('toggled')
        //document.getElementById('12').getElementsByClassName('10')[0].classList.remove('wall')
        document.getElementById('16').getElementsByClassName('19')[0].classList.add('wall')
      }
      else if(pos[0] === 15 && pos[1] === 22)
      {
        document.getElementById('15').getElementsByClassName('22')[0].classList.add('toggled')
        //document.getElementById('16').getElementsByClassName('19')[0].classList.remove('wall')
        document.getElementById('11').getElementsByClassName('19')[0].classList.add('wall')
      }
      else if(pos[0] === 21 && pos[1] === 13 )
      {
        document.getElementById('21').getElementsByClassName('13')[0].classList.add('toggled')
        //document.getElementById('12').getElementsByClassName('16')[0].classList.remove('wall')
        document.getElementById('12').getElementsByClassName('10')[0].classList.add('wall')

      }
      else if(pos[0] === 21 && pos[1] === 16)
      {
        document.getElementById('21').getElementsByClassName('16')[0].classList.add('toggled')
        document.getElementById('16').getElementsByClassName('15')[0].classList.remove('wall')
        document.getElementById('14').getElementsByClassName('19')[0].classList.add('wall')
      }
    }
    break;
  }
}
