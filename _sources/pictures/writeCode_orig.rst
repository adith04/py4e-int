..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Write Code Exercises
---------------------------

The picture below are used in the following exercises.

.. datafile:: gal3.jpg
   :image:
   :fromfile: Figures/gal2.jpg
   :hide:

.. datafile:: kitten3.jpg
   :image:
   :fromfile: Figures/kitten.jpg
   :hide:

.. datafile:: swan3.jpg
   :image:
   :fromfile: Figures/swan.jpg
   :hide:

.. datafile:: motorcycle3.jpg
   :image:
   :fromfile: Figures/motorcycle.jpg
   :hide:

.. datafile:: baby3.jpg
   :image:
   :fromfile: Figures/baby.jpg
   :hide:

.. datafile:: guy3.jpg
   :image:
   :fromfile: Figures/guy1.jpg
   :hide:

.. note::

   Remember that it can take a bit of time to process all the pixels in a picture!  Check for errors below the code if it is taking a long time, but if you don't see any errors just wait.




.. activecode:: pictures_ac_16
   :nocodelens:

   A grayscale picture is when the red, green, and blue value of a pixel are all equal to the average of the original pixel value. Write the code to turn the left half of the image ``gal3.jpg`` into gray scale.
   ~~~~


.. parsonsprob:: pictures_ac_16_pp
   :numbered: left
   :practice: T
   :adaptive:

   A grayscale picture is when the red, green, and blue value of a pixel are all equal to the average of the original pixel value. Create the code to turn the left half of the image ``gal3.jpg`` into gray scale.
   -----
   from image import *
   =====
   img = Image("gal3.jpg")
   =====
   pixels = img.getPixels()
   =====
   for p in pixels:
       r = p.getRed()
       b = p.getBlue()
       g = p.getGreen()
   =====
       avg = int((r + b + g) / 3)
   =====
       r = p.setRed(avg)
       b = p.setBlue(avg)
       g = p.setGreen(avg)
   =====
       img.updatePixel(p)
   =====
   win = ImageWin(img.getWidth(),img.getHeight())
   img.draw(win)







.. activecode:: pictures_ac_17
   :nocodelens:

   Define a procedure to negate an image.  You can negate an image by setting each color value to 255 minus the current value. Write code to negate the ``kitten3.jpg`` image.
   ~~~~



.. parsonsprob:: pictures_ac_17_pp
   :numbered: left
   :practice: T
   :adaptive:

   Define a procedure to negate an image.  You can negate an image by setting each color value to 255 minus the current value. Create code to negate the ``kitten3.jpg`` image.
   -----
   from image import *
   =====
   img = Image("kitten3.jpg")
   =====
   pixels = img.getPixels()
   =====
   for p in pixels:
       r = p.getRed()
       b = p.getBlue()
       g = p.getGreen()
   =====
       r = p.setRed(255-r)
       b = p.setBlue(255-b)
       g = p.setGreen(255-g)
   =====
       img.updatePixel(p)
   =====
   win = ImageWin(img.getWidth(),img.getHeight())
   img.draw(win)



.. activecode:: pictures_ac_18
   :nocodelens:

   Write code that copies the top half of the image ``kitten3.jpg`` to the bottom half.
   ~~~~


.. parsonsprob:: pictures_ac_18_pp
   :numbered: left
   :practice: T
   :adaptive:

   Write code that copies the top half of the image ``kitten3.jpg`` to the bottom half.
   -----
   from image import *
   =====
   img = Image("kitten3.jpg")
   =====
   halfway = (int(img.getHeight() / 2))
   =====
   for x in range(img.getWidth()):
       for y in range(halfway):
   =====
           p = img.getPixel(x, y)
   =====
           r = p.getRed()
           g = p.getGreen()
           b = p.getBlue()
   =====
           newPixel = Pixel(r, g, b)
   =====
           img.setPixel(x, halfway + y, newPixel)
   =====
   win = ImageWin(img.getWidth(),img.getHeight())
   img.draw(win)








.. activecode:: pictures_ac_19
   :nocodelens:

   Write a function to mirror the image ``swan3.jpg`` from left to right around a vertical line in the middle of the image. Pass the image to the function. Do the import, create the image, call the function, and show the result.
   ~~~~


.. parsonsprob:: pictures_ac_19_pp
   :numbered: left
   :practice: T
   :adaptive:

   Create a function to mirror the image ``swan3.jpg`` from left to right around a vertical line in the middle of the image. Pass the image to the function. Do the import, create the image, call the function, and show the result.
   -----
   from image import *
   =====
   img = Image("swan3.jpg")
   =====
   halfway = (int(img.getWidth() / 2))
   =====
   for x in range(img.getWidth()):
       for y in range(img.getHeight()):
   =====
           p = img.getPixel(x, y)
   =====
           r = p.getRed()
           g = p.getGreen()
           b = p.getBlue()
   =====
           newPixel = Pixel(r, g, b)
   =====
           img.setPixel(img.getWidth() - x - 1, y, newPixel)
   =====
   win = ImageWin(img.getWidth(),img.getHeight())
   img.draw(win)





.. activecode:: pictures_ac_20
   :nocodelens:

   Write code that flips the image ``vangogh3.jpg`` across a horizontal line.
   ~~~~



.. parsonsprob:: pictures_ac_20_pp
   :numbered: left
   :practice: T
   :adaptive:

   Create code that flips the image ``guy3.jpg`` across a horizontal line.
   -----
   from image import *
   =====
   img = Image("vangogh3.jpg")
   =====
   halfway = (int(img.getHeight() / 2))
   =====
   for x in range(img.getWidth()):
       for y in range(img.getHeight()):
   =====
           p = img.getPixel(x, y)
   =====
           r = p.getRed()
           g = p.getGreen()
           b = p.getBlue()
   =====
           newPixel = Pixel(r, g, b)
   =====
           img.setPixel(x, img.getHeight() - y - 1, newPixel)
   =====
   win = ImageWin(img.getWidth(),img.getHeight())
   img.draw(win)
