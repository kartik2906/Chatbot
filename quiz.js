(function() {

    

var qCounter = 0; 

  var selections = [];

  var quiz = $('#quiz'); 

 

    

  var questions = [{

       

    question: "What is a x cordinate in a graph?",

    choices: ["Verticle", "horizontal"],

    correctAnswer: 1

  }, {

    question: "What is the distance of (9,3) and (7,2)?",

    choices: [4, 5, 9.1, 12, 7.8],

    correctAnswer: 4

  }, {

    question: "What is distance of (6,7) and (4,6)?",

    choices: [2.2, 5.3, 8, 9, 1],

    correctAnswer: 0

  }, {

    question: "What is distance of (15,8) and (10,4)?",

    choices: [9.2, 2, 8, 6.4, 9],

    correctAnswer: 3

  },];

  



  

  // Display initial question

  displayNext();



  // Click handler for the 'next' button

  $('#next').on('click', function (e) {

    e.preventDefault();

    

    choose();

    

    // If no user selection, progress is stopped

    if (isNaN(selections[qCounter])) {

      alert('Please make a selection!');

    } else {

      qCounter++;

      displayNext();

    }

  });

   

 

  function createQuestionElement(index) {

    var qElement = $('<div>', {

      id: 'question'

    });

    

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');

    qElement.append(header);

    

    var question = $('<p>').append(questions[index].question);

    qElement.append(question);

    

    radioButtons =  createRadios(index);

    qElement.append(radioButtons);

    

    return qElement;

  }

  

  // Creates a list of the answer choices as radio inputs

  function createRadios(index) {

    var radioList = $('<ul>');

    var item;

    var input = '';

      for (var i = 0; i < questions[index].choices.length; i++) {

      item = $('<li>');

      input = '<input type="radio" name="answer" value=' + i + ' />';

      input += questions[index].choices[i];

      item.append(input);

      radioList.append(item);

          

    }

    return radioList;

  }

  

  // Reads the user selection and pushes the value to an array

 function choose() {

    selections[qCounter] = + $('input[name="answer"]:checked').val();

  }

  

  // Displays next requested element

function displayNext() {

    quiz.fadeOut(function() {

     // $('#question').remove();

      

      if(qCounter < questions.length){

        var nextQuestion = createQuestionElement(qCounter);

        quiz.append(nextQuestion).fadeIn();

        

     }

        else {

        var scoreElem = displayScore();

        quiz.append(scoreElem).fadeIn();

        $('#next').hide();

        $('#prev').hide();

        $('#start').show();

     }

    });

  }

  

  // Computes score and returns a paragraph element to be displayed

  function displayScore() {

    var score = $('<p>',{id: 'question'});

    

    var numCorrect = 0;

    for (var i = 0; i < selections.length; i++) {

      if (selections[i] === questions[i].correctAnswer) {

        numCorrect++;

      }

    }

    

    score.append(' ' + numCorrect + ' questions out of ' +

                 questions.length + ' right!!!');

    return score;

  }

})();

 

 