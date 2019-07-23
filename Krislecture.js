console.log('yo');


let myArray = [];

// This format is an object literal
let myObject = { // this is a container for other variables!
    propertyName: 'This is my Object',
};

//paw patrol

let chase = {
    tools: ['magnifying glass', 'Zip Line', 'Spy Drone'],
    fur: 'brown',
    uniform: 'Police Thing',
    lifeExpectancy: Infinity,
    height: 30,
    weight: 25,
    catchPhrase: 'Chase is on the Case',
};

let marshall = {
    tools:  ['water cannon', 'First Aid Kit', 'Ladder'],
    fur: 'Black and White',
    uniform: 'Fire Thing',
    lifeExpectancy: 30,
    height: 28,
    weight: 20,
    catchPhrase: `I'm fired up!`,
};

console.log('This is Chase', chase);
console.log(('This is marshall', marshall));

let pups = [ chase, marshall];

function rollCall(pupArray) {
for (let i = 0; i < pups.length; i++) {
    console.log(pups[i].catchPhrase); // this is called dot notation
    pupArray[i].idNumber = i + 1; //equal sign not colon!!!
    console.log(pupArray[i].idNumber);
    
}
    //loop through our pups array
    //and log their catch phrases
    //also add a number to each pup
}

rollCall(pups);

//Constructor function.  It is his job to take all of the values
//that i want and spit out an object with those properties.

//return a new object from the vales given!

function PawPatrolPup(tools, fur, uniform, lifeExpectancy, height, weight, catchPhrase) {
        //this. means "this very object we're making right now"
        this.tools = tools;
        this.fur = fur;
        this.uniform = uniform
        this.lifeExpectancy = lifeExpectancy
        this.height = height
        this.weight = weight
        this.catchPhrase = catchPhrase

        //return happens for us!  we don't need to write out return!
    };

let realChase = new PawPatrolPup(['magnifying glass', 'Zip Line', 'Spy Drone'],
    'brown',
    'Police Thing',
    Infinity,
    30,
    25,
    'Chase is on the Case ',
)

//more tools
realChase.tools.push('Sticky Shoes');

let realMarshall = new PawPatrolPup(['water cannon', 'First Aid Kit', 'Ladder'],
    'Black and White',
    'Fire Thing',
    30,
    28,
    20,
    `I'm fired up!`, )


console.log(realChase);



 

