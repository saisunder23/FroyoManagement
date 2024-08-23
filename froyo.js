// Example hardcoded input, replace this with actual input if needed
let userInput = "chocolate, vanilla, strawberry, vanilla";  // 1) Hardcoded user input for Froyo flavors

// Split the user's input string into an array of strings 
let flavorsArray = userInput.split(','); 

// Creating object to count orders of each flavor 
let flavorCounts = {}; 

// Creating loop that will go through each flavor in array 
// Initialize the variable "i" starting at 0 
for (let i = 0; i < flavorsArray.length; i++) {

    // Trimming extra spaces for each "flavor", as users might enter "chocolate " for example
    let flavor = flavorsArray[i].trim(); 

    // Count the number of each flavor 
    if (flavorCounts[flavor]) {  
        // If the flavor exists then add 1 
        flavorCounts[flavor]++; 
    } else { 
        // If the flavor doesn't exist then set it to 1 
        flavorCounts[flavor] = 1;  
    }
}

// Display results in console using console.table()
console.table(flavorCounts);
