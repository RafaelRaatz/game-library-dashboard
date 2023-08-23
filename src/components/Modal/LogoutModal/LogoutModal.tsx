import { Link } from 'react-router-dom';
import { Container } from './LogoutModal.styles';

export function LogoutModal({ isOpen, setModalOpen }: any) {
  const LogOutUser = (e: any) => {
    e = localStorage.removeItem('token');
  };
  if (isOpen) {
    return (
      <Container>
        <div className="modal">
          <span>want to leave?</span>
          <div className="buttons">
            <Link to={`/login`}>
              <button className="exit-button" onClick={e => LogOutUser(e)}>
                exit
              </button>
            </Link>
            <button onClick={setModalOpen}>return</button>
          </div>
        </div>
      </Container>
    );
  }

  return null;
}
