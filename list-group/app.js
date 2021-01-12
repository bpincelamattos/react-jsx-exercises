let ListGroupItem = () => {
    return (
        <li>List Item</li>
    )
}

let ListGroup = () => {
    return (
      <div>
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
      </div>
    )
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))