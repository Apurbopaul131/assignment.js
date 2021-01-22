function kilometerToMeter(kiloMeter){
    if(kiloMeter<0)
    {
        return "Distance can not be neagative.";
    }
    else{
        var meter = kiloMeter * 1000;
        return meter;
    }
}
var resultMeter = kilometerToMeter(10);
console.log("The meter is= ",resultMeter);