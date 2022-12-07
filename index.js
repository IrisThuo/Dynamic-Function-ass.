// dynamic funcion that will be used to purely create element and add content to the elements
let addElement= () => {
    
    createElement('h1', "Element Creation")
    
    }
    
     addElement()
    //create a function to append the added element to a desired location
    function sendTo(){
    
        document.append(addElement())
    
    }
    