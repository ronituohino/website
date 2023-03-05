# SVG Pipeline

This site is going to contain quite a few hand-drawn elements. The final format
is SVG to have good scaling. Here's how I'm creating them:

### Drawing (5-10 mins)

The style is cartoonish, with semi-thick black lines between color areas. I'm
drawing them on a whiteboard with a whiteboard marker.

### Digitization (2 min)

After the drawing is done, I take a picture of the drawing with my phone and
transfer the picture to my computer.

### Inkscape cleanup & coloring (5 mins)

I open the picture on [Inkscape](https://inkscape.org/).  
I transform the picture to a vector image (Path -> Trace Bitmap).

- Brightness cutoff
- Brightness threshold ~0.5

I manually delete extra nodes ("dirt") in the image.  
I run the image through a simplification algorithm (Path -> Simplify).

I break the vector lands into individual objects (Select all nodes -> Path ->
Break Apart).  
I delete the backmost object, set the background to white, fix layering, and set
colors for lands.  
I set the image position to zero, and fix document size.  
Save image.

### Optimization (1 min)

I run the image through a handy SVG optimizer called
[SVGOMG](https://jakearchibald.github.io/svgomg/).

Settings:

- Prettify markup: `true`
- Multipass: `true`
- Number precision: `1`
- Transform precision: `4`
- Every feature toggled on except `Remove xmlns`

This process usually saves ~70% of space.

### Import to project (3 min)

I create a new entry in the `components/SVG` folder and copy the SVG code into a
React component.  
I translate some HTML attributes (the ones with hyphens) to React props.  
I add some React props I want to support for all my SVGs (look at existing
SVGs).
