import loading from '../../../assets/loading.svg';
import { ContainerLoading } from './BasicLoading.styles';

export const BasicLoading = () => {
  return (
    <ContainerLoading>
      <div className="loader-container">
        <img src={loading} alt="loading" className="loader" />
      </div>
    </ContainerLoading>
  );
};
