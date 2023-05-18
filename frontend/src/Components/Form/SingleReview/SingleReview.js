import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const SingleReview = ({ review }) => {
    const { _id, title, content, createdAt } = review;
    const navigate = useNavigate();

  const date = new Date(createdAt).toLocaleDateString();

  const deletedHandler = async () => {
    try {
      const response = await fetch("http://localhost:8080/delete/"+_id, {
        method: "POST",
      });
      const res = await response.json();
        console.log(res);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
    };
    
    const editHandler = async () => {
        
        navigate('/' + _id, { state: {title,content } });
    }

  return (
    <tr>
      <td>{title}</td>
      <td>{content}</td>
      <td>{date}</td>
      <td>
        <button onClick={editHandler}>Edit</button>
      </td>
      <td>
        <button onClick={deletedHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default SingleReview;
