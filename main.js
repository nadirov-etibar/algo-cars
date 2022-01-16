let n = 6;
let cars = [6, 2, 12, 2, 7, 6];
let k = 3;

let lengthOfRoof = [];

let output = document.getElementById("a");

let sortArr = (arr) => {
    for(let i = 0; i <= n; i++){ 
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }

    getUnique(arr);
    return arr;
}

let getUnique = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            arr.splice(i, 1);
        }
    }

    return arr;
}

let getArrLength = (arrCars) => {
    for(let i = 0; i <= arrCars.length; i++){
        if(typeof arrCars[i+k-1] !== "undefined"){
           lengthOfRoof.push(arrCars[i + k - 1] - arrCars[i] + 1);
        }
    }

    sortArr(lengthOfRoof);
    output.innerText = lengthOfRoof[0];
}



getArrLength(sortArr(cars));