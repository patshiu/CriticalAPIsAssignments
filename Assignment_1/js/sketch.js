/*
Critical APIs — Assignment 1
CitiBike Station Checked-In Bikes Visualization 
Pat Shiu | Apr 2015

*/


//var endPoint = 'http://www.citibikenyc.com/stations/json/'; 
var endPoint = './data/citibikes.json'
var bikeJSON; 
var allStations; 

/*
STYLING
http://www.colourlovers.com/palette/514032/citibank 
*/
var citiBlueDark;//'#010358'
var citiBlueMed; //'#365B98'
var citiBlueLight; //'#6AB3D9'
var citiWhite; //'#F2F2F2'
var citiRed; //'#D81C1C'		

var multiplier = 4;

function preload() {
	// bikeJSON = loadJSON(endPoint);
	bikeJSON = loadJSON(endPoint);
	allStations = bikeJSON.stationBeanList; 

	/*
	STYLING
	http://www.colourlovers.com/palette/514032/citibank 
	*/
	citiBlueDark = color(1,3,88); //'#010358'
	citiBlueMed = color(54,91,152); //'#365B98'
	citiBlueLight = color(106,179,217); //'#6AB3D9'
	citiWhite = color(242,242,242); //'#F2F2F2'
	citiRed = color(216,28,28); //'#D81C1C'	
}



function drawChart() {
	allStations = bikeJSON.stationBeanList; 
	for (var i = 0; i < allStations.length; i++) {	
		var currentStation = allStations[i];
		var availDocks = currentStation.availableDocks;
		var totalDocks = currentStation.totalDocks;
		var availBikes = currentStation.availableBikes;
		var x = map(i, 0, allStations.length, 50, width - 50);
		var y = height/2;
		var w = (width - 50)/allStations.length - 2;
		//Draw rect for totalDocks
		noStroke();
		fill(citiRed);
		rect(x, y, w, -totalDocks*multiplier)
		//Draw rect for Available Docks
		noStroke();
		fill(citiWhite);
		//rect(x, y, w, -availDocks*multiplier)
		rect(x,y,w, -availBikes*multiplier);
	} 
};

function drawLabels() {
	noStroke();
	fill(citiWhite);
	textSize(32);
	text("citi bikes", 50, 80); 

	//Legend
	textSize(16);
	var rectSize = 20;
	fill(citiRed);
	rect(50, height - 320 - rectSize + 5, rectSize, rectSize);
	fill(citiWhite);
	text("available docks", 50 + rectSize + 10, height - 320); 
	fill(citiWhite);
	rect(50, height - 290 - rectSize + 5, rectSize, rectSize);
	fill(citiWhite);
	text("available bikes", 50 + rectSize + 10, height - 290); 
};

function setup() {
	createCanvas(windowWidth, 720);
	background(citiBlueDark);
	drawChart();
	drawLabels();
}



function draw() {
  // put drawing code here
}