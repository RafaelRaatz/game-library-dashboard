import { HomeList } from './HomeList';
import { Container, MainContainer } from './Home.styles';
import { Footer, Header, Sidebar } from '../../components';

export function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <div className="main-content">
            <Sidebar />
            <div className="main-list">
              <HomeList />
            </div>
          </div>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
}
