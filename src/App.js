import { useEffect, useState } from 'react';
import React  from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([ ]);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [list, setList] = useState([
    {id:1, name: 'John'},
    {id:2, name: 'Jack'},
    {id:3, name: 'Smith'}

  ])
  
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!(text) || !(author)) {
      return
    }
    
    setMessageList(prev => [...prev, {
      id: lastId(prev),
      text: text,
      author: author
    }]);

    function lastId (array) {
      return array.length ? (array[array.length-1].id + 1) : 0
    } 
    console.log(messageList);

  } 
  function lastAuthor () {
    if (messageList.length === 0) {
      return
    }
    setTimeout(() => {
      console.log(messageList.pop().author)
    }, 2000)
  }
  
  useEffect(() => { lastAuthor() }, [messageList])

  return (
    <div>
      <List>
          {list.map((item) => {item.id, item.name})}
      </List>
      <form onSubmit={handleSendMessage}>
        <Box component="form"  sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">

            <p>Your message</p>
            <TextField value={text} id="outlined-basic" label="Enter Text" variant="outlined" onChange = {(e) => setText(e.target.value)} />
            <p>Who are you?</p>
            <TextField value={author} id="outlined-basic" label="Author" variant="outlined" onChange = {(e) => setAuthor(e.target.value)} />
        
        </Box>
        {/* <input value={text} onChange = {(e) => setText(e.target.value)} /> */}
        {/* <input value={author} onChange = {(e) => setAuthor(e.target.value)} /> */}
        <Button type='submit' variant="contained">Send Message</Button>
      </form>
      <div>
        {messageList.map((item) => {
          return (
            <div key={item.id}> 
                {item.text && <p> Текст сообщения {item.text}</p>}
                {item.author && <p> Автор {item.author}</p>}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
