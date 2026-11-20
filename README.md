# From Natural Language to Underwater Manipulation

Project page for *From Natural Language to Underwater Manipulation Through LLM-Driven Mission Planning and Adaptive Task-Priority Control*.

## Structure

```
index.html
static/
  css/style.css
  js/toc.js   highlights the current section in the table of contents
  images/   figures and photos
  videos/   web-encoded clips (H.264, no audio) and poster frames
```

The page is plain HTML, CSS, and JavaScript with no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Publish with GitHub Pages

1. Create a repository and push the contents of this folder to the `main` branch.
2. In the repository, open **Settings → Pages**, set **Source** to *Deploy from a branch*, and select `main` / `root`.
3. The page is served at `https://<username>.github.io/<repository>/`.
