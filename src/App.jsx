import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="reds height">
      essa é uma div
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);