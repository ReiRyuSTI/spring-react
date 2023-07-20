import "./App.css";
import { TestPageOne } from "./pages/Test1";
import { TestPageTwo } from "./pages/Test2";
import { TestPageThree } from "./pages/Test3";
import { TestPageFour } from "./pages/Test4";
import { TestPageFive } from "./pages/Test5";

function App() {
  return (
    <>
      <main className="flex flex-col gap-4">
        <TestPageOne />
        <TestPageTwo />
        <TestPageThree />
        <TestPageFour />
        <TestPageFive />
      </main>
    </>
  );
}

export default App;
