//地图数据
var geoCoordMap = {
  '上海': [121.4648,31.2891],
  '东莞': [113.8953,22.901],
  '东营': [118.7073,37.5513],
  '中山': [113.4229,22.478],
  '临汾': [111.4783,36.1615],
  '临沂': [118.3118,35.2936],
  '丹东': [124.541,40.4242],
  '丽水': [119.5642,28.1854],
  '乌鲁木齐': [87.9236,43.5883],
  '佛山': [112.8955,23.1097],
  '保定': [115.0488,39.0948],
  '兰州': [103.5901,36.3043],
  '包头': [110.3467,41.4899],
  '北京': [116.4551,40.2539],
  '北海': [109.314,21.6211],
  '南京': [118.8062,31.9208],
  '南宁': [108.479,23.1152],
  '南昌': [116.0046,28.6633],
  '南通': [121.1023,32.1625],
  '厦门': [118.1689,24.6478],
  '台州': [121.1353,28.6688],
  '合肥': [117.29,32.0581],
  '呼和浩特': [111.4124,40.4901],
  '咸阳': [108.4131,34.8706],
  '哈尔滨': [127.9688,45.368],
  '唐山': [118.4766,39.6826],
  '嘉兴': [120.9155,30.6354],
  '大同': [113.7854,39.8035],
  '大连': [122.2229,39.4409],
  '天津': [117.4219,39.4189],
  '太原': [112.3352,37.9413],
  '威海': [121.9482,37.1393],
  '宁波': [121.5967,29.6466],
  '宝鸡': [107.1826,34.3433],
  '宿迁': [118.5535,33.7775],
  '常州': [119.4543,31.5582],
  '广州': [113.5107,23.2196],
  '廊坊': [116.521,39.0509],
  '延安': [109.1052,36.4252],
  '张家口': [115.1477,40.8527],
  '徐州': [117.5208,34.3268],
  '德州': [116.6858,37.2107],
  '惠州': [114.6204,23.1647],
  '成都': [103.9526,30.7617],
  '扬州': [119.4653,32.8162],
  '承德': [117.5757,41.4075],
  '拉萨': [91.1865,30.1465],
  '无锡': [120.3442,31.5527],
  '日照': [119.2786,35.5023],
  '昆明': [102.9199,25.4663],
  '杭州': [119.5313,29.8773],
  '枣庄': [117.323,34.8926],
  '柳州': [109.3799,24.9774],
  '株洲': [113.5327,27.0319],
  '武汉': [114.3896,30.6628],
  '汕头': [117.1692,23.3405],
  '江门': [112.6318,22.1484],
  '沈阳': [123.1238,42.1216],
  '沧州': [116.8286,38.2104],
  '河源': [114.917,23.9722],
  '泉州': [118.3228,25.1147],
  '泰安': [117.0264,36.0516],
  '泰州': [120.0586,32.5525],
  '济南': [117.1582,36.8701],
  '济宁': [116.8286,35.3375],
  '海口': [110.3893,19.8516],
  '淄博': [118.0371,36.6064],
  '淮安': [118.927,33.4039],
  '深圳': [114.5435,22.5439],
  '清远': [112.9175,24.3292],
  '温州': [120.498,27.8119],
  '渭南': [109.7864,35.0299],
  '湖州': [119.8608,30.7782],
  '湘潭': [112.5439,27.7075],
  '滨州': [117.8174,37.4963],
  '潍坊': [119.0918,36.524],
  '烟台': [120.7397,37.5128],
  '玉溪': [101.9312,23.8898],
  '珠海': [113.7305,22.1155],
  '盐城': [120.2234,33.5577],
  '盘锦': [121.9482,41.0449],
  '石家庄': [114.4995,38.1006],
  '福州': [119.4543,25.9222],
  '秦皇岛': [119.2126,40.0232],
  '绍兴': [120.564,29.7565],
  '聊城': [115.9167,36.4032],
  '肇庆': [112.1265,23.5822],
  '舟山': [122.2559,30.2234],
  '苏州': [120.6519,31.3989],
  '莱芜': [117.6526,36.2714],
  '菏泽': [115.6201,35.2057],
  '营口': [122.4316,40.4297],
  '葫芦岛': [120.1575,40.578],
  '衡水': [115.8838,37.7161],
  '衢州': [118.6853,28.8666],
  '西宁': [101.4038,36.8207],
  '西安': [109.1162,34.2004],
  '贵阳': [106.6992,26.7682],
  '连云港': [119.1248,34.552],
  '邢台': [114.8071,37.2821],
  '邯郸': [114.4775,36.535],
  '郑州': [113.4668,34.6234],
  '鄂尔多斯': [108.9734,39.2487],
  '重庆': [107.7539,30.1904],
  '金华': [120.0037,29.1028],
  '铜川': [109.0393,35.1947],
  '银川': [106.3586,38.1775],
  '镇江': [119.4763,31.9702],
  '长春': [125.8154,44.2584],
  '长沙': [113.0823,28.2568],
  '长治': [112.8625,36.4746],
  '阳泉': [113.4778,38.0951],
  '青岛': [120.4651,36.3373],
  '韶关': [113.7964,24.7028]
};

