const width = window.innerWidth
const height = window.innerHeight
const margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  };

    const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

var data = './moviesCleaned.csv'

Promise.all([
    d3.csv(data), //data
  ])
  .then(([moviesData]) => {
    console.log(moviesData)

});

var data1 = [22,17,28,55];

svg.selectAll('rect')
    .data(data1)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        return i * (width / data1.length);
    }
    )
    .attr('y', 100)
    .attr('width', 50)
    .attr('height', (d, i) => {
        return d * 4;
    }
    )
    .attr('fill', '#FFC312');
