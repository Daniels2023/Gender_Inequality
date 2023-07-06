document.addEventListener('DOMContentLoaded', function() {
  // Get the dropdown element
  var dropdown = document.getElementById('dropdown');

  // Add event listener to the dropdown
  dropdown.addEventListener('change', function() {
      var selectedValue = dropdown.value;

      // Make a request to the Flask endpoint to get the filtered data
      fetch('http://127.0.0.1:5000/data')
          .then(response => response.json())
          .then(data => {
              // Filter the data based on the selected value
              var filteredData = data.filter(item => item[2] === selectedValue);

              // Calculate the average of the required values
              var averageValues = filteredData.reduce((acc, item) => {
                  acc[0] += item[3];
                  acc[1] += item[4];
                  acc[2] += item[5];
                  acc[3] += item[6];
                  acc[4] += item[7];
                  return acc;
              }, [0, 0, 0, 0, 0]);

              var numDataPoints = filteredData.length;
              averageValues = averageValues.map(value => value / numDataPoints);

              // Create the cards with the calculated averages
              var cardNames = [
                  'Seats in Parliament',
                  'Female Education',
                  'Male Education',
                  'Female Workforce',
                  'Male Workforce'
              ];

              var cardsContainer = document.getElementById('cards-container');
              cardsContainer.innerHTML = '';

              for (var i = 0; i < cardNames.length; i++) {
                  var card = document.createElement('div');
                  card.classList.add('card');
                  card.textContent = cardNames[i] + ': ' + averageValues[i].toFixed(2);
                  cardsContainer.appendChild(card);
              }
          })
          .catch(error => {
              console.error('Error:', error);
          });
  });
});