---
title: Installation
meta:
  - name: keywords
  - content: refined-twitter-fork installation
---

# Installation

::: warning
Firefox support has not been tested
:::

Please follow the below steps:

```sh
git clone https://github.com/ItsRevolt/refined-twitter/
cd refined-twitter
npm install    # Install dev dependencies
npm run build  # Build the extension code so it's ready for the browser
```

Once built, load it in the browser of your choice:
**Only chrome has been tested by me**

| Chrome                                                | Firefox       |       
| ------------------------------------------------------|:-------------:|
| Open `chrome://extensions` in search bar              | Open `about:debuggins#addons` in search bar                       |
| Check the developer mode checkbox                     | Click on the **load temporary add-on** button                     |
| Click on the **load unpacked extension** button       | Select the **refined-twitter/distribution/manifest.json** file    |
| Select the **refined-twitter/distribution** folder    |                                                                   |