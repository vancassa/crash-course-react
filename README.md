# Crash Course React

## Creating a new React application

Use `create-react-app` to bootstrap your initial setup.

```
npx create-react-app <project-name>
```

Or if you want to install create-react-app into your computer:

```
npm install -g create-react-app
create-react-app <project-name>
```

## Starting the React application

In the root, run `yarn start` to start your application.

## React's ecosystem

[React's official guide](https://reactjs.org/docs/getting-started.html) is a good place to start learning about React.

### Styling

While you can create a dedicated CSS file and import it into your component, there are other ways to do your styling.

One popular method is to use CSS in JS. [styled-components](https://styled-components.com/) is the most popular CSS in JS library.

### Component Library

Instead of creating components from scratch, you can use existing component libraries out there. The most popular component library is [Material UI](https://material-ui.com/) and [Ant Design](https://ant.design/). These component libraries might have their own way of styling the component.

### Routing

To control the routes (e.g. what component to be shown on `/home` or `/about`), the most popular library is [react-router](https://reactrouter.com/).

### State Management Library

When your application gets big, sometimes a state management library is needed. The most popular state management library is [Redux](https://redux.js.org/).

If React hook `useState` is used for local state management (the state is only available within the component), Redux is used for global state management (the state is available for all components to access).

There are some people who are against Redux and prefer to use other React hooks to achieve the same thing, by using `useReducer` and `useContext`. There are multiple pros and cons surrounding it.

### Testing

[jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) is the most popular combination to test your React application.

## Building and deploying React application

In the root, run:

```
yarn build
```

React will create a folder called `build` in the root. You can then transfer the content of this `build` folder into your server.

For example, in [Neocities](https://neocities.org/), you can upload the content of this `build` folder. Your React application will be available there.
