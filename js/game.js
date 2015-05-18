(function() {

  var outcome = {
    rockScissors: "Rock crushes scissors! ",
    rockLizard: "Rock crushes lizard! ",
    paperRock: "Paper covers rock! ",
    paperSpock: "Paper disproves Spock! ",
    scissorsPaper: "Scissors cuts paper! ",
    scissorsLizard: "Scissors decapitates lizard! ",
    lizardPaper: "Lizard eats paper! ",
    lizardSpock: "Lizard poisons Spock! ",
    spockRock: "Spock vaporizes rock! ",
    spockScissors: "Spock smashes scissors! ",
  };

  var Weapon = function() {
    this.rock = "";
    this.paper = "";
    this.scissors = "";
    this.lizard = "";
    this.spock = "";
  }

  var rock = new Weapon();
  var paper = new Weapon();
  var scissors = new Weapon();
  var lizard = new Weapon();
  var spock = new Weapon();

  rock.paper = [outcome.paperRock, false];
  rock.scissors = [outcome.rockScissors, true];
  rock.lizard = [outcome.rockLizard, true];
  rock.spock = [outcome.spockRock, false];
  rock.rock = true;

  paper.rock = [outcome.paperRock, true];
  paper.scissors = [outcome.scissorsPaper, false];
  paper.lizard = [outcome.lizardPaper, false];
  paper.spock = [outcome.paperSpock, true];
  paper.paper = true;

  scissors.rock = [outcome.rockScissors, false];
  scissors.paper = [outcome.scissorsPaper, true];
  scissors.lizard = [outcome.scissorsLizard, true];
  scissors.spock = [outcome.spockScissors, false];
  scissors.scissors = true;

  lizard.rock = [outcome.rockLizard, false];
  lizard.paper = [outcome.lizardPaper, true];
  lizard.scissors = [outcome.scissorsLizard, false];
  lizard.spock = [outcome.lizardSpock, true];
  lizard.lizard = true;

  spock.rock = [outcome.spockRock, true];
  spock.paper = [outcome.paperSpock, false];
  spock.scissors = [outcome.spockScissors, true];
  spock.lizard = [outcome.lizardSpock, false];
  spock.spock = true;

  var user = {
    name: "",
    choice: "",
    wins: "",
    getName: function () {
      user.name = initialize.value;
      user.wins = user.name + " wins!";
      return user.name;
    },
    choose: function(string) {
      var choice = prompt(string);
      if (choice === "rock") {
        user.choice = rock;
      } else if (choice === "paper") {
        user.choice = paper;
      } else if (choice === "scissors") {
        user.choice = scissors;
      } else if (choice === "lizard") {
        user.choice = lizard;
      } else if (choice === "Spock") {
        user.choice = spock;
      }
      return user.choice;
    }
  };

  var sheldon = {
    name: "Sheldon",
    choice: "",
    wins: "Sheldon wins!",
    choose: function() {
      var randomSelection = Math.random();
      if (randomSelection <= 0.125) {
          sheldon.choice = "rock";
      } else if (randomSelection <= 0.25) {
          sheldon.choice = "paper";
      } else if (randomSelection <= 0.375) {
          sheldon.choice = "scissors";
      } else if (randomSelection <= 0.5) {
          sheldon.choice = "lizard";
      } else {
          sheldon.choice = "spock";
      }
      return sheldon.choice;
    }
  };

  var scoreboard = {
    user: 0,
    sheldon: 0,
    total: 0,
    win: function(bool) {
      scoreboard.total++;
      if (bool) {
        scoreboard.user++;
        return user.wins;
      } else {
        scoreboard.sheldon++;
        return sheldon.wins;
      }
    }
  };

  var game = {
    initialize: function() {
      user.getName();
      var scoreboardName = document.getElementById("scoreboard-name");
      scoreboardName.innerHTML = user.name;
    },
    choose: function() {
      user.choose("Okay " + user.name + "! Please select either 'rock', 'paper', 'scissors', 'lizard', or 'Spock'.");
      sheldon.choose();
      while (user.choice[sheldon.choice] === true) {
        user.choose("It's a tie! Please select 'rock', 'paper', 'scissors', 'lizard', or 'Spock' again.");
        sheldon.choose();
      }
      return user.choice[sheldon.choice];
    },
    play: function() {
      do {
        var choices = game.choose();
        var winner = scoreboard.win(choices[1]);
        var message = choices[0] + winner;
        var result = document.getElementById("result");
        var userWins = document.getElementById("user-wins");
        var sheldonWins = document.getElementById("sheldon-wins");
        var total = document.getElementById("total");
        result.innerHTML = message;
        userWins.innerHTML = scoreboard.user;
        sheldonWins.innerHTML = scoreboard.sheldon;
        total.innerHTML = scoreboard.total;
        var replay = confirm("Sheldon challenges you to another round, " + user.name + "! Do you want to play again?");
      } while (replay);
      var bye = document.getElementById("result");
      bye.innerHTML = "Sheldon snickers at you condescendingly. 'I understand, " + user.name + ". You can't possibly match my intellectual prowess.'";
    }
  };

  // document.getElementById("rock").addEventListener("click", game.play, false);
  var initialize = document.getElementById("user-name");
  initialize.addEventListener("blur", game.initialize, false);
  initialize.addEventListener("blur", game.play, false);

})()
