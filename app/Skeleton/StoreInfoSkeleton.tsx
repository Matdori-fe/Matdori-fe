import { Skeleton } from 'antd';
import RoundButton from '@/components/RoundButton/RoundButton';

const StoreInfoSkeleton = () => {
  return (
    <>
      <div className="flex mx-5 flex-wrap w-full">
        <div className="w-full flex justify-center">
          <Skeleton.Avatar
            active
            size={100}
            shape="square"
            style={{ borderRadius: '15px', marginRight: '1rem' }}
          />

          <div className="w-full ml-3 mt-3">
            <div className="flex w-full justify-between">
              <div className="w-1/2">
                <Skeleton
                  active
                  avatar={false}
                  title={false}
                  paragraph={{ width: '100%', rows: 1 }}
                  style={{ marginTop: '2px' }}
                />
              </div>
            </div>
            <div className="flex justify-between mx-2 mt-1">
              <div className="w-full flex flex-wrap justify-center w-[70px]">
                <div className="w-full flex">
                  <Skeleton
                    active
                    avatar={false}
                    title={false}
                    paragraph={{ width: '70%', rows: 1 }}
                    style={{ marginLeft: '10px' }}
                  />
                </div>
                <div className="w-full">
                  <Skeleton
                    active
                    avatar={false}
                    title={false}
                    paragraph={{ width: '100%', rows: 1 }}
                    style={{ marginTop: '8px' }}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <Skeleton
                  active
                  avatar={false}
                  title={false}
                  paragraph={{ width: '90%', rows: 1 }}
                  style={{ marginTop: '2px' }}
                />
                <Skeleton
                  active
                  avatar={false}
                  title={false}
                  paragraph={{ width: '90%', rows: 1 }}
                  style={{ marginTop: '2px' }}
                />
                <Skeleton
                  active
                  avatar={false}
                  title={false}
                  paragraph={{ width: '90%', rows: 1 }}
                  style={{ marginTop: '2px' }}
                />
              </div>
            </div>
            <Skeleton
              active
              avatar={false}
              title={false}
              paragraph={{ width: '100%', rows: 1 }}
              style={{ marginTop: '2px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreInfoSkeleton;
