import React, { useReducer } from 'react';


function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 };
      case 'DECREMENT':
        return { value: state.value - 1 };
      default:
        // 아무것도 해당되지 않을 때 기존 상태 반환
   
        return state;
        [action.name]: action.value  
    }
  }


const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };



return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};



export default Info;