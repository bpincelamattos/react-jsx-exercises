let Header = () => {
    //Design a header for your blog
    return (
        <div>
            <header>
                <h1>Barbara`s Blog</h1>
                <h3>Journal of a Junior Developer</h3>
                <p>Posted by Barbara Phillips</p>
            </header>
        </div>
    )
}
let Article = () => {
    //Write and design your blog article
    return (
        <div>
            <i>React is a JavaScript library that helps you write complex front-end applications. It provides convenient syntax for:</i>
            <ul>
                <li>Creating reusable UI components</li>
                <li>Managing and displaying data</li>
                <li>Adding event handler functions</li>
            </ul>        
            <i>It has become the most widely used JavaScript library, and it has influenced the current design of other libraries and frameworks such as Vue.js and Angular. In the previous lesson, you learned how to use the create-react-app tool to generate starter code for a React project. In this lesson, you'll customize that starter code and add to it.To begin, we'll write a "Hello World" style application in React. Then, we'll create a custom "Greeter" Component.</i>
        </div>
    )
}
let Footer = () => {
    //Design a footer for your blog
    return (
        <div>
            <footer>
                <p>For more Informations send me an email: <a href="#">bphillips@email.com</a></p>
            </footer>
        </div>
    )
}

let Blog = () => {
    // Make this Component render the header, article, and footer
    return (
        <div>
            <Header />
            <Article />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Blog />, document.getElementById('root'))