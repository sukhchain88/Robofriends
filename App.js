import React from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import { Component } from 'react'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            Searchfield: ''
        }
    }
    OnSearchChang = (event) => {
        this.setState({ Searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriend</h1>
                <SearchBox SearchChang={this.OnSearchChang} />
                <CardList robots={filteredRobots} />
            </div>)
    }

}
export default App;