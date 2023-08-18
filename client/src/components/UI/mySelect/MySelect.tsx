import React from "react";
import cl from './MySelect.module.css';
import { optionType, optionValueTypes } from "../../../types/HTMLtypes";

interface MySelectProps {
  options?: optionType[],
  defaultName: string,
  defaultValue: optionValueTypes,
  selectValue: string,
  onChange: Function,
}

const MySelect:React.FC<MySelectProps> = ({
    options,
    defaultName,
    defaultValue,
    selectValue,
    onChange,

}) => {
  return (
    <select className={cl.mySelect}
      value={selectValue} onChange={(e) => onChange(e.target.value)}>
        <option disabled value={defaultValue} className={cl.myOption}>{defaultName}</option>

        {options?.map(option => (
            <option value={option.value} className={cl.myOption}
                    key={option.value}>{option.name}</option>
        ))}

    </select>
  )
}

export default MySelect;