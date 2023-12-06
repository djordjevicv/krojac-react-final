import React, { useEffect } from 'react';
import { useState } from 'react';
import ParticlesBg from 'particles-bg';
import { InputForm } from './components/InputForm/InputForm';
import { ItemsList } from './components/ItemsList/ItemsList';
import { colors } from './utilities/colors';
import './App.css';

const initialState = [
  {
    text: 'Practice JavaScript',
    id: crypto.randomUUID(),
    key: crypto.randomUUID(),
    isChecked: false
  },
  {
    text: 'Practice React',
    id: crypto.randomUUID(),
    key: crypto.randomUUID(),
  }
]

function App() {

  const [itemsList, setItemsList] = useState(() => {
    const initialItems = localStorage.getItem("itemsList")
    if (!initialItems)
      return initialState;

    return JSON.parse(initialItems)
  });
  
  useEffect(() => {localStorage.setItem('itemsList', JSON.stringify(itemsList))}, [itemsList]);

  return (
    <div>
      <ParticlesBg color={colors.lightBackground1}
        num={80}
        type="cobweb"
        bg={true} 
      />
      <div style={{
        maxWidth: '380px',
        color: colors.textColor,
        backgroundColor: colors.lightBackground1
        }}
        className='br3 ph4 pv3 mv5 tc shadow-4'
      >
        <h1 className='f2'>My Tasks</h1>
        <InputForm 
          itemsList={itemsList}
          addNewItem={setItemsList}
        />
        <ItemsList itemsList={itemsList} setItemsList={setItemsList} />
          {
            itemsList.length === 0 ?
            <p style={{ color: colors.textColor }} className='f6'>Congratulations! You finished all of your tasks!</p> :
              (
                <div className="flex w-100 justify-between items-center br2">
                  <p style={{ margin: '0' }} className="f5 b">{itemsList.length} tasks left</p>
                  <button className="pa2 bg-purple br2 f5 dim"
                    style={{
                      fontFamily: 'inherit',
                      background: colors.purple,
                      color: colors.lightBackground1,
                      border: 'none'
                    }}
                    onClick={() => setItemsList(() => [])}
                  >
                    Clear All</button>
                </div>
              )
          }
      </div>
    </div>
  );
}

export default App;
