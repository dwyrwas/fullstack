const getSleepHours = day => {
  switch (day){
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  };
};

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Looks like you needed the extra rest...');
    console.log('You are ' + (actualSleepHours - idealSleepHours) + ' hour(s) over rested.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You really need to get some sleep!');
    console.log('You are ' + (idealSleepHours - actualSleepHours) + ' hour(s) under rested.');
  }
};

calculateSleepDebt();
