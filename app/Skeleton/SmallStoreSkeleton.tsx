import { Skeleton } from "antd";

const SmallStoreSkeleton = () => {
  return (
    <>
      <div className="flex items-center w-[100px] flex-wrap mx-[8px] mt-[8px]">
        <Skeleton.Avatar
          active
          size={100}
          shape="square"
          style={{ borderRadius: "8px", marginRight: "1rem" }}
        />

        <Skeleton
          active
          avatar={false}
          title={false}
          paragraph={{ width: "100px", rows: 1 }}
          style={{ marginTop: "2px" }}
        />
      </div>
    </>
  );
};

export default SmallStoreSkeleton;
