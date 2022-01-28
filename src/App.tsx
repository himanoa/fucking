import { Bad } from './Bad'
import { Good } from './Good'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="good">
        <h1>Good</h1>
        <p>inputそれぞれがstateを持っているため、全体が更新されない</p>
        <Good />
      </div>

      <div className="Bad">
        <h1>Good</h1>
        <p>stateが集約されており一つのinputを更新すると全体が更新されてしまう</p>
        <Bad />
      </div>
    </div>
  );
}

export default App;
