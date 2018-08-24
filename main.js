document.addEventListener('DOMContentLoaded', function(e) {

let table = document.querySelector("tbody")
let currlvl = maps[0];
let position = []

function render(map){

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

console.log(currlvl[0][0])

function move(direction) {
  //find location of current id=user
  //move the id in that direction
  //re-render
  console.log(currlvl)
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
    console.log(position)
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
    if(checkloc(position[0], position[1] + 1, currlvl)){
        let newtd = document.getElementById(`${position[0]}`).getElementsByClassName(`${position[1]+1}`)[0]
        if(newtd.classList.contains("wall") === false)
        {
          newtd.append(user)
          position[1]++
        }
    }
    break;
  }
}


document.addEventListener('keydown', function(e){
  e.preventDefault()

  //console.log(e.key)
  //ArrowUp, ArrowDown, ArrowRight, ArrowLeft
  move(e.key)

})


})
