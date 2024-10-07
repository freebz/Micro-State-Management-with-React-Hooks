const App = () => (
  <>
    <Provider>
      <h1>First Provider</h1>
      <div><Counter /></div>
      <div><Counter /></div>
    </Provider>
    <Provider>
      <h1>Second Provider</h1>
      <div><Counter /></div>
      <div><Counter /></div>
    </Provider>
  </>
);