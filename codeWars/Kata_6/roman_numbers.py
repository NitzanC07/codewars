from unicodedata import decimal
from unittest import result


def solution(roman_number, symbols):
    # Write your code here...
    decimal = 0
    for i in range(len(roman_number)):
        if (i < len(roman_number)-1) and (symbols[roman_number[i]] < symbols[roman_number[i+1]]):
            decimal = decimal - symbols[roman_number[i]]
        else: 
            decimal = decimal + symbols[roman_number[i]]
    return decimal

roman_symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

roman_numbers = ["I", "VI", "IIII", "IV", "XXI", "XIX", "MCDXLIV", "DCXII", "MMXXII"]
for roman in roman_numbers:
    result = solution(roman, roman_symbols)
    print("{0:7s} = {1:<7d}".format(roman, result))