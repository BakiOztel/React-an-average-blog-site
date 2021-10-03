import { useEffect } from 'react';
import { useDispatch} from "react-redux";
import { useHistory } from 'react-router';


const Login = () => {
  const history=useHistory();
  const dispatch = useDispatch();
  useEffect(() =>  {
    try {
      dispatch(logoutAction());
      
    }catch(error){
      console.log(error);
    }
  }, [dispatch]);

  return (
      <div></div>
  );
};

export default Login;