import Home from "./pages/Home/Home";
import { Routes,Route} from 'react-router-dom';
import NewReview from "./pages/NewReview/NewReview";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="/new" element={ <NewReview /> } />
        <Route path="/:id" element={<Form formTitle="Edit Your Review" isNewForm={false} />} />
        </Routes>
    </div>
  );
}

export default App;
