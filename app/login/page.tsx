import LoginBox from "./components/LoginBox";

const Login: React.FC = () => {
  return (
    <div className="w-full flex justify-center flex-wrap px-[20px] mb-20">
      <div className="w-full flex justify-center flex-wrap mt-64 mb-20">
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
        </div>
        <p className="w-fit font-Bold text-[15px] text-100">MATDORI</p>
      </div>

      <LoginBox />
    </div>
  );
};

export default Login;
