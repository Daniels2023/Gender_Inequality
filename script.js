document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown element
    let dropdown = document.getElementById('dropdown');
  
    // Add event listener to the dropdown
    dropdown.addEventListener('change', function() {
      let selectedValue = dropdown.value;
  
      // Make a request to the Flask endpoint to get the filtered data
      d3.json('http://127.0.0.1:5000/data').then(function(data) {
        // Filter the data based on the selected value
        let filteredData = data.filter(item => item[2] === selectedValue);
  
        // Calculate the average of the required values
        let averageValues = filteredData.reduce((acc, item) => {
          acc[0] += item[3];
          acc[1] += item[4];
          acc[2] += item[5];
          acc[3] += item[6];
          acc[4] += item[7];
          return acc;
        }, [0, 0, 0, 0, 0]);
  
        let numDataPoints = filteredData.length;
        averageValues = averageValues.map(value => value / numDataPoints);
  
        // Create the cards with the calculated averages
        let cardNames = [
          'Seats in Parliament',
          'Female Education',
          'Male Education',
          'Female Workforce',
          'Male Workforce'
        ];
  
        let cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = '';
  
        for (let i = 0; i < cardNames.length; i++) {
          let card = document.createElement('div');
          card.classList.add('card');
          card.textContent = cardNames[i] + ': ' + averageValues[i].toFixed(2);
          cardsContainer.appendChild(card);
        }
  
        // Create the scatter plots
        createScatterPlotEducation(filteredData);
        createScatterPlotWorkforce(filteredData);
      }).catch(function(error) {
        console.error('Error:', error);
      });
    });
  
    function createScatterPlotEducation(data) {
      // Remove the existing SVG element
      d3.select('#chart-container-education').select('svg').remove();
  
      // Set up the dimensions and margins for the scatter plot
      let margin = { top: 20, right: 20, bottom: 50, left: 50 };
      let width = 800 - margin.left - margin.right;
      let height = 400 - margin.top - margin.bottom;
  
      // Create the SVG element for the scatter plot
      let svg = d3
        .select('#chart-container-education')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  
      // Set up the scales for the x and y axes
      let xScale = d3
        .scaleLinear()
        .domain([0, data.length]) // X-axis range based on the data length
        .range([0, width]);
  
      let yScale = d3
        .scaleLinear()
        .domain([0, 100]) // Y-axis range, assuming values are in the range of 0-100
        .range([height, 0]);
  
      // Create the x and y axes
      let xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
      let yAxis = d3.axisLeft(yScale);
  
      // Add the x axis to the SVG element
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .append('text')
        .attr('class', 'label')
        .attr('x', width)
        .attr('y', -6)
        .style('text-anchor', 'end')
        .text('Countries');
  
      // Add the y axis to the SVG element
      svg
        .append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('class', 'label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height/5)
        .attr('y', -50)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Percentage of total population (%)');
  
      // Add the red dots for female education
      svg
        .selectAll('.dot-red')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot-red')
        .attr('r', 5)
        .attr('cx', function(_, i) {
            return xScale(i+1); // X position based on data index
          })
          .attr('cy', function(d) {
            return yScale(d[4]); // Y position based on female education value
          })
        .style('fill', 'red');
      
      // Add the green dots for male education
      svg
        .selectAll('.dot-green')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot-green')
        .attr('r', 5)
        .attr('cx', function(_, i) {
            return xScale(i+1); // X position based on data index
          })
          .attr('cy', function(d) {
            return yScale(d[5]); // Y position based on female education value
          })
        .style('fill', 'green');
    }
  
    function createScatterPlotWorkforce(data) {
        // Remove the existing SVG element
        d3.select('#chart-container-workforce').select('svg').remove();
      
        // Set up the dimensions and margins for the scatter plot
        let margin = { top: 20, right: 20, bottom: 50, left: 50 };
        let width = 800 - margin.left - margin.right;
        let height = 400 - margin.top - margin.bottom;
      
        // Create the SVG element for the scatter plot
        let svg = d3
          .select('#chart-container-workforce')
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      
        // Set up the scales for the x and y axes
        let xScale = d3
          .scaleLinear()
          .domain([0, data.length]) // X-axis range based on the data length
          .range([0, width]);
      
        let yScale = d3
          .scaleLinear()
          .domain([0, 100]) // Y-axis range, assuming values are in the range of 0-100
          .range([height, 0]);
      
        // Create the x and y axes
        let xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
        let yAxis = d3.axisLeft(yScale);
      
        // Add the x axis to the SVG element
        svg
          .append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis)
          .append('text')
          .attr('class', 'label')
          .attr('x', width)
          .attr('y', -6)
          .style('text-anchor', 'end')
          .text('Countries');
      
        // Add the y axis to the SVG element
        svg
          .append('g')
          .attr('class', 'y axis')
          .call(yAxis)
          .append('text')
          .attr('class', 'label')
          .attr('transform', 'rotate(-90)')
          .attr('x', -height/5)
          .attr('y',-50)
          .attr('dy', '.71em')
          .style('text-anchor', 'end')
          .text('Percentage of total population (%)');
      
        // Add the red dots for female workforce
        svg
          .selectAll('.dot-red')
          .data(data)
          .enter()
          .append('circle')
          .attr('class', 'dot-red')
          .attr('r', 5)
          .attr('cx', function(_, i) {
            return xScale(i+1); // X position based on the data index
          })
          .attr('cy', function(d) {
            return yScale(d[6]); // Y position based on female workforce value
          })
          .style('fill', 'red');
      
        // Add the green dots for male workforce
        svg
          .selectAll('.dot-green')
          .data(data)
          .enter()
          .append('circle')
          .attr('class', 'dot-green')
          .attr('r', 5)
          .attr('cx', function(_, i) {
            return xScale(i+1); // X position based on the data index
          })
          .attr('cy', function(d) {
            return yScale(d[7]); // Y position based on male workforce value
          })
          .style('fill', 'green');
      }
    })