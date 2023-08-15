import { Skeleton } from "antd";

const BigStoreSkeleton = () => {
  return (
    <>
      <div className="w-full h-[120px] rounded-[15px] border-[1px] border-lightGray flex items-center justify-between px-[15px] my-[12px]">
        <Skeleton.Avatar
          active
          size={100}
          shape="square"
          style={{ borderRadius: "15px", marginRight: "1rem" }}
        />
        <div className="w-8/12 h-full ml-[10px] mt-7">
          <Skeleton
            active
            avatar={false}
            title={false}
            paragraph={{ width: "80%", rows: 1 }}
            style={{ marginTop: "2px" }}
          />
          <Skeleton
            active
            avatar={false}
            title={false}
            paragraph={{ width: "23%", rows: 1 }}
            style={{ marginTop: "4px", marginBottom: "4px" }}
          />
          <Skeleton
            active
            avatar={false}
            title={false}
            paragraph={{ width: "90%", rows: 1 }}
            style={{ marginTop: "2px" }}
          />
          <Skeleton
            active
            avatar={false}
            title={false}
            paragraph={{ width: "90%", rows: 1 }}
            style={{ marginTop: "2px" }}
          />
        </div>
      </div>
    </>
  );
};

export default BigStoreSkeleton;
