const team = {
  _players: [
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 25
    },
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 25
    },
    {
      firstName: 'Phil',
      lastName: 'Willis',
      age: 25
    }
  ],
  _games: [
    {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
    },
    {
    opponent: 'Lions',
    teamPoints: 44,
    opponentPoints: 21
    },
    {
    opponent: 'Steelers',
    teamPoints: 18,
    opponentPoints: 10
    },   
  ],
  get players (){
    return this._players;
  },
  get games (){
    return this._games;
  },
  addPlayer (firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team._players);

team.addGame ('Titans', 25,14);
team.addGame('Raiders', 3,4);
team.addGame('Warriors', 8, 24);
console.log(team._games);
