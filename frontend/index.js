const { useState, useEffect } = React;

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://65.2.82.242:8000/")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return React.createElement("h1", null, msg);
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);

