
var hello = "Hello!";
console.log("This is good for debugging " + hello);

function print3ways(){
    alert("Hello World!");
    console.log("printing to console");
    document.write("this will re-write the html page");
}
const arr = [1, 5, 28, 43, 33, 13, 12];
function funWithArrays(){
    document.write("Sum = " + getSum() + "<br>");
    document.write("Min = " + findMin() + "<br>");
    document.write("Max = " + findMax() + "<br>");
    document.write("Average = " + average() + "<br>");

}

function getSum(){
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

function findMin(){
    var min=0;
    let minspot = 0;
    for(let i=1; i<arr.length+1; i++){
        if(arr[i]<=arr[minspot]){
            minspot = i
        }
    }
    min = arr[minspot];
    return min;
}

function findMax(){
    var max = 0;
    for(let i=1; i<arr.length+1; i++){
        if(arr[i]>=arr[i-1]){
            max = arr[i]
        }
    }
    return max;
}

function average(){
    var avg = 0;
    let sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    avg = sum/i;
    return avg;
}