def diamond(n):
    if n%2 == 1 and n > 0:
        unit = "*"
        diamond = ""
        for i in range(1, n+1, 2):
            if i == 1:
                row = unit
            else:     
                row = unit + " " * (i-2) + unit
            diamond += row.center(n, " ") + "\n"
        for i in range(n-2, 0, -2):
            if i == 1:
                row = unit
            else:     
                row = unit + " " * (i-2) + unit
            diamond += row.center(n, " ") + "\n"
    else:
        return 'Not valid number. Enter a positive and odd number.'

    return diamond

# Tests
print(diamond(3)) # " * \n***\n * \n"
print(diamond(5)) # "  *  \n *** \n*****\n *** \n  *  \n"
