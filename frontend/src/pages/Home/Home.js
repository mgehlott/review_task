import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {} from 'socket.io-client'
import SingleReview from '../../Components/Form/SingleReview/SingleReview';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Home = () => {

  const [ reviews, setReviews ] = useState([]);
  useEffect(() => {
    
    const fetchReview = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();
      setReviews(data);
      console.log(data);
    }
    fetchReview();

    
   
  }, []);

  return (
    <div>
          <h2>Live Review</h2>
      <Link to='/new'>
        <button>Create New Review</button>
          </Link>
      
      <table>
        <tbody>
           {
            reviews?.map((review) => {
           // {console.log(review)}
            return <SingleReview key={review._id} review={review}  />
          })
        }
       </tbody>
      </table>
    </div>
  )
}

export default Home
