import { useEffect, useRef, useState } from 'react';
// import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([ ]);
  const refText = useRef(null);
  const refAuthor = useRef(null);
  
  const handleSendMessage = () => {
    if (!(refText.current && refAuthor.current) || !(refText.current.value && refAuthor.current.value)) {
      return
    }
    
    setMessageList(prev => [...prev, {text: refText.current.value, autor: refAuthor.current.value}]);
    console.log(messageList);

  }
  
  useEffect(() => {
     if (messageList.length === 0) {
      return
    }
    setTimeout(() => {
      console.log(messageList.pop().autor)
    }, 2000)

  }, [messageList])

  return (
    <div>
      <p>Your message</p>
      <input ref={refText} />
      <p>Who are you?</p>
      <input ref={refAuthor} />
      <button onClick={handleSendMessage}>Send Message</button>
      <div>
        {messageList.map((item, index) => {
          return (
            <div key={index}> TEXT:  {item.text} AUTHOR:  {item.autor}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
