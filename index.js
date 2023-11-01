
                                    // object containing potential inputs



// make a prompt asking the user to input the order information
// added a default input to test the function
// the .split method translates the string here into an array with its own index
// the (`,`) is the catalyst that triggers the .split method to activate
const flavorInput = prompt (`Please enter the flavors you would like; each seperated by a (,) comma.`, 
                          `vanilla, vanilla, vanilla, strawberry, coffee, coffee`).split(`,`) 



    

// make for loop to define index then set 'if' statments to do the rest

for (let i = 0; i < flavorInput.length; i++) {    // length is however many inputs the user providess
    // object to store the users input?
    let flavors = {};  
    
    if (!flavors[flavorInput[i]]) {
       console.log(`You have not provided any valid inputs`); 

    } else { (flavors[flavorInput[i]+=1]);
        console.log(flavors)
 
    }

}



// ok i straight up got lost at this point - 
// i tried console logging the `flavors` object but its just giving me my defualt `no input` string i gave it
// i honsestly dont know the thoery well enough to be sure if ive done this right

// i can get the inputs on the console if i cheese it and console.log the prompt directly - 
// but i know that wasnt the point of the assignment

// this JS stuff has got me feeling soooo dumb man ha.....










