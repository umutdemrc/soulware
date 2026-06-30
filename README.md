# soulware.app

Company site for **Soulware** — calm, intelligent apps that help you live with
more intention. Static HTML/CSS, no build step, hosted on **GitHub Pages**.

```
/                         → Soulware homepage (features Ivy Relations Assistant)
/ivy-relations-assistant/ → Ivy Relations Assistant product page
                            (+ /privacy.html, /terms.html)
/styles.css               → shared design system
/assets/                  → shared images
```

## Local preview
```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Contact form
The homepage form posts to **Web3Forms**. Set your access key in `index.html`
(`name="access_key"`) — get a free key at https://web3forms.com.

## Custom domain
`soulware.app` is pointed here via GitHub Pages. The `CNAME` file holds the
domain; DNS is managed at the registrar (GoDaddy) with A-records to GitHub Pages.
