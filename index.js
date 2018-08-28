var step = 0


document.addEventListener('DOMContentLoaded', function(e) {

let level = 0
let score = 0
let totScore = 0
let table = document.querySelector("tbody")
let currmap = maps[level];
let position = []
let movecount = 0

if (localStorage.getItem('level') === null) {
  level = localStorage.setItem('level', 0)
}
else {
  level = localStorage.getItem('level')
}
if (localStorage.getItem('totScore') === null) {
  totScore = localStorage.setItem('totScore', 0)
}
else {
  totScore = localStorage.getItem('totScore')
}


function render(map){
//Need to clear tBody of all trs and tds before re-making map

  document.getElementById("level").innerText = `Level: ${parseInt(level) + 1}`
  document.getElementById("score").innerText = `Score: 0`
  document.getElementById("totScore").innerText = `Total Score: ${totScore}`
  step = 0
  movecount = 0
  score = 0
  document.getElementById("moves").innerText = `Moves: 0`
  for(let i in map){
    let tr = document.createElement("tr")
    tr.id = i
    table.appendChild(tr)
    for(let j in map[i]) {
      let td = document.createElement("td")
      td.className = j
      tr.appendChild(td)
      if(map[i][j] === 1)
      {
        let usr = document.createElement("div")
        usr.id = "user"
        td.appendChild(usr)
        position[0] = parseInt(i)
        position[1] = parseInt(j)
      }
      else if(map[i][j] === 2)
      {
        td.classList.add("wall")
      }
    }
  }
}

render(currmap)

function movecnt() {
  movecount++
  document.getElementById("moves").innerText = `Moves: ${movecount}`
}

function move(direction) {
  //console.log(currmap)
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
      if(checkloc(position[0] - 1, position[1], currmap)){
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
    if(checkloc(position[0] + 1, position[1], currmap)){
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
    if(checkloc(position[0], position[1] -1, currmap)){
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
    if(checkloc(position[0], position[1] + 1, currmap)){
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
     if(currmap[position[0]][position[1]] === 8)
     {
       solve(0, step)
     }
    break;

    case "c":
      console.log(step)
    break;
  }
}

document.addEventListener('keydown', function(e){
  e.preventDefault()
  //console.log(e.key)
  move(e.key)
})

function goToNextLevel(lvl, lvlscore = 0){
  level++
  console.log(level + '  ' + currmap)

  //currmap isn't going to work, it's static, will have to use map[level]

  localStorage.setItem('level', level)
  totScore += lvlscore
  localStorage.setItem('totScore', totScore)
  render(currmap)
}

})
