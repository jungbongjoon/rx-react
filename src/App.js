import React, { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

const input$ = new BehaviorSubject("Hello, World!");

export default function App() {
  const [state, setState] = useState();

  useEffect(() => {
    const subscription = input$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [input$]);

  const onChange = event => input$.next(event.target.value);

  return (
    <div className="App">
      <input value={state} onChange={onChange} />
      <p>{state}</p>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {}
//   componentWillUnmount() {}
// }
