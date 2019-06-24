# Новый паттерн композиции

HOC

```js
const MyComponent = props => {
  // props.theme
  // props.auth
  // props.everything

  return <div>WTF!!!</div>;
};

export default compose(
  withTheme,
  withAuth,
  withEverything
)(MyComponent);
```

Render Prop

```js
const MyComponent = () => {
  return (
    <ThemeConsumer>
      (theme =>
      <AuthConsumer>
        (auth =>
        <EverythingConsumer>
          (everything => <div>WTF!!!</div>)
        </EverythingConsumer>
        )
      </AuthConsumer>
      )
    </ThemeConsumer>
  );
};

export default MyComponent;
```

Hooks

```js
const MyComponent = () => {
  const theme = useTheme();
  const auth = useAuth();
  const everything = useEverything();

  return <div>WTF?</div>;
};

export default MyComponent;

```

