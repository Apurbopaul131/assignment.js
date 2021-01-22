// // first programe start
function kilometerToMeter(kiloMeter){
    if(kiloMeter<0)
    {
        return "Distance cannot be negative";// Adding for bonus mark.
    }
    else{
        var meter = kiloMeter * 1000;
        return meter;
    }
}
var resultMeter = kilometerToMeter(10);
console.log(resultMeter);


// // first program end


// start second program
// adding if else condition part for bonus mark.
function budgetCalculator(NumberOfWatch,NumberOfPhone,NumberOfLaptop){
    if(NumberOfWatch>=0 && NumberOfPhone>=0 && NumberOfLaptop>=0){
        var WatchPrice = NumberOfWatch * 50;
        var PhonePrice = NumberOfPhone * 100;
        var LaptopPrice = NumberOfLaptop * 500;
        var TotalCost = WatchPrice + PhonePrice + LaptopPrice;
        return TotalCost;
    }
    else
    {
        return "Sorry! Because your input number is negative. NUmber of Watch or laptop or phone can not be negative."; //Adding for bonus mark
    }

}
var TotalBudget = budgetCalculator(2,2,2);
   console.log(TotalBudget);  

// End second program


// Start Third program
function hotelCost(day){
    if(day < 0){
        return "Day can not be neagative."// Adding for bonus mark.
    }
     else if(day <= 10)
    {
        var TotalCost = day * 100;
        return TotalCost;
    }
    else if(day <= 20){
        var FirstPart = 10 * 100;
        var remaining = day - 10;
        var SecondPart = remaining * 80;
        TotalCost = FirstPart + SecondPart;
        return TotalCost;
    }
  
    else{
        FirstPart = 10 * 100;
        SecondPart = 10 * 80;
        remaining = day - 20;
        var ThirdPart = remaining * 50;
        TotalCost = FirstPart + SecondPart + ThirdPart;
        return TotalCost;
    }
}
var TotalHotelCost = hotelCost(38);
console.log(TotalHotelCost);
// End third Program

// Start foturth program
function megaFriend(Array){
   if(Array.length == 0) //Adding for bonus mark
   {
       return "The array is null";
   }
   else{
    var max = Array[0].length;
    for(var i=1;i<Array.length;i++){
       if(max<Array[i].length){
           max = Array[i].length;
           var maxtwo = Array[i];
       }
        
    }
    return maxtwo;
   }
    
    
}
var result = megaFriend(['jaml','kamalpaul','Apurbo','dilderhossin','ApurboPaul']);
console.log(result);
// End fourth program
