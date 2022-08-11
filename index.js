// Problem:1 radianToDegree starts here ---------------------------->

function radianToDegree (radian){
    if(typeof radian !== "number"){
        return "ERROR!! Please provide a number";
    }
    else{
        let degree = radian * (180 / Math.PI);
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        return degree;
    }
}



// Problem:2  isJavaScriptFile starts here ---------------------------->

function isJavaScriptFile (file){
    if(typeof file !== "string"){
        return "ERROR!! Please provide a valid data";
    }
    else{
        if(file.endsWith(".js") == true){
            return true;
        }
        else{
            return false;
        }
    }
}



// Problem 3: oilPrice starts here ---------------------------->

function oilPrice (dieselQuantity, petrolQuantity, octaneQuantity){
    if(typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number" || dieselQuantity < 0 || petrolQuantity < 0 || octaneQuantity < 0){
        return "ERROR!! Please provide a valid data";
    }
    else{
        const dieselPerLiter = 114;
        const petrolPerLiter = 130;
        const octanePerLiter = 135;

        const diselCost = dieselPerLiter * dieselQuantity;
        const petrolCost = petrolPerLiter * petrolQuantity;
        const octaneCost = octanePerLiter * octaneQuantity;

        const totalCost = diselCost + petrolCost + octaneCost;
        return totalCost;
    }
}



// Problem 4: publicBusFare starts here ---------------------------->

function publicBusFare (passengers){
   if(typeof passengers !== "number" || passengers < 0){
    return "ERROR!! Please provide a valid data";
   }
   else{
    const busCapacity = 50;
    const microCapacity = 11;
    const busFare = 250;

    const afterBusRemaining = passengers % busCapacity;
    const afterMicroRemaining = afterBusRemaining % microCapacity;
    const totalfare = afterMicroRemaining * busFare;
    return totalfare;
   }
}



// Problem 5: isBestFriend starts here ---------------------------->

function isBestFriend (obj1, obj2){
    if(typeof obj1 !== "object" || typeof obj2 !== "object"){
        return "ERROR!! Please provide an object";
    }
    else{
        if (obj1.name == obj2.friend && obj2.name == obj1.friend){
            return true;
        }
        else{
            return false;
        }
    }
}