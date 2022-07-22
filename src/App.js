import React, { Component } from 'react'
import './App.css'
import Navbar from './navbar'
import Counters from './components/Counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }

  handleIncrement = (counter) => {
    // console.log(counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    console.log('event handler called', counterId)
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    this.setState({ counters })
  }
  render() {
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    )
  }
}

export default App
