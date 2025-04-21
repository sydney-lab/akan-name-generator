function getAkanName() {
    const day =
    parseInt(document.getElementById("day").value);
    const month =
    parseInt(document.getElementById("month").value);
    const year =
    document.getElementById("year").value;
    const gender = 
    document.querySelector("input[name=gender]:checked")?.value;
    // input validation
    if(isNaN(day) || day<1 || day>31){
        alert("Please enter a valid day(1-31).");
        return;
    }
    if(isNaN(month)|| month<1 || month>12){
        alert("Please enter a valid month).");
        return;
    }
    if(!year || year.length !==4 || isNaN(year)){
        alert("Please enter a valid 4-digit number.");
        return;
    }
    if(!gender){
        alert("Please select a gender.");
        return;
    }
    // Split year into CC and YY
    const CC =
    parseInt(year.slice(0,2));
    const YY =
    parseInt(year.slice(2));
    const MM = month;
    const DD = day;
    // Apply the provided formula
    const d = ((4*CC - 2 * CC - 1)+(45 * YY) +(1026 * (MM+ 1)) + DD)% 7;
    const dayIndex = ((d+7) %7);
    const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    const akanName = gender ==="male"? maleNames[dayIndex]:
    femaleNames[dayIndex];
    document.getElementById("result"). innerText = "You were born on a $ {days[dayIndex]}. Your Akan name is ${akanName}.";
}