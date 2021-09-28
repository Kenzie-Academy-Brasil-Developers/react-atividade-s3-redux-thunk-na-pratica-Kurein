import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCommentThunk } from "./store/modules/user/thunks";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { name, comments } = useSelector((state) => state.user);

  return (
    <div className="App">
      <h1>{name}</h1>
      <div>
        {comments.map((comment) => {
          return <p key={comments.indexOf(comment)}>{comment}</p>;
        })}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addCommentThunk(text))}>Comentar</button>
    </div>
  );
}

export default App;
