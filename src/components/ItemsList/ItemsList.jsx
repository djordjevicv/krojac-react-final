import { useState } from "react";
import { Item } from "../Item/Item";
import { colors } from "../../utilities/colors";

export function ItemsList({ itemsList, setItemsList }) {

    return (
        <div className="w-100 mt3 mb1 tc flex flex-column justify-center items-center br2"
            style={{ background: colors.darkBackground2 }}>
            {
                itemsList.map((item) =>
                <Item key={item.key} id={item.id} itemsList={itemsList} setItemsList={setItemsList} text={item.text} />)
            }
        </div>
    )
}
