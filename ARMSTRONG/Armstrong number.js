function armstrongCheck(num) {
    var number = num.toString();
    var final = 0;
    var count = 0;
    while (count != number.length) {
        final += Number(number[count]) ** number.length;
        count += 1;
    }
    return final == num;
    
}



    