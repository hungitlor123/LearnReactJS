import "./App.css";
import Counter from "./components/counter/Counter";
import Toggle from "./components/toggle/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  // const name = "Hung ok ne";
  return (
    // <div>
    //   <YoutubeList>{name || "Hung ga khong them name"}</YoutubeList>
    // </div>
    <div>
      <Toggle></Toggle>
      <Counter></Counter>
    </div>
  );
}

export default App;
