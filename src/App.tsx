import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getUsersSelector,
  getErrorSelector,
} from "./store/users/selectors";
import { fetchUsersList } from "./store/users/actions";
import Autocomplete from "./components/Autocomplete";
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const usersInfo = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  const renderLoading = () => (<div className="container" ><h1>Loading...</h1></div>)
  const renderError = () => (<div className="container" ><h1>Error</h1></div>)

  const users = usersInfo.users.map(user=> user.name)

  return (
    <div>
      {pending ? (
        renderLoading()
      ) : error ? (
        renderError()
      ) : (
        <Autocomplete options={users} />
      )}
    </div>
);
};

export default App;