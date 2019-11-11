def armstrongCheck(num):
    number = str(num)
    final = 0
    count = 0
    while count != len(number):
        final += int(number[count]) ** len(number)
        count += 1
    
    return final == num
print(armstrongCheck(370))