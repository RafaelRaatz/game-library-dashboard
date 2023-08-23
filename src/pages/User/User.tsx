import { UserList } from './UserList';
import { Container, UserContainer } from './User.styles';
import { Footer, Header, Sidebar } from '../../components';

export function UserPage() {
  return (
    <>
      <Header />
      <Container>
        <UserContainer>
          <div className="main-content">
            <Sidebar />
            <div className="main-list">
              <UserList />
            </div>
          </div>
        </UserContainer>
      </Container>
      <Footer />
    </>
  );
}
