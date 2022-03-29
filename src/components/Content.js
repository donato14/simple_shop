import React, { useContext, useState } from 'react';
import { 재고Context } from '../App';

const Content = (props) => {

  let 재고 = useContext(재고Context);

  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
      {재고}
    </div>
  )
};

export default Content;