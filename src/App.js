import Message from './Message';

function App() {
  const textMessage = "Create first React app";
  return (
    <div>
      <Message name={textMessage}/>
    </div>
  );
}

export default App;
