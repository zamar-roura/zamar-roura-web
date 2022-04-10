import  { React,useEffect }  from 'react';
import styles from './WordCloud.module.css';
import useScript from '../../hooks/useScript';

function playlist(){
  fetch("http://79.116.45.242:3000/37i9dQZEVXbNFJfN1Vw8d9").then(function(response) {
    return response.text().then(function(myWords_str) {
    var myWords = JSON.parse(myWords_str);
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = window.d3.select("#my_dataviz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

  // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
  // Wordcloud features that are different from one word to the other must be here
  var layout = window.d3.layout.cloud()
    .size([width, height])
    .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
    .padding(10)        //space between words
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .fontSize(function(d) { return d.size * 1; })      // font size of words
    .on("end", draw);
  layout.start();

  // This function takes the output of 'layout' above and draw the words
  // Wordcloud features that are THE SAME from one word to the other can be here
  function draw(words) {
    svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function(d) { return d.size; })
      .style("fill", "#69b3a2")
      .attr("text-anchor", "middle")
      .style("font-family", "Impact")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
  }
    });
  });
}
const WordCloud = () => {
  useScript("https://d3js.org/d3.v7.min.js");
  useScript("https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/d3.layout.cloud.js");
 
  return (
    <div>
    <button onClick={playlist}>Click here</button>
    <div id="my_dataviz"></div>
    </div>
  )

};

WordCloud.propTypes = {};

WordCloud.defaultProps = {};

export default WordCloud;
