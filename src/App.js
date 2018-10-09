import React, { Component } from 'react';
import PieChart from './components/chart/PieChart'
import BarChart from './components/chart/BarChart'
import LineChart from './components/chart/LineChart'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pieData: [
        ['访问来源', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
      ],
      barData: [
        ['访问来源', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ],
      lineData: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <PieChart data={this.state.pieData}/>
        <BarChart data={this.state.barData}/>
        <LineChart data={this.state.lineData}/>
      </div>
    );
  }
}

export default App;
