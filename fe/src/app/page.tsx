import Container_LandingPage from "@/MyComponent/Components-All/Container-LandingPage";
import Article_Home from "@/MyComponent/Home/Article-Home";
import HeaderHome from "@/MyComponent/Home/Header-Home";

export default function Home() {
  return (
    <Container_LandingPage>
      <HeaderHome />
      <Article_Home />
    </Container_LandingPage>
  );
}
