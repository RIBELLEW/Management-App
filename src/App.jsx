import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import StandartField from "./components/StandartField";

function App() {
  return (
    <main className="h-screen w-screen flex flex-wrap bg-stone-50 ">
      <ProjectSidebar />
      {/* <StandartField /> */}
      <NewProject />
    </main>
  );
}

export default App;
