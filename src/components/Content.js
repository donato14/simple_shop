import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 재고Context } from '../App';

const Content = (props) => {

  let 재고 = useContext(재고Context);
  let history = useHistory();

  return (
    <div className='col-md-4' onClick={()=>{ history.push('/detail/' + (props.shoes.id)) }}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
};

export default Content;