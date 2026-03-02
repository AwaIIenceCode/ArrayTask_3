// functioin for creating array 
function createArray(userArray, min, max)
{
    for (let i = 0; i < userArray.length; i++)
    {
        userArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// function for writing array
function printArray(userArray)
{
    console.log(`\nYour full array => ${userArray.join(", ")}`);
}

// function for shift to the right elements of array
function shiftRight(userArray)
{   
    let lastElement = userArray[userArray.length - 1];

    for (let i = userArray.length - 1; i > 0; i--)
    {
        userArray[i] = userArray[i - 1];
    }

    userArray[0] = lastElement;
}

function main()
{
    const arraySize = 20;
    const userArray = new Array(arraySize);

    createArray(userArray, -20, 20);
    printArray(userArray);

    shiftRight(userArray);
    printArray(userArray);
}

main();