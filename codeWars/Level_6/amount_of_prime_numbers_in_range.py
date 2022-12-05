# count prime numbers in a range.
import time
def prime_numbers(a,b):
    cnt=0
    for x in range(a,b+1):
        for y in range(2,x):
            if x%y!=0:
                if int(x**(0.5)+1)==y:
                    cnt=cnt+1
                    print(x)
                    break
            else:
                break
    print("There is",cnt,"prime numbers between",a,"to",b)
            
a=int(input("Enter low limit of range: "))
b=int(input("Enter high limit of range: "))
start=time.process_time()
prime_numbers(a,b)
end=time.process_time()
print("Time:",end-start,"seconds")

#*****************************************************
# count prime numbers in a range 1 to 100.
#c=int(input("Enter low limit of range: "))
#d=int(input("Enter high limit of range: "))
#cnT=0 
#for x in range(c,d+1):
#    if x==2 or x==3 or x==5 or x==7 or (x%2!=0 and x%3!=0 and x%5!=0 and x%7!=0):
#        cnT=cnT+1
#        print(x)
#print("There is",cnt,"prime numbers between",a,"to",b)

