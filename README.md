<p align="center">
  <a href="https://hahow.design">
    <img width="200" src="https://user-images.githubusercontent.com/559351/56355239-65e0c300-6208-11e9-894d-67c09156aec9.png">
  </a>
</p>

<h1 align="center">Hahow Design</h1>

🚧🚧🚧

## Table of Contents

* Quick Start
  * Installation
  * How to Use
* Feature
* Purpose
* Roadmap
  * To-do List
* Usage
  * Directory Structure
  * Development
  * 如何使用 `npm link` 本地開發

## Quick Start

### Installation

```
$ npm install --save @hahow/hahow-design
```

or

```
$ yarn add @hahow/hahow-design
```

### How to Use

```js
import { Button } from '@hahow/hahow-design';

function App() {
  return <Button>Hello World!</Button>
}
```

<img width="260" alt="Screen Shot 2019-04-25 at 4 23 37 PM" src="https://user-images.githubusercontent.com/559351/56721156-e195bf00-6776-11e9-93e4-86d9c0e6cd80.png">

其它元件的詳細使用方式請見 [https://hahow.design](https://hahow.design)（WIP）

---

## Feature

* 開箱即用 Component Library（or Pattern Library）
* 快速迭代 Hahow Style 產品原型
* [Automated Visual Testing](https://storybook.js.org/docs/testing/automated-visual-testing/) for [Storybook](https://storybook.js.org/) and [Chromatic](https://www.chromaticqa.com/)

## Purpose

<p align="center">
  <img src="https://user-images.githubusercontent.com/559351/56781700-9fbc5580-6816-11e9-97db-3617e428fc78.png" alt="Design System">
</p>

![Designer and engineer](https://user-images.githubusercontent.com/559351/56781764-da25f280-6816-11e9-984b-7f709764127f.png)

![Consumer and engineer](https://user-images.githubusercontent.com/559351/56781765-db571f80-6816-11e9-99ac-205d9c3da33b.png)

![Consumer and designer](https://user-images.githubusercontent.com/559351/56781768-dc884c80-6816-11e9-9dc5-73e81e6725a2.png)

### Pros & Cons

Component Library 成為獨立 repository 的好處：

* 降低 **hh-frontend-react** 的 bundle size，增加 build time 效率

壞處：

* 🚧 增加開發成本，詳見「如何使用 `npm link` 本地開發」

Open Source 的好處：

* 一些第三方服務對開源方案免費（例如 [Chromatic](https://www.chromaticqa.com/)）
* 搞不好會有人送 PR
* 信譽驅動開發（工程師要化妝才敢出門）
* 增加品牌影響力（想像一下 [Ant Design](https://ant.design/)）

## Roadmap

![Roadmap](https://user-images.githubusercontent.com/559351/56786069-2e869d80-682a-11e9-970a-8c9779859503.png)

### To-do List

| 正在做的事 | 應該做的事 | 想做的事 |
| --- | --- | --- |
| ✅Component Library | [Design system renew](https://paper.dropbox.com/doc/Design-system-renew--AcI16u6sqkdJSLGzMylM6j1cAg-Pb5lMXAcTLHfHQ2RagjkP) | |
| ✅Open-source | | |
| Apply https://hahow.design | |

---

## Usage

### Directory Structure

```
.
├── .circleci ---------------------- ⑧
├── .storybook --------------------- ⑨
├── src
│   ├── Component ------------------ ①
│   │   ├── Component.js ----------- ③
│   │   ├── Component.stories.js --- ⑤
│   │   ├── Component.test.js ------ ④
│   │   └── index.js --------------- ②
│   └── index.js ------------------- ⑥
└── nwb.config.js ------------------ ⑦
```

<details>
  <summary>1. React Component</summary>
  <ul>
    <li>資料夾名稱採用 Pascal Case 命名法（例如：PrimaryButton）</li>
  </ul>
</details>
<details>
  <summary>2. 需建立 entry file</summary>
  <p>
    ```js
    export { default } from './Component';
    ```
  </p>
</details>
<summary>3. 元件主要的程式碼</summary>
<details>
  <summary>4. Jest 單元測試</summary>
  <ul>
    <li>檔名後輟 ***.test.js**</li>
  </ul>
</details>
<details>
  <summary>5. Storybook stories</summary>
  <ul>
    <li>檔名後輟 ***.stories.js**</li>
    <li>Chromatic 依據此檔做 visual testing</li>
  </ul>
</details>
<details>
  <summary>6. 最後記得將新增元件加入此 exporting list，否則 `npm run build` 不會有結果</summary>
  <ul>
    <li>檔名後輟 ***.stories.js**</li>
    <li>Chromatic 依據此檔做 visual testing</li>
  </ul>
</details>
<summary>7. 這個專案使用 [nwb](https://github.com/insin/nwb) 這套工具來 build React Component Library</summary>
<summary>8. CircleCI 配置</summary>
<summary>9. Storybook 配置</summary>

### Development

```
$ npm start
```

```
$ npm test
```

```
$ npm version <major|minor|patch>
```

```
$ npm publish
```

### 如何使用 `npm link` 本地開發

如果你希望透過直接修改本地原始碼的方式來加速開發效率，建議使用 [npm link](https://docs.npmjs.com/cli/link.html)。

Step 1

`git clone` **@hahow/hahow-design** 至任意位置：

```
$ git clone https://github.com/hahow/hahow-design.git
```

or

```
$ git clone git@github.com:hahow/hahow-design.git
```

Step 2

使用 `npm link` 建立 global folder：

```
$ cd hahow-design
$ npm link
```

Step 3

切換至使用 **@hahow/hahow-design** 的專案（以 **hh-frontend-react** 為例）：

```
$ cd hh-frontend-react
```

同樣使用 `npm link` 建立 symlink：

```
$ npm link @hahow/hahow-design
```

完成。如果接下來有變更 **@hahow/hahow-design** 的原始碼，只需要 `npm run build`，**hh-frontend-react** 就會即時更新：

```
$ npm run build
```

如果 **hh-frontend-react** 想要取消 symlink，可以使用 `npm unlink`：

```
$ npm unlink @hahow/hahow-design
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
