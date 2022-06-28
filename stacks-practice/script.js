const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start Page';
// ------------------------------
// Helper Functions
// ------------------------------
showCurrentPage = (action) =>{
  console.log(`\n${action}`);
  console.log(`Current Page: ${currentPage}`);
  console.log(backPages.peek());
  console.log(nextPages.peek());
}

newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()){
    nextPages.pop();
  }
  showCurrentPage('NEW: ');
}

backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage('BACK: ');
}

nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage('NEXT: ');
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '
let finish = false;
let showBack = false;
let showNext = false;
// ------------------------------
// User Interface Part 1
// ------------------------------
showCurrentPage("DEFAULT: ");
while(!finish){
  let instructions = baseInfo;
  if (!backPages.isEmpty()){
    showBack = true;
    instructions = `${instructions}, ${backInfo}`;
  } else {
    showBack = false;
  }
  if (!nextPages.isEmpty()){
    showNext = true;
    instructions = `${instructions}, ${nextInfo}`;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}`;
  console.log(instructions);

  const answer = prompt(question); 
  const lowerCaseAnswer = answer.toLowerCase()

  if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')){
    newPage(answer);
  } else if ((showBack) && (lowerCaseAnswer === 'b')){
    backPage();
  } else if ((showNext) && (lowerCaseAnswer === 'n')){
    nextPage();
  } else if ((!showBack) && (lowerCaseAnswer === 'b')){
    console.log('You cannot go back.');
  } else if ((!showNext) && (lowerCaseAnswer === 'n')){
    console.log("You cannot go forward.");
  } else if (lowerCaseAnswer === 'q'){
    finish = true;
  }
}
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
