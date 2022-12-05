# Camel Case
# Complete the solution so that the function will break up camel casing, 
# using a space between words.
 
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""


# Complete the function
def camelCase(string):
    outputString = "" + string[0].upper()
    for char in range(1, len(string)):
        upperCase = string[char].upper()
        if (string[char] == upperCase):
            outputString = outputString + " "
        outputString = outputString + string[char].lower()
    return outputString + "."


# Tests
tests = ["camelCasing", "astronaut", "yourNameIs", "weAreTheChampions"]
for test in range(len(tests)):
    print("Result {0}: {1}".format(test+1, camelCase(tests[test])))
