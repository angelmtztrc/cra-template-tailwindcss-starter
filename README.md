# cra-template-tailwindcss-starter

![npm](https://img.shields.io/npm/dw/cra-template-tailwindcss-starter) [![npm version](https://badge.fury.io/js/cra-template-tailwindcss-starter.svg)](https://badge.fury.io/js/cra-template-tailwindcss-starter)

This is a create-react-app template for create a react project with tailwindcss already configured.

## Usage

To use this template, you should run the following command in your terminal / cmd.

```sh
npx create-react-app your-app-name --template tailwindcss-starter
```

## Extra

- You can completely edit the `tailwind.config.js` file to add your custom values
- To generate the tailwindcss development file you must run the following command:
  ```sh
  yarn build-css:develop
  ```
- To generate the tailwindcss production file you must run the following command:
  ```sh
  yarn build-css:production
  ```
- This template includes a plugin to organize the classes in your files with the help of prettier. You only need to run:
  ```sh
  yarn format
  ```

## This project use

All the important libraries that the project use.

- create-react-app
- tailwindcss
- prettier / prettier-plugin-tailwind

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

[MIT LICENSE](LICENSE) - Angel Martinez
