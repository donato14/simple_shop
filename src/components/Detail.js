import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
  
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState();
  
  useEffect(() => {
    //컴포넌트가 마운트 되었을때, 
    //update 될때 특정 코드 실행

    //디테일 컴포넌트 로드시 바로 ajxa로 데이터를 가져오고 싶을때
    //axios.get()

    console.log(11111)
    let timer = setTimeout(() => { setAlert(false) }, 2000);
    // return ()=>{ 실행할코드~~~ } //Detail이라는 컴포넌트가 사라질때(unmount) 실행된다
    return ()=>{ clearTimeout(timer) }
  }, []);
  

  


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

      { inputData }
      <input onChange={(e)=>{ setInputData(e.target.value) }} />

      {
        alert === true
          ?
            (<div className='my-alert'>
              <p>재고가 얼마 남지 않았습니다</p>
            </div>)
          :
          null
      }
      

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(matchProduct.id) + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ matchProduct.title }</h4>
          <p>{ matchProduct.content }</p>
          <p>{matchProduct.price} 원</p>
          
          <Info 재고={props.재고} id={id}></Info>

          <button className="btn btn-danger" onClick={() => { let stock = [...props.재고]; stock[0] = (stock[0] - 1); props.재고변경(stock) }}>주문하기</button> 
          <button className="btn btn-primary" onClick={() => { 
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
};

function Info(props) {
  return (
    <p>재고 : {props.재고[props.id]}</p>
  )
}

// //이전버전 (Lifecycle Hook)
// class Detail2 extends React.Component {
//   componentDidMount() {
//     //생성될때, 렌더링 되자마자 Ajax 요청할때 사용하기도 함
//   }
//   componentWillUnmount() {
//     //사라질때
//   }
// }

export default Detail;