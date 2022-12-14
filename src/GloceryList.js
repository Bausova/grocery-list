import { Component } from "react";
import chek from './icons.png';

export class Glocerylist extends Component {
state = {
userInput:"", 
groceryList:[]
}

onChangeEvent(e){
   this.setState({userInput:e})

}

addItem(write){
    if (write === "") {
        alert ("Please, enter an item" )
    }
    else {
let listArray = this.state.groceryList;
listArray.push(write)
this.setState({groceryList:listArray, userInput: ""})

    }
}

crosseWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray =[];
    this.setState({groceryList: listArray, userInput: ''})

}

onEnterToList(e){
e.preventDefault()
}

render(){
    return(
        <div>
            <form onSubmit={this.onEnterToList}>
        <div className="container">
            <input type="text" 
            placeholder="What to you want buy?"  
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value = { this.state.userInput}
            />
        </div>

<div className="container">
<button className="add" onClick={()=> this.addItem (this.state.userInput) }>ADD</button>
</div>

<ul>
    {this.state.groceryList.map((item, index) => (
    <li onClick={this.crosseWord}  key = {index}> <img src = {chek} width="15px" alt = "icon"/> {item}</li> ))}

</ul>

<div className="container">
<button className="delete" onClick={() => this.deleteItem()}>Delete</button>
</div>
</form>
</div>
    )
}
}
