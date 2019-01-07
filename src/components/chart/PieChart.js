import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie'

let defaultOptions = {
  tooltip: {
    trigger: 'item',
    formatter: params => {
      return `${params.marker}${params.name}<br/>${params.value[1]} (占比${params.percent}%)`
    }
  },
  legend: {
    orient: 'horizontal',
    x: 'center'
  },
  dataset: [],
  series: []
}

export default class PieChart extends React.Component {
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
    const { data = [], type = 'row' } = this.props

    const seriesLength = 1

    let series = []

    if (data.length && Array.isArray(data[0])) {
      series = Array(seriesLength).fill({
        type: 'pie',
        seriesLayoutBy: type,
        encode: {
          itemName: data[0][0],
          value: data[1][0]
        }
      })
    }

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
