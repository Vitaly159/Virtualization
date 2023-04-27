import { UIEvent, useRef, useState } from 'react';
import { data } from './mockData';
import './App.css'

function App() {
  const uListRef = useRef<HTMLUListElement | null>(null)
  const rowHeight: number = 60
  const visibleRows: number = 4
  const [firstVisibleStroke, setFirstVisibleStroke] = useState<number>(0);

  const update = (e: UIEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;    
    setFirstVisibleStroke(Math.floor(target.scrollTop / rowHeight));
  };

  return (
    <div className='wrapper'>
      <div style={{ height: rowHeight * visibleRows }} onScroll={update}>
        <ul ref={uListRef} style={{ height: rowHeight * data.length }}>
          {data.slice(firstVisibleStroke, firstVisibleStroke + visibleRows + 1).map((str, index) =>
            <li key={firstVisibleStroke + index} style={{ height: rowHeight, top: rowHeight * firstVisibleStroke }}>
              <span>{str}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
