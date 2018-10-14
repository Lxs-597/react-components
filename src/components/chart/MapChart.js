import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map' //引入地图
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/effectScatter'
import 'echarts/map/js/china' // 引入中国地图

export default class MapChart extends React.Component {
  constructor(props) {
    super(props)

    this.chartNode = React.createRef()
  }

  initChart = () => {
    const { options = {} } = this.props

    this.chart = echarts.init(this.chartNode.current)

    this.chart.setOption(options)
    window.addEventListener('resize', this.resizeHandler)
  }

  resizeHandler = () => {
    this.chart.resize()
  }

  componentDidMount() {
    this.initChart()
  }

  componentDidUpdate() {
    this.initChart()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  render() {
    const { width="100%", height = '300px' } = this.props
    return (
      <div ref={this.chartNode} style={{width, height}}></div>
    )
  }
}