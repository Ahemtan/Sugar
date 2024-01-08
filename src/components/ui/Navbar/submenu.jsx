import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
const Submenu = (item) => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    const data = item.item
    return (
        <li className="menu-category">

            <button onClick={toggle} className={open ? "accordion-menu active" : "accordion-menu"}>
                <p className="menu-title">{data.title}</p>
                <div>
                    <FaPlus className="add-icon" />
                    <FaMinus className="remove-icon" />
                </div>
            </button>

            <ul className={open ? "submenu-category-list active" : "submenu-category-list"}>

                {
                    data.childrens.map((subdata, index) => {
                        return (
                            <li key={index} className="submenu-category">
                                <a href={`/category/${subdata.href}`} className="submenu-title">{subdata.title}</a>
                            </li>
                        )
                    })
                }

            </ul>

        </li>
    )
}

export default Submenu