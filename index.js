var step = 0

document.addEventListener('DOMContentLoaded', function(e) {

let table = document.querySelector("tbody")
let position = []
let movecount = 0
let level = 0
let totScore = 0
let resets = 0

if (localStorage.getItem('level') === null) {
  localStorage.setItem('level', 0)
}
else {
  level = parseInt(localStorage.getItem('level'))
}
if (localStorage.getItem('totScore') === null) {
  localStorage.setItem('totScore', 0)
}
else {
  totScore = parseInt(localStorage.getItem('totScore'))
}

let scoreCalc = { "0": {"perfect": 86, "close": 95},
                  "1": {"perfect": 62, "close": 80}}


function render(map){
  document.getElementById("level").innerText = `Level: ${level + 1}`
  document.getElementById("totScore").innerText = `Total Score: ${totScore}`
  step = 0
  movecount = 0
  document.getElementById("moves").innerText = `Moves: 0`

  //clear table body
  while (table.firstChild) {
    table.firstChild.remove();
  }

  for(let i in map){
    let tr = document.createElement("tr")
    tr.id = i
    table.appendChild(tr)
    for(let j in map[i]) {
      let td = document.createElement("td")
      td.className = j
      tr.appendChild(td)
      if(map[i][j] === 2)
      {
        let usr = document.createElement("div")
        usr.id = "user"
        td.appendChild(usr)
        position[0] = parseInt(i)
        position[1] = parseInt(j)
      }
      else if(map[i][j] === 1)
      {
        td.classList.add("wall")
      }
    }
  }
}

render(maps[level])

function movecnt() {
  movecount++
  document.getElementById("moves").innerText = `Moves: ${movecount}`
}

function move(direction) {
  //console.log(maps[level])
  const checkloc = (x,y,matrix) => {
    if(matrix[x] !== undefined) {
      if(matrix[x][y] !== undefined) {
        return true
      }
    }
  }

  let user = document.getElementById("user")

  switch (direction) {
    case "ArrowUp":
    case "w":
    movecnt()
      if(checkloc(position[0] - 1, position[1], maps[level])){
          let newtd = document.getElementById(`${position[0]-1}`).getElementsByClassName(`${position[1]}`)[0]
            if(newtd.classList.contains("wall") === false)
            {
              newtd.append(user)
              position[0]--
            }
            if(newtd.classList.contains("exit") === true)
            {
              goToNextLevel()
            }
      }
      break;
    case "ArrowDown":
    case "s":
    movecnt()
    if(checkloc(position[0] + 1, position[1], maps[level])){
        let newtd = document.getElementById(`${position[0]+1}`).getElementsByClassName(`${position[1]}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[0]++
        }
        if(newtd.classList.contains("exit") === true)
        {
          goToNextLevel()
        }

    }
    break;
    case "ArrowLeft":
    case "a":
    movecnt()
    if(checkloc(position[0], position[1] -1, maps[level])){
        let newtd = document.getElementById(`${position[0]}`).getElementsByClassName(`${position[1]-1}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[1]--
        }
        if(newtd.classList.contains("exit") === true)
        {
          goToNextLevel()
        }
    }
    break;
    case "ArrowRight":
    case "d":
    movecnt()
    if(checkloc(position[0], position[1] + 1, maps[level])){
        let newtd = document.getElementById(`${position[0]}`).getElementsByClassName(`${position[1]+1}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[1]++
        }
        if(newtd.classList.contains("exit") === true)
        {
          goToNextLevel()
        }
    }
    break;
    case " ":
     if(maps[level][position[0]][position[1]] === 8)
     {
       solve(level, step)
     }
    break;

    case "c":
      console.log(step)
    break;
  }
}

document.addEventListener('keydown', function(e){
  e.preventDefault()
  move(e.key)
})

function lvlscore(lvl) {
  let scores = scoreCalc[lvl.toString()]
  let total = 0

  if(moves === scores["perfect"]){
    total = 100
  }
  else if (moves >= scores["perfect"] && moves <= scores["close"]){
    total = 90
  }
  else {
    total = 75
  }

  if(resets > 2 && resets <= 5)
  {
    total = Math.round(total/2)
  }
  else if (resets > 5)
  {
    total = Math.round(total/3)
  }

  resets = 0
  document.getElementById("reset").innerText = `Resets: ${resets}`
  return total
}

function goToNextLevel(){
  totScore += lvlscore(level)
  level++
  localStorage.setItem('level', level)
  localStorage.setItem('totScore', totScore)
  render(maps[level])
}

//using mousedown because Spacebar was activating "click" event
//if button retained focus after being clicked
document.getElementById("resetbtn").addEventListener('mousedown', function(e){
  e.preventDefault()
  resets++
  document.getElementById("reset").innerText = `Resets: ${resets}`
  render(maps[level])
})

document.getElementById("startover").addEventListener('mousedown', function(e){
  e.preventDefault()
  localStorage.setItem('totScore', 0)
  localStorage.setItem('level', 0)
  totScore = 0
  level = 0
  resets = 0
  document.getElementById("reset").innerText = `Resets: ${resets}`
  render(maps[level])
})

})
