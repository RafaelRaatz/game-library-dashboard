import { ContainerLoading } from './gameSkeleton.styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const GameSkeleton = ({ cards }: any) =>
  Array(cards)
    .fill(0)
    .map((_, i) => (
      <ContainerLoading key={i}>
        <div className="loader-container">
          <div className="skeleton">
            <div className="skeleton-image">
              <Skeleton
                width={270}
                height={200}
                baseColor="#202020"
                highlightColor="#444"
              />
            </div>
            <div className="info">
              <SkeletonTheme
                baseColor="#202020"
                highlightColor="#444"
                width="200px"
              >
                <Skeleton height={30} />
                <div className="console">
                  <Skeleton width={40} />
                  <Skeleton width={100} />
                </div>
              </SkeletonTheme>
            </div>
          </div>
        </div>
      </ContainerLoading>
    ));
