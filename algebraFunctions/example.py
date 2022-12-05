
def linear(varibales, constants):
    slope = constants[0]
    n = constants[1]
    for x in varibales["Xs"]:
        y = slope * x + n
        varibales["Ys"].append(y)
    return variables

def parabola(varibales, constants):
    a = constants[0]
    b = constants[1]
    c = constants[2]
    for x in varibales["Xs"]:
        y = a * x ** 2 + b * x + c
        varibales["Ys"].append(y)
    return variables

def parabola_2_parameters(varibales, constants):
    a = constants[0]
    b = constants[1]
    for x in varibales["Xs"]:
        y = (a + x) * (b + x)
        varibales["Ys"].append(y)
    return variables

constants_for_linear = [m, n] = [0, 0]
constants_for_parabola = [a, b, c] = [1, 0, 0]
variables = {
    "Xs": [x for x in range(-5, 6)], 
    "Ys": []
}
variables = parabola(variables, constants_for_parabola)

print("{0:^5} | {1:^5}".format("Xs", "Ys"))
for i in range(len(variables["Xs"])):
    print("{0:^5} | {1:^5}".format(variables["Xs"][i], variables["Ys"][i]))