var step = 0

document.addEventListener('DOMContentLoaded', function(e) {

let table = document.querySelector("tbody")
let currlvl = maps[0];
let position = []
let movecount = 0

function render(map){

  step = 0
  movecount = 0
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

render(currlvl)

function movecnt() {
  movecount++
  document.getElementById("moves").innerText = `Moves: ${movecount}`
}

function move(direction) {
  //console.log(currlvl)
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
      if(checkloc(position[0] - 1, position[1], currlvl)){
          let newtd = document.getElementById(`${position[0]-1}`).getElementsByClassName(`${position[1]}`)[0]
            if(newtd.classList.contains("wall") === false)
            {
              newtd.append(user)
              position[0]--
            }
      }
      break;
    case "ArrowDown":
    case "s":
    movecnt()
    if(checkloc(position[0] + 1, position[1], currlvl)){
        let newtd = document.getElementById(`${position[0]+1}`).getElementsByClassName(`${position[1]}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[0]++
        }

    }
    break;
    case "ArrowLeft":
    case "a":
    movecnt()
    if(checkloc(position[0], position[1] -1, currlvl)){
        let newtd = document.getElementById(`${position[0]}`).getElementsByClassName(`${position[1]-1}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[1]--
        }
    }
    break;
    case "ArrowRight":
    case "d":
    movecnt()
    if(checkloc(position[0], position[1] + 1, currlvl)){
        let newtd = document.getElementById(`${position[0]}`).getElementsByClassName(`${position[1]+1}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[1]++
        }
    }
    break;
    case " ":
     if(currlvl[position[0]][position[1]] === 8)
     {
       solve(0, step)
     }
      //console.log(position + '   ' + currlvl[position[0]][position[1]])
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


})
