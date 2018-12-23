var character;
var labyrinthe;
let characterPos = {x: 0, y: 0};
var combination = [  // Arrays for combination of div border 
  ["ltr","lt","tb","tb","t","tb","t","tb","tr","lt","tr","lt","tb","tbr"], 
  ["lrm","lr","lt","tr","lr","ltb","br","ltr","lb","r","lr","lb","tr","ltr"], 
  ["lb","a","br","lr","lr","lt","tb","b","tr","lbr","lb","tr","l","r"], 
  ["ltr","lb","tr","lr","lr","lr","ltb","tr","lb","tr","lt","br","lr","lr"], 
  ["lr","ltr","lr","lr","lbr","lb","tb","br","lt","br","l","tb","br","lr"], 
  ["lr","lb","br","lb","tb","tb","tb","tb","br","ltr","lbr","lt","t","br"], 
  ["lr","lt","tb","tr","lt","tr","lt","t","tr","lb","tb","r","lr","ltr"], 
  ["lr","lr","lt","r","lr","lr","lr","lr","lb","tb","tb","br","lb","r"], 
  ["l","r","lbr","lb","br","lr","lbr","lb","tb","tr","lt","tr","ltr","lr"], 
  ["lr","lr","lt","tr","ltr","lb","tb","tb","tb","br","lr","lr","lr","lr"], 
  ["lr","lb","br","lb","b","tb","t","tb","tb","tb","r","lr","lr","lr"], 
  ["lb","tb","tb","tb","tb","tbr","lb","tb","tb","tb","br","lr","lb","br"]
];




// Enter the game when pressing enter, if not already in it
oxo.inputs.listenKey('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
  }
});


function game() {
  labyrinthe = document.getElementById('labyrinthe');
  characterPos = {x: 0, y: 0};
  oxo.player.setScore(0);
  character = document.getElementById('character'); // Get the character element
  oxo.inputs.listenKey('up', function(key) {
    if (combination[characterPos.y][characterPos.x].indexOf("t") < 0) {
      oxo.animation.move(character, 'up', 36);
      characterPos.y--;
    } 
    console.log("key:"+key); // left, up, right or down;
    console.log(characterPos.x);
    console.log(characterPos.y);
  });
  
  oxo.inputs.listenKey('down', function(key) {
    if (combination[characterPos.y][characterPos.x].indexOf("b") < 0 ) {
      oxo.animation.move(character, 'down', 36);
      characterPos.y++;
    }
    if (oxo.screens.getCurrentScreen !== 'end' && characterPos.y > 11) {
      oxo.screens.loadScreen('end', end);
    }
    console.log("key:"+key); // left, up, right or down;
    console.log(characterPos.x);
    console.log(characterPos.y);
  });
  
  oxo.inputs.listenKey('left', function(key) {
    if (combination[characterPos.y][characterPos.x].indexOf("l") < 0 ) {
      oxo.animation.move(character, 'left', 36);
      characterPos.x--;
    }
    console.log("key:"+key); // left, up, right or down;
    console.log(characterPos.x);
    console.log(characterPos.y);
    if (characterPos.x === 6 && characterPos.y === 3) {
      let allCells = document.querySelectorAll('.labyrinthe__cell');
      for(let jeej = 0; jeej < allCells.length; jeej++){
        if(allCells[jeej].classList.contains("cell--top")){
          allCells[jeej].classList.toggle('horizontalTop');
        }
        if(allCells[jeej].classList.contains("cell--bottom")){
          allCells[jeej].classList.toggle('horizontalBottom');
        }
        allCells[jeej].classList.toggle('horizontal');
      }
      //labyrinthe.classList.toggle('horizontal');
    } 
  });
  
  oxo.inputs.listenKey('right', function(key) {
    if (combination[characterPos.y][characterPos.x].indexOf("r") < 0 ) {
      oxo.animation.move(character, 'right', 36);
      characterPos.x++;
    }
    console.log("key:"+key); 
    console.log(characterPos.x);
    console.log(characterPos.y);
    if (characterPos.x === 5 && characterPos.y === 11) {
      let allCells = document.querySelectorAll('.labyrinthe__cell');
      for(let jeej = 0; jeej < allCells.length; jeej++){
        if(allCells[jeej].classList.contains("cell--top")){
          allCells[jeej].classList.toggle('horizontalTop');
        }
        if(allCells[jeej].classList.contains("cell--bottom")){
          allCells[jeej].classList.toggle('horizontalBottom');
        }
        allCells[jeej].classList.toggle('horizontal');
      }
      //labyrinthe.classList.toggle('horizontal');
  } 
  if (characterPos.x === 9 && characterPos.y === 10) {
      window.alert("En raison d'un colis suspect, votre progression est ralenti !");
      labyrinthe.classList.toggle('slow');
  }   
});
}


// load the win page 
function end() {
  oxo.screens.loadScreen('end');
}
