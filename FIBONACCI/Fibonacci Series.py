n1 = 0
n2 = 1

count = 0
limit = 10

while count <= limit:
    print(n1)
    print(n2)

    n1 += n2
    n2 += n1
    count += 1