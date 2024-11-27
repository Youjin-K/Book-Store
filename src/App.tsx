import ThemeSwitcher from "./components/header/ThemeSwitcher";
import Layout from "./layout/Layout";
import Home from "./pages/Home";


function App() {
  return (
    <>
      {" "}
      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
