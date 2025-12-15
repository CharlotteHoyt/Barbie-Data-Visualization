import pandas as pd
# import matplotlib.pyplot as plt
import colorama 
from colorama import Fore, Style

colorama.init(autoreset = True)

file_name = 'data.csv'
df = pd.read_csv(file_name)

# Skin Tone
print(Fore.BLACK + Fore.MAGENTA + "\nSKIN TONE:")
skin_tone_values = []

for value in df['Skin Tone'].tolist():
    skin_tone_values.append(str(value))

skin_tone_output = ', '.join(skin_tone_values)
print(skin_tone_output)

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