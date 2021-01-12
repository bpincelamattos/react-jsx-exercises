let TextInput = () => {
    //Make this component render a styled text input tag
    return (
        <input type="text" id="input" placeHolder="Type Something...." />
    )
}

let YesNoRadio = () => {
    // Make this component render two styled radio button side by side labelled "yes" and "no"
    return (
        <div>
            <input type="radio" id="yes" name="yesNo" />
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="yesNo" />
            <label for="no">No</label>
        </div>
    )
}

let SubmitButton = () => {
    // Make this component render a styled button of type "submit"
    return (
        <button type="submit" value="submit" >Submit</button>
    )
}

let Form = () => {
    // Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button 
    return (
        <div>
            <form id="form1" >
                <TextInput />
                <TextInput />
                <TextInput />
                <YesNoRadio />
                <YesNoRadio />
                <SubmitButton />
            </form>
        </div>
    )
}

ReactDOM.render(<Form />, document.getElementById('root'))