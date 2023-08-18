import React from "react";
import cl from './MyInput.module.css';

interface MyInputProps {
  onChange: Function, 
  value: string,
  children?: string,
  size?: string,
  wFull?: boolean,
  

}

const defaultProps = {
  children: 'Input',
  size: 'middle',
  wFull: false
}

const MyInput:React.FC<MyInputProps> = (props) => {
    props = {...defaultProps, ...props};
  const {children, size, wFull, onChange, value} = props;

  let font_size = '14px';
  let width = '150px';

  if (size === 'middle'){
    font_size ='17px';
    width = '250px';
  }

  if (size === 'big') {
    font_size = '20px';
    width = '400px';
  }

  if (wFull) {
    width = '100%';
  }

  const inputStyle = {
    'fontSize': font_size, 
    'width' : width,
  }

  return (
    <input className={cl.myInput} style={inputStyle} 
           placeholder={children} onChange={(e) => onChange(e.target.value)} value={value}/>
  )
}

export default MyInput;