import LoginBox from './components/LoginBox';

const Login: React.FC = () => {
  return (
    <div className='pt-[60px] w-full flex justify-center flex-wrap px-[20px] mb-20'>
      <div className='w-full h-[15%] max-h-30' />
      <div className='flex flex-wrap justify-center w-full'>
        <div className='flex justify-center w-full'>
          <img src='/logo.svg' alt='Logo' className='w-20 h-20' />
        </div>
        <p className='tracking-wider w-fit font-Bold text-[15px] text-100'>MATDORI</p>
      </div>
      <div className='w-full h-[10%] max-h-10' />
      <LoginBox />
    </div>
  );
};

export default Login;
