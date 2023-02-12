# SVG Pipeline

This site is going to contain quite a few hand-drawn elements. The final format
is SVG to have good scaling. Here's how I'm creating them:

### Drawing (5-10 mins)

The style is cartoonish, with semi-thick black lines between color areas. I'm
drawing them on a whiteboard with a whiteboard marker.

### Digitization (1 min)

After the drawing is done, I take a picture of the drawing with my phone and
transfer the picture to my computer.

### Cleanup (3 mins)

I open the picture on [Inkscape](https://inkscape.org/).  
I run the image through a simplification algorithm (Path -> Simplify).  
I manually delete extra nodes ("dirt") in the image.

### Colorization (2 mins)

I add paths in the empty areas of the SVG and select the fill color.  
Now I can save the file and exit Inkscape.

### Optimization (1 min)

I run the image through a handy SVG optimizer called
[SVGOMG](https://jakearchibald.github.io/svgomg/).

### Import to project (3 min)

I create a new entry in the `components/SVG` folder and copy the SVG code into a
React component.  
I translate some HTML attributes (the ones with hyphens) to React props.  
I add some React props I want to support for all my SVG's.
