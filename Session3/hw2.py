###########################################################
# Step1. 리스트 모든 수의 평균을 계산하는 함수 작성하기
def average(list):
    sum = 0
    for i in list:
        sum += i
    result = sum/len(list)
    return result

# Step2. 모든 수 입력받고 list에 저장하기

list= []
while True:
    i = int(input("정수를 입력하세요(종료:-1): "))
    if i == -1:
        break
    list.append(i)

# Step3. 함수 호출하고 결과값 출력하기
print(average(list))