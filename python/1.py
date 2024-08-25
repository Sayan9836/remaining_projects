# from ast import While
# from cmath import log
# from re import A
# from typing import Set

# list = []
# list = ["a", "c", "d", "m"]
# list.append("l")
# print(list)
# list.insert(1, "la")
# print(list)
# # print(a)
# list1 = ["x", "y", "z"]
# list.extend(list1)
# print(list)
# list.remove("d")
# print(list)
# list.pop()
# list.pop(2)
# list.remove("a")
# print(list)

# for i in range(2, 20, 4):
#     print(i)

# for i in range(2, 6):
#     for j in range(3):
#         print(i, j)
# list.clear()
# print(list)
# ******************************************#*****************************************#************************************
# c = int(input('Enter the value in celcius:'))
# f = (c//5)*9+32
# print(f)

# a = int(input("enter the first side:"))
# b = int(input("enter the second side:"))
# c = int(input("enter the third side:"))

# s = (a+b+c)/2
# A = (s*(s-a)*(s-b)*(s-c))**(0.5)
# print(A)

# n = int(input("enter total no of inputs"))

# def abc(n):

#     sum = 0
#     for i in range(n):
#         a = int(input("enter the nos"))
#         sum += a
#     print(sum//n)


# abc(n)

# n = int(input("enter total nos of integer:"))
# def prod(n):
#     prod = 1
#     for i in range(n):
#         a = int(input('enter nos'))
#         prod *= a
#     print(prod)
# prod(n)

# r=int(input("enter the radius"))
# print(3.14*r*r)

# n = int(input("enter the integer"))
# def mul(n):
#     if n % 5 == 0 and n % 7 == 0:
#         print("good")
#     else:
#         print("bad")

# mul(n)

# def ans():
#     i = sum = 0
#     while i < 10:
#         a = int(input("enter the nos"))
#         sum += a
#         i += 1
#     print(sum/10)
# ans()


# def sum1(n):
#     a = 0
#     while n != 0:
#         a += n % 10
#         n = n//10
#     return a


# for i in range(100, 201):
#     k = sum1(i)
#     if k % 2 == 0:
#         print(i)

# list5 = []
# for i in range(0, 5):
#     list5.append(int(input("Enter the no")))
# print(sum(list5))

# A = []
# for i in range(3):
#     row = []
#     for j in range(3):
#         row.append(int(input("enter the elements of first matrix:")))
#     A.append(row)

# B = []
# for i in range(3):
#     row = []
#     for j in range(3):
#         row.append(int(input("Enter the elements of second matrix:")))
#     B.append(row)


# # do addition

# result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
# for i in range(len(A)):
#     for j in range(len(B[0])):
#         # result[i][j] = A[i][j]+B[i][j]
#         for k in range(len(B)):
#             result[i][j]+=A[i][k]*B[k][j]


# print(result)

# n = int(input("Enter the no:"))


# def fib(n):
#     if n == 1 or n==2:
#         return 1
#     elif n==0:
#         return 0
#     else:
#         return fib(n-1)+fib(n-2)


# print(fib(n))

# a = 3
# b = 4
# a, b = b, a
# print(a)
# print(b)

# set1 = {10, 20, 30}
# set2 = {90, 70, 90}
# # set1.symmetric_difference_update(set2)
# # set1.intersection_update(set2)

# if set1.isdisjoint(set2):
#     print(set1)


# tuple1 = (10, 20, 30, 45, 12, 67)
# tuple2 = tuple1[3:5]
# print(tuple2)


import matplotlib.pyplot as plt

x=[1,2,3]
y=[2,4,1]

plt.plot(x,y)

plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.title('My first graph')
plt.show()

