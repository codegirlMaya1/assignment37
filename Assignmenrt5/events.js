function handleButtonClick(){
    alert ('Button clicked!');
}

function handleMouseOver(){
    console.log('Mouse over element');
}
function handleKeyDown(event){
    console.log("Mouse out of element");
}

function handleKeyDown(event){
    console.log('Key pressed:', event.key);

}

function handleSubmit(event){
    event.preventDefault();
    const username= event.target.elements.username.value;
    console.log("form submitted with username:")
}
function handleChange(event){
    console.log("Input value changed to", event.target.value);

}
function handleFocus(){
    console.log("Input element focused");
}