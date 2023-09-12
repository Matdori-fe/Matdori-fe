import ModalContainer from '@/components/ModalContainer/ModalContainer';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-[20px]">{children}</div>
      <ModalContainer />
    </>
  );
}
