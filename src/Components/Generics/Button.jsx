import React from 'react';

const Button = (props) => {
  return (
    <>
      <button className={props.cButton} type={props.type}>{props.children}</button>
    </>
  )
}

export default Button
