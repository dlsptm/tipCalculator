const totalBill = document.getElementById('billTotal')
const tipInput = document.getElementById('tipInput')
const increaseBtn = document.getElementById('increaseBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
const perPersonTotalDisplay = document.querySelector('h2')
const main = document.querySelector('main')
const nbPerson = document.getElementById('nbPerson')

let numberOfPeople = Number(nbPerson.innerText)

const calculateBill = () => {
  const bill = Number(totalBill.value)

  const tipPercentage = Number(tipInput.value) / 100

  const tipAmount = bill * tipPercentage
  
  const total = bill + tipAmount  

  const perPersonTotal = total / numberOfPeople

  perPersonTotalDisplay.innerHTML = `$${perPersonTotal.toFixed(2)}` //to fixed(2) sert à avoir uniuqement deux nombres après la décimal
}

const increasePeople = () => {
  numberOfPeople+=1
  nbPerson.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if(numberOfPeople <= 1) {
    return
  }
  numberOfPeople-=1
  nbPerson.innerText = numberOfPeople
  calculateBill()
}