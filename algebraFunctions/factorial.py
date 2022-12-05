
def factorial(n):
    fact = 1
    for i in range(n, 1, -1):
        fact = fact * i
    digits = 1
    while fact != (fact % 10**digits):
        digits = digits + 1
    return [fact, digits]

# Tests
print(factorial(3)) # [6, 1]
print(factorial(6)) # [720, 3]
print(factorial(10)) # [3628800, 7]
print(factorial(20)) # [2432902008176640000, 19]