var data = [
  {name: '海门', value: 9},
  {name: '鄂尔多斯', value: 12},
  {name: '招远', value: 12},
  {name: '舟山', value: 12},
  {name: '齐齐哈尔', value: 14},
  {name: '盐城', value: 15},
  {name: '赤峰', value: 16},
  {name: '青岛', value: 18},
  {name: '乳山', value: 18},
  {name: '金昌', value: 19},
  {name: '泉州', value: 21},
  {name: '莱西', value: 21},
  {name: '日照', value: 21},
  {name: '胶南', value: 22},
  {name: '南通', value: 23},
  {name: '拉萨', value: 24},
  {name: '云浮', value: 24},
  {name: '梅州', value: 25},
  {name: '文登', value: 25},
  {name: '上海', value: 25},
  {name: '攀枝花', value: 25},
  {name: '威海', value: 25},
  {name: '承德', value: 25},
  {name: '厦门', value: 26},
  {name: '汕尾', value: 26},
  {name: '潮州', value: 26},
  {name: '丹东', value: 27},
  {name: '太仓', value: 27},
  {name: '曲靖', value: 27},
  {name: '烟台', value: 28},
  {name: '福州', value: 29},
  {name: '瓦房店', value: 30},
  {name: '即墨', value: 30},
  {name: '抚顺', value: 31},
  {name: '玉溪', value: 31},
  {name: '张家口', value: 31},
  {name: '阳泉', value: 31},
  {name: '莱州', value: 32},
  {name: '湖州', value: 32},
  {name: '汕头', value: 32},
  {name: '昆山', value: 33},
  {name: '宁波', value: 33},
  {name: '湛江', value: 33},
  {name: '揭阳', value: 34},
  {name: '荣成', value: 34},
  {name: '连云港', value: 35},
  {name: '葫芦岛', value: 35},
  {name: '常熟', value: 36},
  {name: '东莞', value: 36},
  {name: '河源', value: 36},
  {name: '淮安', value: 36},
  {name: '泰州', value: 36},
  {name: '南宁', value: 37},
  {name: '营口', value: 37},
  {name: '惠州', value: 37},
  {name: '江阴', value: 37},
  {name: '蓬莱', value: 37},
  {name: '韶关', value: 38},
  {name: '嘉峪关', value: 38},
  {name: '广州', value: 38},
  {name: '延安', value: 38},
  {name: '太原', value: 39},
  {name: '清远', value: 39},
  {name: '中山', value: 39},
  {name: '昆明', value: 39},
  {name: '寿光', value: 40},
  {name: '盘锦', value: 40},
  {name: '长治', value: 41},
  {name: '深圳', value: 41},
  {name: '珠海', value: 42},
  {name: '宿迁', value: 43},
  {name: '咸阳', value: 43},
  {name: '铜川', value: 44},
  {name: '平度', value: 44},
  {name: '佛山', value: 44},
  {name: '海口', value: 44},
  {name: '江门', value: 45},
  {name: '章丘', value: 45},
  {name: '肇庆', value: 46},
  {name: '大连', value: 47},
  {name: '临汾', value: 47},
  {name: '吴江', value: 47},
  {name: '石嘴山', value: 49},
  {name: '沈阳', value: 50},
  {name: '苏州', value: 50},
  {name: '茂名', value: 50},
  {name: '嘉兴', value: 51},
  {name: '长春', value: 51},
  {name: '胶州', value: 52},
  {name: '银川', value: 52},
  {name: '张家港', value: 52},
  {name: '三门峡', value: 53},
  {name: '锦州', value: 54},
  {name: '南昌', value: 54},
  {name: '柳州', value: 54},
  {name: '三亚', value: 54},
  {name: '自贡', value: 56},
  {name: '吉林', value: 56},
  {name: '阳江', value: 57},
  {name: '泸州', value: 57},
  {name: '西宁', value: 57},
  {name: '宜宾', value: 58},
  {name: '呼和浩特', value: 58},
  {name: '成都', value: 58},
  {name: '大同', value: 58},
  {name: '镇江', value: 59},
  {name: '桂林', value: 59},
  {name: '张家界', value: 59},
  {name: '宜兴', value: 59},
  {name: '北海', value: 60},
  {name: '西安', value: 61},
  {name: '金坛', value: 62},
  {name: '东营', value: 62},
  {name: '牡丹江', value: 63},
  {name: '遵义', value: 63},
  {name: '绍兴', value: 63},
  {name: '扬州', value: 64},
  {name: '常州', value: 64},
  {name: '潍坊', value: 65},
  {name: '重庆', value: 66},
  {name: '台州', value: 67},
  {name: '南京', value: 67},
  {name: '滨州', value: 70},
  {name: '贵阳', value: 71},
  {name: '无锡', value: 71},
  {name: '本溪', value: 71},
  {name: '克拉玛依', value: 72},
  {name: '渭南', value: 72},
  {name: '马鞍山', value: 72},
  {name: '宝鸡', value: 72},
  {name: '焦作', value: 75},
  {name: '句容', value: 75},
  {name: '北京', value: 79},
  {name: '徐州', value: 79},
  {name: '衡水', value: 80},
  {name: '包头', value: 80},
  {name: '绵阳', value: 80},
  {name: '乌鲁木齐', value: 84},
  {name: '枣庄', value: 84},
  {name: '杭州', value: 84},
  {name: '淄博', value: 85},
  {name: '鞍山', value: 86},
  {name: '溧阳', value: 86},
  {name: '库尔勒', value: 86},
  {name: '安阳', value: 90},
  {name: '开封', value: 90},
  {name: '济南', value: 92},
  {name: '德阳', value: 93},
  {name: '温州', value: 95},
  {name: '九江', value: 96},
  {name: '邯郸', value: 98},
  {name: '临安', value: 99},
  {name: '兰州', value: 99},
  {name: '沧州', value: 100},
  {name: '临沂', value: 103},
  {name: '南充', value: 104},
  {name: '天津', value: 105},
  {name: '富阳', value: 106},
  {name: '泰安', value: 112},
  {name: '诸暨', value: 112},
  {name: '郑州', value: 113},
  {name: '哈尔滨', value: 114},
  {name: '聊城', value: 116},
  {name: '芜湖', value: 117},
  {name: '唐山', value: 119},
  {name: '平顶山', value: 119},
  {name: '邢台', value: 119},
  {name: '德州', value: 120},
  {name: '济宁', value: 120},
  {name: '荆州', value: 127},
  {name: '宜昌', value: 130},
  {name: '义乌', value: 132},
  {name: '丽水', value: 133},
  {name: '洛阳', value: 134},
  {name: '秦皇岛', value: 136},
  {name: '株洲', value: 143},
  {name: '石家庄', value: 147},
  {name: '莱芜', value: 148},
  {name: '常德', value: 152},
  {name: '保定', value: 153},
  {name: '湘潭', value: 154},
  {name: '金华', value: 157},
  {name: '岳阳', value: 169},
  {name: '长沙', value: 175},
  {name: '衢州', value: 177},
  {name: '廊坊', value: 193},
  {name: '菏泽', value: 194},
  {name: '合肥', value: 229},
  {name: '武汉', value: 273},
  {name: '大庆', value: 279}
];

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

export const mapOption = {
  backgroundColor: '#404a59',
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   orient: 'vertical',
  //   top: 'bottom',
  //   left: 'right',
  //   data:['北京 Top10', '上海 Top10', '广州 Top10'],
  //   textStyle: {
  //     color: '#fff'
  //   },
  //   selectedMode: 'single'
  // },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      },
      position: ['50%', '50%']
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#404a59'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: function (val) {
        return val[2] / 10;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(data.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 6)),
      symbolSize: function (val) {
        return val[2] / 10;
      },
      showEffectOn: 'emphasis',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    }
  ]
};