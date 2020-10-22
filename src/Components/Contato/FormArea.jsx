import React from 'react';

const FormArea = (props) => {
  return (
    <>
      <label className={props.cLabel}>{props.text}</label>
      <textarea className={props.cArea} name="mensagem" cols={props.cols} rows="7"></textarea>
    </>
  )
}

export default FormArea
