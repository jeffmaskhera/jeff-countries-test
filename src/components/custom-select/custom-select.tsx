import React, {FC, useState} from 'react'

interface Props {
    selectData: string[]
    handleSelect: (value: string)=> void
}


const CustomSelect: FC<Props> = ({ selectData, handleSelect }) => {

    const [open, setOpen] = useState<boolean>(false)
    const [name, setName] = useState<string>('Filter by Region')

    const openSelect =()=> {
        setOpen(!open)
    }

    const select =(itemSelect)=> {
        setName(itemSelect)
        handleSelect(itemSelect)
    }

    return (
        <div className="custom-select" onClick={openSelect}>

            {name}
            {
                open &&
                <div className="custom-select__container">
                    {
                        selectData && selectData.length >= 0 &&
                        selectData.map((item, id)=> {
                            return (
                                <p className="custom-select__container__item" key={id} onClick={()=>select(item)}>{item}</p>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

export default CustomSelect;