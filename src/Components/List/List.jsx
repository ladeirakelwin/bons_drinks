import React from 'react';

const List = (props) => {
  return (
    <li className={props.style}>{props.children}</li>
  )
}

export default List

