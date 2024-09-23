import "./App.css";
import Divider from "./components/divider/Divider";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import NewPage from "./components/newpage/NewPage";
import PageList from "./components/page-list/PageList";

function App() {
  return (
    <>
      <Header />
      <Info />
      <NewPage />
      <Divider />
      <PageList />
    </>
  );
}

export default App;
