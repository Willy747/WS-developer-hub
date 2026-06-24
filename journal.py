from datetime import date


def ask_question(question):
    answer = input(question + "\n> ")
    return answer


def write_journal_entry(learned, difficulty, next_step, time_spent):
    today = date.today()

    with open("journal.md", "a") as file:
        file.write(f"\n\n## {today}\n")
        file.write("\n### Learned\n")
        file.write(f"{learned}\n")
        file.write("\n### Difficulty\n")
        file.write(f"{difficulty}/10\n")
        file.write("\n### Next Step\n")
        file.write(f"{next_step}\n")
        file.write("\n### time_spent\n")
        file.write(f"{time_spent}\n")


learned = ask_question("What did you learn today?")
difficulty = ask_question("How difficult was it? (1-10)")
next_step = ask_question("What should you learn next?")
time_spent = ask_question("How many minutes did you spend learning today?")

write_journal_entry(learned, difficulty, next_step, time_spent)

print("Journal updated!")

