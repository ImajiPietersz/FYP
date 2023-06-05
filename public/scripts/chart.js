// Function to generate the list of numbers
function generateNumberList() {
  var numberList = [];
  
  for (var i = 0; i <= 600; i++) {
    if (i % 100 === 0) {
      numberList.push(i);
    } else {
      numberList.push("");
    }
  }
  console.log(numberList);  
  return numberList;
}

function generateRandomArray() {
  var randomNumbers = [];
  for (var i = 0; i < 600; i++) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}
function generateRandomArray50() {
  var randomNumbers = [];
  for (var i = 0; i < 600; i++) {
    var randomNumber = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}


// Define the setup section
const labels = generateNumberList();
const data = {
  labels: labels,
  datasets: [{
    label: 'Input',
    data: generateRandomArray(),
    fill: false,
    borderColor: 'red',
    borderWidth:0.5,
    pointRadius: 0,
    tension: 0.1
  },{
    label: 'Machine 1',
    data: generateRandomArray50(),
    fill: false,
    borderColor: 'blue',
    borderWidth:0.5,
    pointRadius: 0,
    tension: 0.1
  }]
};
      
// Define the config section
const config = {
  type: 'line',
  data: data,
  responsive:true
};

// Create a new chart instance
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);
const Chart = () => {
  return ( 
    // Function to generate the list of numbers
function generateNumberList() {
  var numberList = [];
  
  for (var i = 0; i <= 600; i++) {
    if (i % 100 === 0) {
      numberList.push(i);
    } else {
      numberList.push("");
    }
  }
  console.log(numberList);  
  return numberList;
}

function generateRandomArray() {
  var randomNumbers = [];
  for (var i = 0; i < 600; i++) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}
function generateRandomArray50() {
  var randomNumbers = [];
  for (var i = 0; i < 600; i++) {
    var randomNumber = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}


// Define the setup section
const labels = generateNumberList();
const data = {
  labels: labels,
  datasets: [{
    label: 'Input',
    data: generateRandomArray(),
    fill: false,
    borderColor: 'red',
    borderWidth:0.5,
    pointRadius: 0,
    tension: 0.1
  },{
    label: 'Machine 1',
    data: generateRandomArray50(),
    fill: false,
    borderColor: 'blue',
    borderWidth:0.5,
    pointRadius: 0,
    tension: 0.1
  }]
};
      
// Define the config section
const config = {
  type: 'line',
  data: data,
  responsive:true
};

// Create a new chart instance
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);
   );
}
 
export default Chart;