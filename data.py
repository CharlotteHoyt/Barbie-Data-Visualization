import pandas as pd
# import matplotlib.pyplot as plt
import colorama 
from colorama import Fore

colorama.init(autoreset = True)

file_name = 'data.csv'
df = pd.read_csv(file_name)

print(Fore.BLACK + Fore.MAGENTA + "DATA:")
print(df)

# Skin Tone
print(Fore.BLACK + Fore.MAGENTA + "\nSKIN TONE:")
skin_tone_values = []
skin_tone_values_count = []

for value in df['Skin Tone'].tolist():
    if value not in skin_tone_values:
        skin_tone_values.append(str(value))
        skin_tone_values_count.append(1)
    else:
        index = skin_tone_values.index(value)
        skin_tone_values_count[index] += 1

# print(skin_tone_values)
# print(skin_tone_values_count)

index = 0
for value in skin_tone_values:
    if not (value == "nan"):
        print(f"{value}: {skin_tone_values_count[index]}")
    index += 1

# Eye Color
print(Fore.BLACK + Fore.MAGENTA + "\nEYE COLOR:")
eye_color_values = []
eye_color_values_count = []

for value in df['Eyes'].tolist():
    if value not in eye_color_values:
        eye_color_values.append(str(value))
        eye_color_values_count.append(1)
    else:
        index = eye_color_values.index(value)
        eye_color_values_count[index] += 1

# print(eye_color_values)
# print(eye_color_values_count)

index = 0
for value in eye_color_values:
    if not (value == "nan"):
        print(f"{value}: {eye_color_values_count[index]}")
    index += 1

# Hair
print(Fore.BLACK + Fore.MAGENTA + "\nHAIR:")
hair_values = []
hair_values_count = []

for value in df['Hair'].tolist():
    if value not in hair_values:
        hair_values.append(str(value))
        hair_values_count.append(1)
    else:
        index = hair_values.index(value)
        hair_values_count[index] += 1

# print(hair_values)
# print(hair_values_count)

index = 0
for value in hair_values:
    if not (value == "nan"):
        print(f"{value}: {hair_values_count[index]}")
    index += 1

# Gender
print(Fore.BLACK + Fore.MAGENTA + "\nGENDER:")
gender_values = []
gender_values_count = []

for value in df['Gender'].tolist():
    if value not in gender_values:
        gender_values.append(str(value))
        gender_values_count.append(1)
    else:
        index = gender_values.index(value)
        gender_values_count[index] += 1

# print(gender_values)
# print(gender_values_count)

index = 0
for value in gender_values:
    if not (value == "nan"):
        print(f"{value}: {gender_values_count[index]}")
    index += 1

# Race (Filter by Human)
print(Fore.BLACK + Fore.MAGENTA + "\nRACE:")
race_values = []
race_values_count = []

for value in df['Race'].tolist():
    if value not in race_values:
        race_values.append(str(value))
        race_values_count.append(1)
    else:
        index = race_values.index(value)
        race_values_count[index] += 1

# print(race_values)
# print(race_values_count)

index = 0
for value in race_values:
    if not (value == "nan"):
        print(f"{value}: {race_values_count[index]}")
    index += 1