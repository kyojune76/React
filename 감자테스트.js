





import React, {useState} from 'react';
import styled from 'styled-components';

const StyledApp=styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledBackground=styled.div`
display: flex;
  background:black ;
  width:100%;
  color:wheat;
  padding-left:20px;
  margin-bottom: 50px;
`;
const StyledChalkboard=styled.div`
  align-items:center;
  width:600px;
  height:400px;
  flex-direction:column;
  justify-content:center;
  color:white;
  overflow-y:scroll;/* 내용이 넘칠 경우 스크롤*/
  font-family:'Chalkduster','comic Sans Ms',cursive;
  font-size:32px;
  margin-bottom:0;
  box-sizing:border-box;
  border-width:3px;
  border-style:ridge;
  border-color:black;
  background-color:green
`;
const StyledChalkboardText=styled.p`

margin:0;

`;
const TextArea=styled.textarea`
  width:600px;
  padding:10px;
  font-size:20px;
  border-style:ridge;
  border-top:none;
  box-sizing:border-box;
  height:50px;
  resize:none;
`;
function App() {
 const [text,setText]=useState('');//입력된 텍스트를 저장할 상태변수
 const [chalkboardText,setChalkboardText]=useState([]); 

 const pressEnter=(e)=>{
  if(e.key==='Enter'){
    e.preventDefault();
    if(text.trim() !==''){
      setChalkboardText([...chalkboardText,text]);
      setText('');  
    }
    
  }
 }


 return (
  
    <StyledApp>
     <StyledBackground>
      <h4>감자 과제</h4>
      </StyledBackground>
      <StyledChalkboard>  
     {chalkboardText.map((line,index)=>(
      <StyledChalkboardText key={index}>{line}</StyledChalkboardText>
     ))}
      </StyledChalkboard>
      <TextArea 
      
      placeholder="입력하세요"
      value={text}//현재 상태를 텍스트 영역의 값으로 사용
      onChange={(e)=>setText(e.target.value)}//텍스트 변경 핸들러=> 입력된 값이 수정될때마다 setText를 호출하는 이벤트리스너입니다.
      onKeyDown={pressEnter}
      />
    </StyledApp>
  );
}

export default App;

