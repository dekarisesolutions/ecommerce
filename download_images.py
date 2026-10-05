import urllib.request
import os

os.makedirs('assets/images', exist_ok=True)

for i in range(1, 25):
    url = f"https://picsum.photos/seed/product{i}/400/400"
    print(f"Downloading {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(f"assets/images/product_{i}.jpg", 'wb') as out_file:
            data = response.read()
            out_file.write(data)
    except Exception as e:
        print(f"Failed for {i}: {e}")

print("Done!")
