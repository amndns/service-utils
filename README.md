<h1 align="center">@amndns/service-utils</h1>
<p align="center">
  <a href="https://badge.fury.io/js/%40amndns%2Fservice-utils">
    <img src="https://badge.fury.io/js/%40amndns%2Fservice-utils.svg" alt="npm version" height="18" target="_blank">
  </a>
  <a href="https://github.com/amndns/service-utils/blob/main/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/amndns/service-utils/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/amndns/service-utils/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg" />
  </a>
</p>

> `@amndns/service-utils` is a collection of common utilities and tools used by my TypeScript backend services.

## ✨ Features

**Environment Utilities**
- `function getOsEnv`
- `function getOsEnvOptional`
- `function getOsEnvArray`
- `function getPath`
- `function getPaths`
- `function getOsPath`
- `function getOsPaths`

**Logger Utilities**
- `class WinstonLogger`
- `decorator Logger`
- `interface LoggerInterface`

**TS Utilities**
- `function isDefined`
- `function toNumber`
- `function toBool`
- `function toArray`

### Good for First Timers

- [ ] Add unit tests for the environment and logger utilities.

## 🚀 Get Started

This project was created using [TypeScript](https://www.typescriptlang.org/).

Below is a guide on the common commands you might use all throughout the development process. In the project directory, you can run:

#### `yarn install`

Installs all package dependencies of the app. Make sure you have [yarn](https://yarnpkg.com/) installed and configured first.

#### `yarn build-ts`

Transpiles all of the `.ts` files from the `src/` directory into `.js` CommonJS files. This also "franks" the dist folder by copying the `package.json`, `README.md`, and `LICENSE` files into it. The target directory is in the `dist/` folder.

> **_NOTE:_**  When publishing this module, make sure you publish the "franked" `dist/` directory instead of the root directory. This is so projects can cleanly import from the subfolders of this module.

#### `yarn lint`

Launches the linter against all of the `.ts` files from the `src/` and `test/` directory. The project specifically uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) as the linter and code formatter, respectively.

#### `yarn test:unit`

Launches the test runner in interactive watch mode using Jest. The test is launched against all of the `.ts` files from the `test/` directory.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_