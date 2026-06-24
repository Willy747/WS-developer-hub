with open("journal.md", "r", encoding="utf-8") as file:
    lines = file.readlines()

difficulties = []
times = []

for index, line in enumerate(lines):

    if line.strip() == "### Difficulty":
        difficulty_line = lines[index + 1].strip()
        difficulty_number = difficulty_line.split("/")[0]
        difficulties.append(int(difficulty_number))

    if line.strip() == "### time_spent":
        time_line = lines[index + 1].strip()
        times.append(int(time_line))

total_entries = len(difficulties)

average_difficulty = sum(difficulties) / len(difficulties)
average_time = sum(times) / len(times)

print("Developer Journal Stats")
print("-----------------------")
print(f"Total Entries: {total_entries}")
print(f"Average Difficulty: {average_difficulty:.2f}/10")
print(f"Average Time Spent: {average_time:.0f} minutes")
