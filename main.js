document.addEventListener('DOMContentLoaded', function(e) {

let table = document.querySelector("tbody")

for(let i in map1){
  let tr = document.createElement("tr")
  table.appendChild(tr)
  for(let j in map1[i]) {
    let td = document.createElement("td")
    table.appendChild(td)
    if(map1[i][j] === 1)
    {
      td.id= 'user'
    }
  }
}


function move(direction) {
  //find location of current id=user
  //move the id in that direction
  //re-render

}

document.addEventListener('keydown', function(e){
  e.preventDefault()

  //console.log(e.key)
  //ArrowUp, ArrowDown, ArrowRight, ArrowLeft

})


})
