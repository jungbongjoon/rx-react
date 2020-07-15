import React, { useState } from "react";

// Functional Component
function ContentInput({ content, onChange }) {
  return <input value={content} onChange={onChange} />;
}

// Functional Component
function Content({ content }) {
  return <p>{content}</p>;
}

export default function App() {
  // const [상태값, setter] = useState(기본값);
  const [state, setState] = useState("Hello, World!");

  // event를 parameter로 받고, setter를 호출하는 함수
  const onChange = event => setState(event.target.value);
  return (
    <div className="App">
      {/* props로 인자를 전달. 키={변수 혹은 함수} */}
      <ContentInput content={state} onChange={onChange} />
      <Content content={state} />
    </div>
  );
}
