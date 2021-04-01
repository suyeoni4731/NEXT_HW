num = int(input("숫자를 입력하세요: "))
for i in range(2, 10):
    if i % 2 == 0:
        for j in range(1, 10):
            print("%d*%d=%d" %(i,j,i*j))
        print("*****************************")
for i in range(2, 10):
    if i % 2 != 0:
        for j in range(1, 10):
            print("%d*%d=%d" %(i,j,i*j))
        print("*****************************")