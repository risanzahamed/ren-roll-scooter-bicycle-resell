import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from "./Layout/Main"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/firebase.config';
import { getUser, setUser, toogleLoading } from './Redux/features/authSlice';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email))
      }else{
        dispatch(toogleLoading())
      }
    })
  }, [])
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
