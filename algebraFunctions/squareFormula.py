def squareFormula(a, b, c):
    x1 = (-b + (b**2 - 4*a*c)**0.5) / 2*a
    y1 = a*x1**2 + b*x1 + c

    x2 = (-b - (b**2 - 4*a*c)**0.5) / 2*a
    y2 = a*x2**2 + b*x2 + c

    return [(x1, y1), (x2, y2)]

result = squareFormula(1, 0, -4)
print(result)