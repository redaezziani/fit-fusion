import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "zunder",
  description: "track your orders and manage your store"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
    className="w-full flex flex-col gap-2 justify-center items-center h-screen overflow-hidden "
    >
      {children}
    </div> 
  );
}