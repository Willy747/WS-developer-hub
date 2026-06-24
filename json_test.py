import json

with open("learning_data.json", "r") as file:
    data = json.load(file)

print(data["name"])
print(data["current_skill"])
print(data["hours_learning"])
print(data["projects"])
print(data["projects"][0])
