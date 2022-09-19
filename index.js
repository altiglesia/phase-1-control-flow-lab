function scuberGreetingForFeet(someValue){
  let ride
  if (someValue <= 400){
    ride = "This one is on me!"
    }
  else if (400 < someValue && someValue < 2000){
    ride = "That will be twenty bucks."
  }
  else if (2000 < someValue && someValue < 2500){
    ride = "I will gladly take your thirty bucks."
  }
  else if (someValue > 2500){
    ride = "No can do."
  }
  return ride
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(charm){
  switch(charm){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}