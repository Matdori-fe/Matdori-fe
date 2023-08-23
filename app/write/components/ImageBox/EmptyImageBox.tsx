import { RiImage2Line } from 'react-icons/ri';
const EmptyImageBox = () => {
  return (
    <div className="bg-lightGray w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-[15px] object-cover mx-2 flex justify-center items-center">
      <RiImage2Line className="text-[30px] text-gray" />
    </div>
  );
};

export default EmptyImageBox;
