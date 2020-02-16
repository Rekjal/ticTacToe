
  
  class Player {
    constructor(mark){
      this.mark = mark;
    }
  
    mark() {
      console.log(this.mark);
    }
  }
  
  class Space {
    constructor(options){

    }
  }

  
  // board logic
  class Board {
    constructor(){
    this.board = [['-'],['|'],['-'],['|'],['-'],
    ['-'],['|'],['-'],['|'],['-'],
    ['-'],['|'],['-'],['|'],['-']
    ];
    };
  
    drawBoard(){
      $('.board').append(this.board);
    }
  }

  class Game {
    constructor(){
      this.board = new Board();
      this.players = [
        new Player("x"),
        new Player("o")
      ]
    }
  }

  
  board1 = new Board();
  
  $(document).ready(function () {
// $('cell').each(function(el){
//   if(el == ''){
    let player2 = '';
    let mark = prompt('Please choose X or O').toUpperCase();
    if(mark === 'X'){
      player2 = 'O'
    } else {
      player2 = 'X'
    };

    var randomNo = function() {
      return Math.floor((Math.random() * 8) + 1); //Random no generator from 1-8.
    };

     
    const boardState = ['','','','','','','','',''];

    const computerTurn = function(){
      var space = randomNo();
      while(boardState[space] !== '') {
          space = randomNo();
          console.log(`Inside while boardstate is ${boardState[space]} and random number is ${space}`);
        }
       
            console.log("space is " + space);
          $('#' +  space).append(player2);
          boardState[space] = player2;

        

    }
  
    $('.cell').each(function(el){
      $('#' + el).click(function(){
        if(!boardState[el]){
          $('#' + el).append(mark);
          boardState[el] = mark;
          console.log("mark is " + mark);
          console.log("player2 is " + player2);

          if(boardState.includes('')){
            computerTurn();
          }

          // boardState.each(function(el2){
          //   if(boardState[el2] != 'X' || 'O'){
          //     computerTurn();
          //  }
          // })
          
          }
          console.log(boardState);
          })
      })
    // $('#0').click(function(){
    //   if(!boardState[0]){
    //   $('#0').append(mark);
    //   boardState[0] = mark;
    //   console.log(mark);
    //   console.log(player2);
    //   computerTurn();
    //   }
    // })
    // $('#1').click(function(){
    //   if(!boardState[1]){
    //   $('#1').append(mark);
    //   boardState[1] = mark;
    //   computerTurn();

    //   }
    // })
    // $('#2').click(function(){
    //   if(!boardState[2]){
    //   $('#2').append(mark);
    //   boardState[2] = mark;
    //   computerTurn();

    //   }
    // })
    // $('#3').click(function(){
    //   if(!boardState[3]){
    //   $('#3').append(mark);
    //   boardState[3] = mark;
    //   computerTurn();

    //   }
    // })
    // $('#4').click(function(){
    //   if(!boardState[4]){
    //   $('#4').append(mark);
    //   boardState[4] = mark;
    //   computerTurn();

    //   }
    // })
    // $('#5').click(function(){
    //   if(!boardState[5]){
    //   $('#5').append(mark);
    //   boardState[5] = mark;
    //   computerTurn();

    //   }
    // })
    // $('#6').click(function(){
    //   if(!boardState[6]){
    //   $('#6').append(mark);
    //   boardState[6] = mark;
    //   computerTurn();

    //   }
    // })
    // $('#7').click(function(){
    //     if(!boardState[7]){
    //     $('#7').append(mark);
    //     boardState[7] = mark;
    //     computerTurn();

    //     }
    //   })

    //   $('#8').click(function(){
    //     if(!boardState[8]){
    //     $('#8').append(mark);
    //     boardState[8] = mark;
    //     computerTurn();

    //     }
      
      

    
  
    // else {
    //   alert('error')
    // };
  // });
//$("#header").click(function () {
    //$(".board").append(`${board1.board[0]}${board1.board[1]} ${board1.board[2]}${board1.board[3]}${board1.board[4]}<br>${board1.board[5]}${board1.board[6]} ${board1.board[7]}${board1.board[8]}${board1.board[9]}<br>${board1.board[10]}${board1.board[11]} ${board1.board[12]}${board1.board[13]}${board1.board[14]}<br>
});




// });




