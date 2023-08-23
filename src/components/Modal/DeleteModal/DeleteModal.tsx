import { api } from '../../../services/api';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Container } from './DeleteModal.styles';

export function DeleteModal({ isOpen, setModalOpen, id }: any) {
  const RemoveGames = async () => {
    try {
      api.delete(`games/${id}`);
      location.reload();
    } catch (error) {
      error;
    }
  };

  if (isOpen) {
    return (
      <Container>
        <div className="modal">
          <div className="buttons">
            <button className="exit-button" onClick={() => RemoveGames()}>
              <AiOutlineDelete className="icon-delete" />
            </button>

            <button onClick={setModalOpen}>
              <BsArrowReturnLeft className="icon" />
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return null;
}
