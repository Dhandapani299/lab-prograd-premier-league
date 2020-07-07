//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (!formation.length) {
    return null;
  }
  let objectFormation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return objectFormation;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let playerslist = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      playerslist.push(players[i]);

    }
  }
  return playerslist;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let playerslist = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      playerslist.push(players[i]);

    }
  }
  return playerslist;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let playerawardlist = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        playerawardlist.push(players[i])
      }
    }
  }
  return playerawardlist;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let playerawardlist = [];
  let count = 0;
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }

    if (count == noOfTimes) {
      playerawardlist.push(players[i])
    }
  }
  return playerawardlist;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let awards_per_country = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        awards_per_country.push(players[i])
      }
    }
  }
  return awards_per_country;

}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let playerswon = [];
  for (var i = 0; i < players.length; i++) {

    if (players[i].awards >= noOfAwards && players[i].team == team && players[i].age < age) {
      playerswon.push(players[i])
    }

  }
  return playerswon;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {

  let playerage = [];
  let a = Array.sort(players.age, Collections.reverseOrder());
  playerage.push(a);




  return playerage;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
