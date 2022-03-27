import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  /* color : ${ props => props.color } */
`;

function Detail(props) {

  let { id } = useParams();
  let history = useHistory();
  let matchProduct = props.shoes.find(function (product) {
    return product.id == id
  });

  return(
    <div className="container">
      <박스>
        <제목 color={'blue'} className="red">상세페이지</제목>
      </박스>

      <div className='my-alert'>
        <p>재고가 얼마 남지 않았습니다</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(matchProduct.id) + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ matchProduct.title }</h4>
          <p>{ matchProduct.content }</p>
          <p>{ matchProduct.price } 원</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-primary" onClick={() => { 
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
};

export default Detail;