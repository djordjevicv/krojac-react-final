import { useState } from "react"
import { Item } from "../Item/Item"
import { colors } from "../../utilities/colors"

export function InputForm({itemsList, addNewItem}) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (newItem === "")
      return;
    
    addNewItem([...itemsList, {
      text: newItem,
      id: crypto.randomUUID(),
      key: crypto.randomUUID(),
    }]);

    setNewItem("");
  }

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <div className="w-100 flex justify-center items-center">
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Add new item"
          type="text"
          id="item"
          maxLength={20}
          className="pa2 mr3 br2"
          style={{font: 'inherit', border: `1px solid ${colors.textColor}`, background: colors.lightBackground1}}
        />
        <button className="pv2 ph3 br2 dim"
          style={{
            font: 'inherit',
            color: colors.lightBackground1,
            background: colors.purple,  
            border: 'none'
          }}
        >Add</button>
      </div>
    </form>
  )
}
