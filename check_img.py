from PIL import Image
import numpy as np

img = Image.open('src/assets/logo.png').convert('RGBA')
arr = np.array(img)
# find non-transparent pixels
mask = arr[:, :, 3] > 0
non_transparent = arr[mask]
print("Mean color of non-transparent pixels:", np.mean(non_transparent, axis=0))
