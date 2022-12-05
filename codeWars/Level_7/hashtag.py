# ord - Convert from charcter to code order list.
# A-Z => 65-90
# a-z => 97-122
# chr - Convert form code order list to charcter.
import time

def what_is_the_time(time_in_mirror):
    # Write your code here...
    h, m = map(int, time_in_mirror.split(":"))
    h = -(h + (m != 0)) % 12 or 12
    m = -m % 60
    return "{0:02d}:{1:02d}".format(h, m)

# Tests
time1 = "12:05"
mirror = what_is_the_time(time1)
print("Real time: {0}\nMirror time: {1}\n".format(time1, mirror))

now = time.strftime("%I:%M")
mirror = what_is_the_time(time.strftime("%I:%M"))
print("Now: {0}\nMirror: {1}".format(now, mirror))