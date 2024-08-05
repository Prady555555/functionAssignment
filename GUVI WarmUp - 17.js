/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	// 	d = √((x2 - x1)² + (y2 - y1)²
	let x = Math.pow(x2 - x1, 2)
	let y = Math.pow(y2 - y1, 2)
	let z = Math.sqrt(x + y)
	let v = Math.floor(z)
	return v
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/