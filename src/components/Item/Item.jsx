import { useState } from "react"
import { colors } from "../../utilities/colors"

export function Item({ text = 'dummyText', id, itemsList, setItemsList }) {
    
    const [checked, setChecked] = useState(false);

    return (
        <div className="w-100 br2 mb3 ph2 pv2 f5 flex justify-between shadow-1"
            style={{ background: colors.lightBackground2 }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <p style={{
                        margin: '0',
                        textDecoration: checked ? 'line-through' : 'none',
                        color: checked ? '#999' : colors.textColor,
                    }}
                    className=""
                >{text}</p>
            </div>

            <button className="ph2 pv1 br2 f5 dim"
                style={{
                    fontFamily: 'inherit',
                    color: colors.lightBackground1,
                    background: colors.delete,
                    border: 'none'
                }}
                onClick={
                    () => {
                        const newList = itemsList.filter((item) => item.id !== id)
                        console.log(newList);
                        setItemsList(newList);
                        
                    }
                }>Delete</button>
            
        </div>
    )
}
