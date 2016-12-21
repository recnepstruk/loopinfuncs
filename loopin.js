var animals = ["rat", "cat", "butterfly", "marmot", "ocelot"];



//rat cat butterfly marmot
for(var i = 0; i < animals.length -1; i++){
	console.log("First loop: " + animals[i]);
}
//rat butterfly ocelot
for(var i = 0; i < animals.length; i += 2){
	console.log("Every other: " + animals[i]);
}
//ocelot marmot butterfly cat rat
for(var i = animals.length-1; i >= 0 ; i--){
	console.log("Reverse: " + animals[i]);
}
//rat cat cat butterfly butterfly marmot marmot ocelot
var aMinals = [];
for(var i = 0; i < animals.length; i++){
	if(animals[i] == "rat"){
		aMinals.push(animals[i]);
	} else if (animals[i] == "cat") {
		aMinals.push(animals[i], animals[i]);
	} else if (animals[i] == "butterfly") {
		aMinals.push(animals[i], animals[i]);		
	} else if (animals[i] == "marmot") {
		aMinals.push(animals[i], animals[i]);		
	} else {
		aMinals.push(animals[i]);				
	}
}
console.log(aMinals.join(" "));

//rat cat cat butterfly butterfly marmot marmot ocelot
//using logical operators
var aMinals = [];
for(var i = 0; i < animals.length; i++){
	if (animals[i] == "cat" || animals[i] == "butterfly" || animals[i] == "marmot") {
		aMinals.push(animals[i], animals[i]);		
	} else {
		aMinals.push(animals[i]);			
	}
}
console.log(aMinals.join(" "));