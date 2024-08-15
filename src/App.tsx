import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./ui/Content";
import Main from "./ui/Main";


function App() {

  return (
    <div className="font-quickSand">
      <Header />
      <Sidebar/>
      <Main>
        <Content>Main content</Content>
      </Main>
    </div>
  );
}

export default App;
