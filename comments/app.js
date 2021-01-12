let ProfilePic = () => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
    )
}

let CommentBody = () => {
    return (
        <div>
            <span style={{fontWeight: "bold"}}>Username</span>
            <p>Comment Body</p>
        </div>
    )
}

let Comment = () => {
    //<span>Make each comment render a profile picture and the comment body</span>

    return (
        <div>
            <ProfilePic />
            <CommentBody />
        </div>
    )
}
    

let Comments = () => {
    //<span>Make this component render a list of comments</span>
    return(
        <div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))