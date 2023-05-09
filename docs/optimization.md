# Optimization

This site aims for a good score on
[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).

The entire site can be appraised using
[Unlighthouse](https://unlighthouse.dev/).

Only use these on the live versionm, because the development server slows things
down quite a bit.

## Image optimization

All image files should be run through
[this image compressor](https://imagecompressor.com/).

Images should be cropped to avoid loading unshown parts.

## SVG optimization

All svg files should be run through
[this compressor](https://jakearchibald.github.io/svgomg/) with settings
specified in [here](./svg_pipeline.md).
