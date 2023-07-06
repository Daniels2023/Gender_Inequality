//Place url in a constant variable
const url = "/data"
//Using D3 to fetch and logging it
d3.json(url).then(function(data) {
  console.log(data);
});

// Initializing the map
let map = L.map('map').setView([51.505, -0.09], 2);

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Loop through the data and create markers for each country
data.forEach(country => {
  const [hdiRank, countryName, Human_Development, Seats_in_Parliament, Female_Education, Male_Education, lat, lon] = country;
  if (lat && lon) {
  L.marker([lat, lon]).addTo(map).bindPopup(`<b>${countryName}</b><br>HDI Rank: ${hdiRank}`);
}
});
// Set up the SVG dimensions
const svgWidth = 600;
const svgHeight = 400;
const margin = { top: 20, right: 20, bottom: 40, left: 60 };
const chartWidth = svgWidth - margin.left - margin.right;
const chartHeight = svgHeight - margin.top - margin.bottom;

// Create the SVG element
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Set up the scales
const xScale = d3.scaleBand()
  .domain(data.map(country => country[1]))
  .range([margin.left, chartWidth])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, country => Math.max(country[4], country[5]))])
  .range([chartHeight, margin.top]);

// Create the bars
svg.selectAll("rect")
  .data(data)
  .enter()
// Create the bars
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", country => xScale(country[1]))
  .attr("y", country => yScale(country[4]))
  .attr("width", xScale.bandwidth())
  .attr("height", country => chartHeight - yScale(country[4]))
  .attr("fill", "steelblue");

// Add the x-axis
svg.append("g")
  .attr("transform", `translate(0, ${chartHeight})`)
  .call(d3.axisBottom(xScale))
  .selectAll("text")
  .attr("transform", "rotate(-45)")
  .style("text-anchor", "end");

// Add the y-axis
svg.append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(yScale));

// Add labels
svg.append("text")
  .attr("transform", `translate(${svgWidth / 2}, ${svgHeight - 10})`)
  .style("text-anchor", "middle")
  .text("Country");

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0)
  .attr("x", 0 - svgHeight / 2)
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Education Percentage");

  // Set up the SVG dimensions
const scatterWidth = 600;
const scatterHeight = 400;
const scatterMargin = { top: 20, right: 20, bottom: 40, left: 60 };
const scatterChartWidth = scatterWidth - scatterMargin.left - scatterMargin.right;
const scatterChartHeight = scatterHeight - scatterMargin.top - scatterMargin.bottom;

// Create the SVG element
const scatterSvg = d3.select("#scatterplot")
  .append("svg")
  .attr("width", scatterWidth)
  .attr("height", scatterHeight);

// Set up the scales
const scatterXScale = d3.scaleLinear()
  .domain([0, d3.max(data, country => Math.max(country[7], country[8]))])
  .range([scatterMargin.left, scatterChartWidth]);

const scatterYScale = d3.scaleLinear()
  .domain([0, d3.max(data, country => Math.max(country[6], country[9]))])
  .range([scatterChartHeight, scatterMargin.top]);

// Create the scatter plot points
scatterSvg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", country => scatterXScale(country[7]))
  .attr("cy", country => scatterYScale(country[6]))
  .attr("r", 5)
  .attr("fill", "steelblue");

// Add the x-axis
scatterSvg.append("g")
  .attr("transform", `translate(0, ${scatterChartHeight})`)
  .call(d3.axisBottom(scatterXScale));


// Add the y-axis
scatterSvg.append("g")
  .attr("transform", `translate(${scatterMargin.left}, 0)`)
  .call(d3.axisLeft(scatterYScale));

// Add labels
scatterSvg.append("text")
  .attr("transform", `translate(${scatterWidth / 2}, ${scatterHeight - 10})`)
  .style("text-anchor", "middle")
  .text("Male Workforce Percentage");

scatterSvg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0)
  .attr("x", 0 - scatterHeight / 2)
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Female Workforce Percentage");
