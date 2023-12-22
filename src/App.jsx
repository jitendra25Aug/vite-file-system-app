import { useSelector } from "react-redux";
import FileSystemContainer from "./components/FileSystemContainer";

const App = () => {
  const { fileSystemData } = useSelector((store) => store.dataSlice);
  return (
    <main className="section-center">
      <h2>File Explorer</h2>
      <div>
        <FileSystemContainer data={fileSystemData} />
      </div>
    </main>
  );
}

export default App;