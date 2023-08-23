import { ContainerLoading } from './userSkeleton.styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const UserSkeleton = ({ cards }: any) =>
  Array(cards)
    .fill(0)
    .map((_, i) => (
      <ContainerLoading key={i}>
        <div className="loader-container">
          <div className="skeleton">
            <div className="skeleton-image">
              <Skeleton
                width={85}
                height={85}
                baseColor="#202020"
                highlightColor="#444"
              />
            </div>
            <div className="menu">
              <SkeletonTheme
                baseColor="#202020"
                highlightColor="#444"
                width="200px"
              >
                <div className="info">
                  <Skeleton width={100} height={30} />
                  <div className="console">
                    {' '}
                    <Skeleton width={100} />|
                    <Skeleton width={80} />
                  </div>
                </div>

                <div className="buttons">
                  <Skeleton width={60} height={40} />
                  <Skeleton width={60} height={40} />
                  <Skeleton width={60} height={40} />
                </div>
              </SkeletonTheme>
            </div>
          </div>
        </div>
      </ContainerLoading>
    ));
