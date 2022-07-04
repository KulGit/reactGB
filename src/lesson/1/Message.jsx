import './Message.css';

function Message (props) {
    return (
        <div>
            <p className='button-jump'>
                {props.name}
            </p>
        </div>
    );
}

export default Message;