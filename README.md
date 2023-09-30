# react_app_starter

This project starter has the following stack and features:

1. Project initialized by using CRA
2. React router dom v6
3. TypeScript
4. Redux Toolkit/RTK queries
5. Eslint/Prettier/Style Lint
6. Path aliases
7. StoryBook
8. Jest/Enzyme
9. Css Modules
10. Changing themes
11. Changes languages

To use this project use following commands:\
- ``git clone https://github.com/chagovcev/react_app_starter.git .``
- ``npm install``

Now project is installed.\

You can run **StoryBook** with command:
- ``npm run storybook``

If you have any problems with Prettier, just run the command:
- ``npm run format``

Project run with command:
- ``npm run start``

Component has this minimal structure:
```
components
└----Button
|    |   Button.module.scss
|    |   Button.stories.tsx
|    |   Button.tsx
|    └---index.ts
```
There is a store in ``src/store/index.ts``. You can add reducers and api slices here.