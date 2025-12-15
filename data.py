import pandas as pd
# import matplotlib.pyplot as plt
import colorama 
from colorama import Fore, Style
import numpy as np
import math 

colorama.init(autoreset = True)

file_name = 'data.csv'
df = pd.read_csv(file_name)

numpy_array = df.to_numpy()
print(numpy_array)

# Skin Tone
print(Fore.BLACK + Fore.MAGENTA + "\nSKIN TONE:")
skin_tone_values = []
skin_tone_values_count = []

for value in df['Skin Tone'].tolist():
    # skin_tone_values.append(str(value))    
    if value not in skin_tone_values:
        skin_tone_values.append(str(value))
        skin_tone_values_count.append(1)
    else:
        index = skin_tone_values.index(value)
        skin_tone_values_count[index] += 1

print(skin_tone_values)
print(skin_tone_values_count)

index = 0
for value in skin_tone_values:
    if not (value == "nan"):
        print(f"{value}: {skin_tone_values_count[index]}")
    index += 1

# skin_tone_output = ', '.join(skin_tone_values)
# print(skin_tone_output)

# Eye Color
print(Fore.BLACK + Fore.MAGENTA + "\nEYE COLOR:")
eye_color_values = []

for value in df['Eyes'].tolist():
    eye_color_values.append(str(value))

eye_color_output = ', '.join(eye_color_values)
print(eye_color_output)

# Hair
print(Fore.BLACK + Fore.MAGENTA + "\nHAIR:")
hair_values = []

for value in df['Hair'].tolist():
    hair_values.append(str(value))

hair_output = ', '.join(hair_values)
print(hair_output)

# Gender
print(Fore.BLACK + Fore.MAGENTA + "\nGENDER:")
gender_values = []

for value in df['Gender'].tolist():
    gender_values.append(str(value))

gender_output = ', '.join(gender_values)
print(gender_output)

# Race (Filter by Human)
print(Fore.BLACK + Fore.MAGENTA + "\nRACE:")
race_values = []

for value in df['Race'].tolist():
    race_values.append(str(value))

race_output = ', '.join(race_values)
print(race_output)