const coffeeList = document.getElementById('coffeeList')

function addSingleCoffee(coffee) {
  const newListItem = document.createElement('li')
  const newText = document.createTextNode(coffee.title)
  newListItem.appendChild(newText)
  return newListItem
}

function newCoffeeList(listOfCoffees) {
  const newList = document.createElement('ul')
  // loop through list of coffees and add each one to this list
  listOfCoffees.forEach(coffee => {
    const thisItem = addSingleCoffee(coffee)
    newList.appendChild(thisItem)
  });
  coffeeList.innerText = ''
  coffeeList.appendChild(newList)
}

function getCoffee(type){
    coffeeList.innerText = "Loading..."
    fetch(`https://api.sampleapis.com/coffee/${type}`)
      .then(res => res.json()) // a document returns, json converts it to a body
      .then(data => {
        // we got our list of coffee... now let's put it on the screen
        newCoffeeList(data)
      })
      .catch(err => console.error(err))
}

// async function getCoffee(){
//     coffeeList.innerText = "Loading..."
//     try {
      
//       const doc = await fetch(`https://api.sampleapis.com/coffee/hot`)
//       const data = await (res => res.json())
//       console.log(data)
//     }
//     catch(err){
//       console.error(err)
//     }
//       }
// this works too, but you would need to wrap it all in a try and catch, more lines
      