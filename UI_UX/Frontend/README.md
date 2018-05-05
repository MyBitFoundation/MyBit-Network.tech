### Build Instructions

```sh
cd Frontend
npm install
npm run start
```

We need to `npm run start` so that the scss files are compiled to css files and the storybook can be displayed properly.

Once that is done, you can `npm run storybook` and it will run the development server on your local machine, and give you a URL to browse through the stories.

#### Exporting the Storybook

```sh
npm run build-storybook
```

This will generate the required files so that the storybook can be deployed as a static application. It exports the files to a directory named ".out".