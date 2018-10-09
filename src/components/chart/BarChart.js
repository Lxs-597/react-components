import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/bar';

let defaultOptions = {
  color: ['#3398DB', '#c453ea', '#c7453e'],
  tooltip: {},
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    top: '10%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {},
  dataset: {
    source: []
  },
  series: []
};

export default class BarChart extends React.Component {
  constructor(props) {
    super(props)

    this.chartNode = React.createRef()
  }

  initChart = () => {
    this.chart = echarts.init(this.chartNode.current)

    this.mergeOptions()
    this.refreshData()

    window.addEventListener('resize', this.resizeHandler)
  }

  mergeOptions = () => {
    const { options = {} } = this.props
    defaultOptions = {
      ...defaultOptions,
      ...options
    }
  }

  refreshData = () => {
    if (!this.chart) return

    // type可选参数row、column
    const { data = [], type = 'column' } = this.props

    let seriesLength = 0

    if (data.length && Array.isArray(data[0])) {
      if (type === 'row') {
        seriesLength = data.length - 1
      } else {
        seriesLength = data[0].length - 1
      }
    }
    const series = Array(seriesLength).fill({type: 'bar', seriesLayoutBy: type})

    const options = {
      ...defaultOptions,
      dataset: {
        source: data
      },
      series
    }

    this.chart.setOption(options)
  }

  resizeHandler = () => {
    this.chart.resize()
  }

  componentDidMount() {
    this.initChart()
  }

  componentDidUpdate() {
    this.refreshData()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  render() {
    const { width = '100%', height = '300px' } = this.props
    return <div ref={this.chartNode} style={{ width, height }} />
  }
}
