import React, {Component} from "react";
import List from "./List";
import Title from "./Title";


class Main extends Component {
    render(){
      return <div>
              <Title title={'toDos'}/>
              <List tasks = {['Do all the morning Meetings on time','KT to Devops']}/>
              <List tasks = {['Take an Interview','Learn React']}/>
            </div>
    }
  }

export default Main