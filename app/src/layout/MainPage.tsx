import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/rootReducer';
import { fetchData } from '../state/actions/actions';
import UserComponent from './UserComponent';

function MainPage() {
  const loading = useSelector((state: RootState) => state.data.loading);
  const userData = useSelector((state: RootState) => state.data.userData);
  const error = useSelector((state: RootState) => state.data.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div>
      {loading && <h4>Loading ...</h4>}
      {error && <h4>{error.message}</h4>}
      {userData.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
      <UserComponent />
    </div>
  );
}

export default MainPage;