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
    let firstElement = userArray[userArray.length - 1];

    for (let i = userArray.length - 1; i > 0; i--)
    {
        userArray[i] = userArray[i - 1];
    }

    userArray[0] = firstElement;
}

// function for shift to the left elements of array
function shiftLeft(userArray)
{
    let lastElement = userArray[0];
    
    for (let i = 0; i < userArray.length; i++)
    {
        userArray[i] = userArray[i + 1];
    }

    userArray[userArray.length - 1] = lastElement;
}

// function for swap numbers neighboring indices
function swapIndex(userArray)
{
    for (let i = 0; i < userArray.length; i++)
    {
        let temp = userArray[i];
        let j = [i + 1];

        userArray[i] = userArray[j];
        userArray[j] = temp;

        i++;
    }
}

function main()
{
    const arraySize = 20;
    const userArray = new Array(arraySize);

    createArray(userArray, -20, 20);
    printArray(userArray);

    shiftRight(userArray);
    printArray(userArray);

    shiftLeft(userArray);
    printArray(userArray);

    swapIndex(userArray);
    printArray(userArray);
}
main();