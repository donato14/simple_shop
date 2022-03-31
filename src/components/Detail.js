import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../detail.scss';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';

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

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  
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

      {/* { inputData }
      <input onChange={(e)=>{ setInputData(e.target.value) }} /> */}

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

          <button className="btn btn-danger" onClick={() => {
            let stock = [...props.재고]; stock[id] = (stock[id] - 1); props.재고변경(stock);
            props.dispatch({ type: '항목추가', payload: { id: (matchProduct.id), name: (matchProduct.title), quan: 1 } });
            history.push('/simple_shop/cart');
          }}>주문하기</button> 
          <button className="btn btn-primary" onClick={() => { 
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0)}}>Tap 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"  onClick={()=>{ 스위치변경(false); 누른탭변경(1)}}>Tap 2</Nav.Link>
        </Nav.Item>
      </Nav>

      
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TapContent 누른탭 = {누른탭} 스위치변경 = {스위치변경} />
      </CSSTransition>

    </div> 
  )
};

function TapContent(props) {
  
  useEffect(() => {
    props.스위치변경(true);
  })

  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>
  } else if (props.누른탭 === 2) {
    return <div>2번째 내용입니다</div>
  }
}

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



function state를props화(state) {
  return {
    state: state.reducer,
    alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail)