import './App.css';
import {useState} from 'react';

function App() {
  let counter = 0;
  const IFNgamma = ['IFN-γ', ++counter, ...useState(false)];
  return (
    <div className="App">
      <p>
        <Blank>CD4</Blank>陽性のナイーブT細胞は，
        <Blank>IL-12</Blank>や<Mul props={IFNgamma}/>の存在下でTh1に，
        <Blank>IL-4</Blank>の存在下でTh2に分化する．
        Th1は<Mul props={IFNgamma}/>を産生し，
        Th2は<Blank>IL-4</Blank>，<Blank>IL-5</Blank>，<Blank>IL-9</Blank>，<Blank>IL-13</Blank>を産生する．
      </p>
    </div>
  );
}
function Blank({children}) {
  const [visible, show] = useState(false);
  return visible ? <span>{children}</span> : <span onClick={show}> (　) </span>;
}
function Mul({props: [str, counter, visible, show]}) {
  return visible ? <span>{str}</span> : <span onClick={show}> ( {counter} ) </span>;
}

export default App;
