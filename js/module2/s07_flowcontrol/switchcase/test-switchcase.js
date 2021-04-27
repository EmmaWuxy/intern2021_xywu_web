/*
test switch case

*/


function mytestObject() {
    const choice = {'name':'Peter', 'age':20};
  
    switch (choice) {
      case 'sunny':
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
        break;
      case 'rainy':
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
        break;
      
      default:
        para.textContent = '';
    }
  }

  function mytestString() {
    const choice = 'sunny';
  
    switch (choice) {
      case 'sunny':
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
        break;
      case 'rainy':
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
        break;
      
      default:
        para.textContent = '';
    }
  }


  mytestObject();
  mytestString();


  