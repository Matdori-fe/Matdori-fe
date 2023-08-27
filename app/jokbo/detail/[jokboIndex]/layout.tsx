export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-[20px]">{children}</div>
    </>
  );
}
