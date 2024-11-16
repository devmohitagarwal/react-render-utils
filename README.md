# react-render-utils

![npm_version](https://img.shields.io/npm/v/react-render-utils)
![license](https://img.shields.io/npm/l/react-render-utils)

---

- **[Installation](#install)**
- **[Props API](#propsapi)**

---

<a name="install"></a>

## Installation

npm

```bash
npm install react-render-utils
```

yarn

```bash
yarn add react-render-utils
```

## Quick start

```html
<When
    value={isLoggedIn}
    then={<>You are logged in</>}
    otherwise={<>You are logged out</>}
>
```

one

```html
<When value="{isLoggedIn}" then="{<>You are logged in</When>}"></When>
```
