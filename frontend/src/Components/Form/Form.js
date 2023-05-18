import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Form = ({ formTitle, isNewForm }) => {
  let initialTitle = "";
  let initialContent = "";
  const location = useLocation();
  console.log(location.state, isNewForm);
  if (!isNewForm) {
    initialTitle = location?.state?.title;
    initialContent = location?.state?.content;
  }
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const navigate = useNavigate();

  const saveHandler = async () => {
    if (title.length === 0 || content.length === 0) {
      alert("please enter title or content");
      return;
    }
    console.log("save");

    try {
      const response = await fetch("http://localhost:8080/new", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      const res = await response.json();
      console.log(res);

      resetHandler();
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const resetHandler = () => {
    setTitle("");
    setContent("");
  };

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <div>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div>
        <textarea value={content} onChange={contentChangeHandler} />
      </div>
      <div>
        <button onClick={saveHandler}>Save</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </div>
  );
};

export default Form;
