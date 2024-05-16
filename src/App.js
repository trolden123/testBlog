import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['나', '가', '다']);
  let [하트, 하트변경] = useState(new Array(글제목.length).fill(0))

  let [modal, setModal] = useState(true);
  let [modalIndex, setModalTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4>DOPAMINE JUNKIE</h4>
      </div>


{
  글제목.map(function(글제목_, 증가정수){
    return <div className="list" key={증가정수}>
    <h4 onClick={()=>{setModalTitle(증가정수)
      
    }}>
      {글제목[증가정수]}
      <span onClick={(e) => {e.stopPropagation();
        let copy = [...하트];
        copy[증가정수]++;
        하트변경(copy);
        }}>
        💥
        </span>{하트[증가정수]}</h4>

    <p>2월 17일 발행</p><button onClick={()=>{
      let copy = [...글제목];
      copy.splice(증가정수,1);
      글제목변경(copy);


    }}>삭제</button>
    

  </div>



  }
  
  )


}

<input onChange={(e)=>{입력값변경(e.target.value);}}></input>
<button onClick={()=>{
  let copy = [...글제목];
  copy.unshift(입력값);
  글제목변경(copy);

  
}}>글추가</button>

      {
        modal ? <Modal title={글제목[modalIndex]}/>: null
      }


    </div>
  );
}


function Modal(props){
  return (
    <div className="modal">
    <h4>{props.title}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
    </div>
  )


}


export default App;
