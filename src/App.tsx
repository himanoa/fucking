import React from 'react'
import { Bad } from './Bad'
import { Good } from './Good'
import './App.css';

function App() {
  return (
    <div>
      <p>ReactDevtoolsを入れて開いて Highlight updates when components render. にチェックを入れてから見てね</p>
    <div className="container">
      <div className="good">
        <h1>Good</h1>
        <p>inputそれぞれがstateを持っているため、全体が更新されない</p>
        <Good />
      </div>

      <div className="Bad">
        <h1>Bad</h1>
        <p>stateが集約されており一つのinputを更新すると全体が更新されてしまう</p>
        <Bad />
      </div>
    </div>
    </div>
  );
}

export default App;
