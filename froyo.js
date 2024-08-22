// 1) Ask the user for their Froyo flavors 

let userInput = prompt("What are your desired Froyo flavors? Please separate them by a comma");


//  Split the user's input string into an array of strings 

let flavorsArray = userInput.split(',');

// Creating object to count orders of each flavor 
let flavorCounts = {}; 


// Creating loop that will go through each flavor in array 

//  initialize the variable "i" starting at 0 
for (let i = 0; 
    i < flavorsArray.length; // i will keep running, as long as i is less than length of array
    i++ ) // iterating by 1 each time, until it is flavorsArray.length

    //  trimming extra spaces for each "flavor", i. Users might enter "chocolate " for example
    { let flavor = flavorsArray[i].trim(); 

// Count the number of each flavor 
    if (flavorCounts[flavor])  // checking for flavor in flavorCounts object 
    
    {
    flavorCounts[flavor]++; } // if the flavor exists then it adds 1 

    else 

    {flavorCounts[flavor] = 1;  // if the flavor doesn't exist then it is just 1 

    }
}

// Display results in console 

console.log("Froyo flavor counts:" flavorCounts);

