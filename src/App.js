import React, { Component } from 'react';
import exdata from './exdata'
import ReminderList from './forReminder/ReminderList'
import Search from './forReminder/Search'
import Group from './forReminder/Group'
import ReminderBigName from'./forReminder/ReminderBigName'
import GroupAdd from './forReminder/GroupAdd'
import AddReminder from './forReminder/AddReminder'
import { addGroup } from './forReminder/externalFunc'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     data : exdata,
     group : ['reminder'],
     reminder:['reminder',],
     addGroupVal : null,
     selectGroup : 'reminder',
     value: null,
     id :null,
    }
    
    this.reminderChange = this.reminderChange.bind(this)
    this.getId = this.getId.bind(this)
    this.pushGroup = this.pushGroup.bind(this)
    this.groupChange = this.groupChange.bind(this)
    this.pushReminder = this.pushReminder.bind(this)
    this.reminderfocusOut = this.reminderfocusOut.bind(this)
  }
  reminderDelete(){
    
  }


  reminderfocusOut(){
    let arr = this.state[this.state.selectGroup]
    let index = arr.indexOf(this.state.id)
    arr[index] = this.state.value
    this.setState({
      [this.state.selectGroup] : arr
    })
  }

  reminderChange(e) {
    this.getId(this.props)
    this.setState({
      value: e,
    });
  }

  pushReminder(){
    var arr = this.state[this.state.selectGroup]
    if(this.state[this.state.selectGroup]){
      this.setState({[this.state.selectGroup] : arr.concat('')})
    }
  }
  
  pushGroup(){
    if(this.state[this.state.addGroupVal] === undefined ||!this.state[this.state.addGroupVal]){
      this.setState({
        group : this.state.group.concat(this.state.addGroupVal),
        [this.state.addGroupVal] : [this.state.addGroupVal,]
      });
    }
  }

  groupChange(e) {
    this.setState({
      addGroupVal : e
    });
  }

  changeSelectGroup(e){
    this.setState({selectGroup : e})
  }

  getId(e){
    this.setState({
      id : e
    })
  }



  render() {
    return (
      <div className="App">
  
        <div className="Menu">
            알람! <Search />
          <Group onClick={(e) => this.changeSelectGroup(e)}
          group={this.state.group}/>

          <GroupAdd onClick={() => this.pushGroup()}
          onChange={this.groupChange.bind(this)}
          group={this.state.group}/>
        </div>

        <div className="main-reminder-list">
          <div className="reminder-big-name">
            <ReminderBigName name={this.state.selectGroup}/>
            <AddReminder onClick={this.pushReminder.bind(this)}/>
          </div>
          <div className="real-reminder-list">
            <ReminderList reminder={this.state[this.state.selectGroup]}
            onChange={(e)=>this.reminderChange(e)}
            onBlur={()=>{this.reminderfocusOut()}}
            func={(j)=>this.getId(j)}/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;



  // title2Change(e){
  //   e.preventDefault()
  //   let num = e
  //   data[num.id].content.title = e.content.title
  //   this.setState({ data : data[0].content.title })
  //   console.log(e)
  //   this.setState({ data })
  //   console.log(this.state.title)
  // }



  // return (
  //   <div className="App">

  //     <div className="Menu">
  //         Search <Search />
  //       <Group onClick={this.pushGroup.bind(this)} 
  //       onChange={this.groupChange.bind(this)} 
  //       group={this.state.group}/>
  //     </div>

  //     <div className="main-reminder-list">
  //       <div className="reminder-big-name">
  //         미리알림
  //       </div>
  //       <div className="real-reminder-list">
  //         <ReminderList 알림={this.state[this.state.group[0]]} 
  //         onChange={(e)=>this.titleChange(e)}
  //         func={(j)=>this.getId(j)}/>
  //       </div>
  //     </div>  
  //   </div>
  // );