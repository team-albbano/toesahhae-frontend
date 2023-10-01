import { useEffect } from 'react';
import { useUserStore } from '../../stores';

function Main() {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    setUser({
      name: '퇴사해',
      email: 'toesahhae@gmail.com',
      id: 1,
    });
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
      <p>안녕하세요, {user?.name}님</p>
    </div>
  );
}
export default Main;
