import json
import requests

def get_image_url(query, api_key):
    url = f"https://api.unsplash.com/search/photos?query={query}&client_id={api_key}"
    response = requests.get(url)
    data = response.json()
    if data['total'] > 0:
        return data['results'][0]['urls']['regular']
    else:
        return None

api_key = "kMyMbN2S4CgdXcMxML3WefIcCifMBR6CIjr33xkxPr4"  # Replace with your Unsplash API key

with open('products.json', 'r') as file:
    # Load the JSON data
    data = json.load(file)

for i in range(len(data["products"])):
    cat = data["products"][i]["category"]
    url = get_image_url(cat, api_key)
    data["products"][i]["imageUrl"] = url

# Write the updated data back to the JSON file
with open('products.json', 'w') as file:
    json.dump(data, file, indent=4)