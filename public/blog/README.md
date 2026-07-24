# Blog images

Drop images here that you want available for blog posts (and later, social).
Anything in this folder is served at `/blog/<filename>` on the live site.

To put an image on a post, add these two lines to the post's frontmatter:

    cover: /blog/my-image.jpg
    coverAlt: short description of the image

The weekly Dispatch task checks this folder and will use a fitting image as the
post cover if one is here. You can also just drop images and reference them
inline in markdown: `![alt](/blog/my-image.jpg)`.

Keep filenames lowercase-with-dashes. JPG or PNG or WEBP all work.
