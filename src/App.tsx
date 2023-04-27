import { UIEvent, useRef, useState } from 'react';
import { data } from './mockData';
import './App.css'

function App() {
  const divRef = useRef<HTMLDivElement | null>(null)
  const rowHeight: number = 60
  const visibleRows: number = 4
  const [firstVisibleStroke, setFirstVisibleStroke] = useState<number>(0);
  const topDivHeight: number = rowHeight * firstVisibleStroke
  const bottomDivHeight: number = rowHeight * (data.length - (firstVisibleStroke + visibleRows))

  const update = (e: UIEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;    
    setFirstVisibleStroke(Math.floor(target.scrollTop / rowHeight))
  }

  return (
    <div className='wrapper'>
      <div ref={divRef} style={{ height: rowHeight * visibleRows }} onScroll={update}>
        <div style={{ height: topDivHeight }}></div>
        <ul>
          {data.slice(firstVisibleStroke, firstVisibleStroke + visibleRows + 1).map((str, index) =>
            <li key={firstVisibleStroke + index} style={{ height: rowHeight }}>
              <span>{str}</span>
            </li>
          )}
        </ul>
        <div style={{ height: bottomDivHeight }}></div>
      </div>
    </div>
  );
}

export default App;
