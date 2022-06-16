import { useEffect, useRef, useState } from 'react';
// import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([])
  const ref = useRef;
  
  console.log(messageList);


  const sendMessage = () => {
    let inputText = document.querySelector('#input').value;

    console.log(inputText);

    console.log(messageList);

    //без ошибок, но не происходит обновление массива
    //
    setMessageList(ref.current.push('inputText'));

    // при этом варианте добавление в массив только первый раз, а далее ошибка
    // setMessageList(prev => prev.push('inputText'));

  }

  
  useEffect(() => {
    ref.current = [];
  }, [])

  return (
    <div>
      <input id='input' ></input>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
