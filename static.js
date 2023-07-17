const url = "http://127.0.0.1:5000/data";
const numCountries = 10;

// Function to create a bar chart
function createBarChart(attribute, attributeIndex, svgWidth, chartTitle, yAxisLabel) {
  d3.json(url).then(function(data) {
    data.sort((a, b) => a[attributeIndex] - b[attributeIndex]);

    const relevantData = data.slice(0, numCountries);

    const xScaleBar = d3.scaleBand()
      .domain(relevantData.map(d => d[1]))
      .range([50, 750])
      .padding(0.1);

    const yScaleBar = d3.scaleLinear()
      .domain([0, d3.max(relevantData, d => d[attributeIndex])])
      .range([300, 50]);

    const svgBar = d3.select("#chart-container")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", 700);

    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    var tooltip2 = d3.select("body").append("div")
      .attr("class", "tooltip2")
      .style("opacity", 0);

    // Define color categories and their labels
    const colorCategories = [ 'very-high', 'high', 'medium', 'low'];
    const colorLabels = [ 'Very-High', 'High Development', 'Medium Development', 'Low Development'];

    // Define color scale
    const colorScale = d3.scaleOrdinal()
        .domain(colorCategories)
        .range(['rgb(9, 0, 128)','rgb(39, 192, 25)', 'rgb(211, 228, 22)', 'rgb(229, 60, 60)']);
        
    // Create bars
    svgBar.selectAll(".bar")
      .data(relevantData)
      .enter()
      .append("rect")
      .attr("class", d => "bar " + d[2].toLowerCase())
      .attr("x", d => xScaleBar(d[1]))
      .attr("y", d => yScaleBar(d[attributeIndex]))
      .attr("width", xScaleBar.bandwidth())
      .attr("height", d => 300 - yScaleBar(d[attributeIndex]))
      .attr("fill", colorScale(d => d[2].toLowerCase()))
      .on("mouseover", function(event, d) {
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        tooltip.html("Country: " + d[1] + "<br/>" +
          "HD Index : " + d[0] + "<br/>" +
          "Development Level: " + d[2] + "<br/>" +
          "Female Education: " + d[4] + "%" + "<br/>" +
          "Male Education: " + d[5] + "%" + "<br/>" +
          "Female Workforce: " + d[6] + "%" + "<br/>" +
          "Male Workforce: " + d[7] + "%" + "<br/>" +
          "Seats in Parliament: " + d[3] + "%")
          .style("left", (d3.pointer(event)[0] + 200) + "px")
          .style("top", (d3.pointer(event)[1]) + "px");
      })
      .on("mouseout", function(event, d) {
        tooltip.transition()
          .duration(600)
          .style("opacity", 0);
      });
    // Create the legend
    const legend = svgBar.selectAll('.legend')
      .data(colorScale.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(0,${i * 20})`);

    // Add the colored squares to the legend
    legend.append('rect')
      .attr('x', svgWidth - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', colorScale);

    // Add the text to the legend
    legend.append('text')
      .attr('x', svgWidth - 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text((d, i) => colorLabels[i]);

    svgBar.append("g")
      .attr("transform", "translate(0, 300)")
      .call(d3.axisBottom(xScaleBar))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");

    // Add axes to the bar chart
    svgBar.append("g")
      .attr("transform", "translate(50, 0)")
      .call(d3.axisLeft(yScaleBar));

    // Add axis labels
    svgBar.append("text")
      .attr("x", 350)
      .attr("y", 400)
      .attr("text-anchor", "middle")
      .text("Country");

    svgBar.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -180)
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .text(yAxisLabel);

    // Add label for the chart
    svgBar.append("text")
      .attr("x", 400)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .text(chartTitle);
  });
}


// Use function to create charts
createBarChart('Female_Workforce', 6, 1200, 'A Look at Female Workforce Participation: The 10 Lowest Countries', 'Female Labor Force Participation Rate (%)');
createBarChart('Percentage of Educated Women', 4, 1200, 'Countries with the Lowest Rates of Female Education: The 10 Lowest Countries', 'Female Education (%)');
