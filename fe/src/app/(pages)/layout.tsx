import Container_LandingPage from "@/MyComponent/Components-All/Container-LandingPage";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container_LandingPage>{children}</Container_LandingPage>;
}
