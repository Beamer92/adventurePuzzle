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
        document.getElementById('0').getElementsByClassName('11')[0].classList.remove('wall')
        document.getElementById('1').getElementsByClassName('11')[0].style.backgroundColor = "red"
      }
    break;

  }
}
