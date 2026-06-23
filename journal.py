from datetime import date

today = date.today()

learned = input("What did you learn today?\n> ")
difficulty = input("How difficult was it? (1-10)\n> ")
next_step = input("What should you learn next?\n> ")

with open("journal.md", "a") as file:
    file.write(f"\n\n## {today}\n")
    file.write("\n### Learned\n")
    file.write(f"{learned}\n")
    file.write("\n### Difficulty\n")
    file.write(f"{difficulty}/10\n")
    file.write("\n### Next Step\n")
    file.write(f"{next_step}\n")

print("Journal updated!")
