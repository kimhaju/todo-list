import React from 'react';
import './Form.css'

const Form = ({value, onChange, onCreate, onKeyPress})=>{
  //->총 4개의 props를 받아옴 
  //->인풋의 내용, 버튼이 클릭될때 실행되는 함수 
  //->on change 인풋 내용이 변경될때 실행되는 함수 
  return (
  <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
      +plus
    </div> 
  </div>
  );
};
export default Form;