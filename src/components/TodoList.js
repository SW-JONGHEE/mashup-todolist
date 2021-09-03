import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
  return (
   <TodoListBlock>
       <TodoItem text="컴포넌트 만들기" done={true}/>
       <TodoItem text="Context Api를 활용한 상태 관리" done={false}/>
       <TodoItem text="기능 구현하기" done={false}/>
   </TodoListBlock>
  );
}

export default TodoList;