import "./App.css";
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
      <PageList />
    </>
  );
}

export default App;
