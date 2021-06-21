import React from 'react';
//->최상위 리액트 라이브러리의 진입점. 
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) =>{
  //->화살표 함수안에 객체를 폼과 칠드런으로 파라미터로 전달.
  //props: properties의 줄임말. 어떠한 값을 컴포넌트에 전달할때 사용. 
  //->컴포넌트: 일종의 ui조각. 태그 형태로 제작해서 재사용가능. 
  return (
    <main className = "todo-list-template">
      <div className = "title">
        Today list
      </div>
     <section className="form-wrapper">
       {form}
      </section> 
       <section className="todos-wrapper">
         {children}
       </section>
    </main>  
  )
}

export default TodoListTemplate;