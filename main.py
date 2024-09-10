servos.P0.set_range(0, 180)

def on_forever():
    index = 0
    while index < 181:
        servos.P0.set_angle(index)
        basic.pause(4)
        index += 1
    index = 0
    while index < 181:
        servos.P0.set_angle(index)
        basic.pause(4)
        index += 1
basic.forever(on_forever)
