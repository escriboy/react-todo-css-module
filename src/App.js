import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header
        // 전체 필터
        filters={filters}
        // 현재 필터
        filter={filter}
        // 변경되면 호출할 필터 ((filter) => setFilter(filter)) 전달하는 인자와 호출이 같으므로 참조값(setFilter)만 전달해주어도 된다.
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
