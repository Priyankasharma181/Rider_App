console.log("WEL COME TO RIDER APP");
var fs = require('fs');
const readline = require("readline-sync");
var current_location = readline.question("enter the location: ")
var Destination_location = readline.question("Enter the your destnation :")
let vechile_type = ["car","taxi"]
for (vech in vechile_type){
    console.log(vechile_type[vech])
}
var selsectcarType = readline.question("ither you can use car, taxi :")
let Data_fetch = fs.readFileSync("driver_details.json")
let converted_data = JSON.parse(Data_fetch)
// console.log(converted_data)
num = 1
function givesuser(data,nameEntered){
    for (let eachprop in converted_data){
        if(eachprop === nameEntered){
            for(var i of data[eachprop]){
                console.log(num,i["Driver_name"])
                num++
            }
        }
    }
}        
givesuser(converted_data,selsectcarType)
data = fs.readFileSync
let choose_driver = readline.question("enter the desired driver:")
for (let i in converted_data["car"]){
    if (converted_data["car"][i]["Driver_name"] === choose_driver){
        console.log(converted_data["car"][i]);
    }
}
for (let i in converted_data["taxi"]){
    if (converted_data["taxi"][i]["Driver_name"] === choose_driver){
        console.log(converted_data["taxi"][i]);
    }
}
console.log("your booking is conformed\n Have nice day");
function generateOTP(){
    var digit = "0123456789"
    let otp = ""
    for( let i = 0; i < 4; i++){
        otp += digit[Math.floor(Math.random()*10)];
    }
    return otp
}
console.log("Your OTP  is :",generateOTP())
function distance(){
    let num = "0123456789"
    let killometer = ""
    for (let i=1 ; i<3; i++){
        killometer+=[Math.floor(Math.random()*10)]
    }
    return killometer
}
Distance = distance()
console.log("you coverd",Distance,"killometer");
console.log("please pay ",10*Distance,"after finished your journy")
var amount=Distance*10
var fetch = fs.readFileSync("driver_details.json");
var converted_data2 = JSON.parse(fetch);
var feedback = readline.question("enter the feedback")
var rating = readline.question("please rate our drive")
for (var i of converted_data2[selsectcarType]){
    if(i["Driver_name"] === choose_driver){
        i["travalling_charge"].push(amount);
        i["feedback"].push(feedback)
        i["rating"].push(rating)
        // console.log(i);
    }
}
// console.log(converted_data2);
fs.writeFileSync("driver_details.json",JSON.stringify(converted_data2,null,4))
