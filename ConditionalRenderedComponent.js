export default () => {
  const [showComponent, setShowComponent] = useState(true);
  const onCLickhandler = () => {
    console.log("clicked");
    setShowComponent(!showComponent);
  };

  return (
    <>
      <div className="App">
        sample app using hook
        <br />
        <button onClick={onClickHandler}> Toggle Coponent </button>
        {showComponent && <ConditionalRenderedComponent />}
      </div>
    </>
  );
};
