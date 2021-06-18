from PIL import Image
from os import walk

filenames = next(walk('./'), (None, None, []))[2]  # [] if no file

for pic in filenames:
    parts = pic.split('.')
    print(parts)
    if parts[-1] != 'py':
        file = Image.open(pic)
        file.save(f'n-{pic}', quality=40)
  
# Open the image by specifying the image path.
# image_path = "poya.jpg"
# image_file = Image.open(image_path)
  
# # the default
# image_file.save("new.jpg", quality=40)