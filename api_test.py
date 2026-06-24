import requests

response = requests.get(
    "https://api.github.com/repos/Willy747/WS-developer-hub"
)

data = response.json()

print("GitHub Repo Info")
print("----------------")
print(f"Name: {data['name']}")
print(f"URL: {data['html_url']}")
print(f"Created: {data['created_at']}")
print(f"Stars: {data['stargazers_count']}")
print(f"Forks: {data['forks_count']}")
