# create your class here
class Car:
    def __init__(self, model, speed):
        self.model = model
        self.speed = speed

    def getModel(self):
        return self.model

    def setSpeed(self, value):
        self.speed = value

if __name__ == '__main__':
    bmw = Car('BMW', 30.3)
    print(bmw.getModel(), bmw.speed)
    bmw.setSpeed(65)
    print(bmw.getModel(), bmw.speed)