import NavigationBar from "@/components/NavigationBar/NavigationBar";
export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      {children}
      <NavigationBar />
    </>
  );
}
