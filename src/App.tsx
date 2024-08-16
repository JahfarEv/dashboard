import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/RightSide/Card";
import Content from "./ui/Content";
import Main from "./ui/Main";
import Cards from "./components/LeftSide/Cards";


function App() {

  return (
    <div className="font-quickSand">
      <Header />
      <Sidebar/>
      <Main >
      <div className="flex flex-col lg:flex-row gap- md:flex-col lg:w-1/3 lg:justify-start">
        <Content>
          <Cards/>
        </Content>
          </div>
          <div className="lg:w-1/3 lg:flex lg:justify-end">
      <Card />
      </div>
      </Main>
      </div>
    
  );
}

export default App;
