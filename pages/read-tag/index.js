import { byteToString, isEmpty, formatNullCharacter, ab2hex, getQueryVariable } from '../../utils/util'
const app = getApp();

const parseNFCData = function (url) {
  console.log('url', url);
  console.log('getQueryVariable(url, "cq")', getQueryVariable(url, "cq"));
  const nfcData = data[getQueryVariable(url, "cq")];
  return nfcData;
};

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const data = {
  "UI32KF4RTI3": {
    "品牌": "铁观音",
    "产地": "福建",
    "出厂时间": "2023-12-28",
    "唯一编号": "DF72IEH3",
    '扫描次数': 0
  },
  "Q3JRI04FES9": {
    "品牌": "龙井",
    "产地": "浙江",
    "出厂时间": "2023-12-27",
    "唯一编号": "GHI3EJD7",
    '扫描次数': 0
  },
  "TUI90D8GFS3": {
    "品牌": "大红袍",
    "产地": "福建",
    "出厂时间": "2023-12-26",
    "唯一编号": "JKL2EFH9",
    '扫描次数': 0
  },
  "OP329RF0IE7": {
    "品牌": "碧螺春",
    "产地": "江苏",
    "出厂时间": "2023-12-25",
    "唯一编号": "MNO3DFJ1",
    '扫描次数': 0
  },
  "N87RF3K0SD2": {
    "品牌": "黄山毛峰",
    "产地": "安徽",
    "出厂时间": "2023-12-24",
    "唯一编号": "PQR4KGI3",
    '扫描次数': 0
  },
  "E90RFK3JGV7": {
    "品牌": "君山银针",
    "产地": "湖南",
    "出厂时间": "2023-12-23",
    "唯一编号": "STU5LHI5",
    '扫描次数': 0
  },
  "R32JF09DKL5": {
    "品牌": "蒙顶茶",
    "产地": "四川",
    "出厂时间": "2023-12-22",
    "唯一编号": "VWX6MJI7",
    '扫描次数': 0
  },
  "A09DF3JKS01": {
    "品牌": "六堡茶",
    "产地": "广西",
    "出厂时间": "2023-12-21",
    "唯一编号": "YZA7NKL9",
    '扫描次数': 0
  },
  "D83JK0RFV26": {
    "品牌": "信阳毛尖",
    "产地": "河南",
    "出厂时间": "2023-12-20",
    "唯一编号": "BCD8OPL1",
    '扫描次数': 0
  },
  "F74KJ03RF98": {
    "品牌": "都匀毛尖",
    "产地": "贵州",
    "出厂时间": "2023-12-19",
    "唯一编号": "DEF9QPM3",
    '扫描次数': 0
  },
  "H650LKJ3R20": {
    "品牌": "祁门红茶",
    "产地": "安徽",
    "出厂时间": "2023-12-18",
    "唯一编号": "GHI0RQN5",
    '扫描次数': 0
  },
  "J46RFK0L9D3": {
    "品牌": "武夷岩茶",
    "产地": "福建",
    "出厂时间": "2023-12-17",
    "唯一编号": "JKL1SRQ7",
    '扫描次数': 0
  },
  "L5703KF9JVE": {
    "品牌": "正山小种",
    "产地": "福建",
    "出厂时间": "2023-12-16",
    "唯一编号": "MNO2TRS9",
    '扫描次数': 0
  },
  "Z78RFK03JVB": {
    "品牌": "白毫银针",
    "产地": "福建",
    "出厂时间": "2023-12-15",
    "唯一编号": "PQR3UVTB",
    '扫描次数': 0
  },
  "X9A0DKF3J07": {
    "品牌": "茉莉花茶",
    "产地": "福建",
    "出厂时间": "2023-12-14",
    "唯一编号": "STU4VWCD",
    '扫描次数': 0
  },
  "C0BDFK3L09": {
    "品牌": "凤凰单丛",
    "产地": "广东",
    "出厂时间": "2023-12-13",
    "唯一编号": "VWX5EXFE",
    '扫描次数': 0
  },
  "B1CJK0RF9VE": {
    "品牌": "安吉白茶",
    "产地": "浙江",
    "出厂时间": "2023-12-12",
    "唯一编号": "YZA6FGHG",
    '扫描次数': 0
  },
  "N2DKJ0F3R90": {
    "品牌": "太平猴魁",
    "产地": "安徽",
    "出厂时间": "2023-12-11",
    "唯一编号": "BCD7HIGI",
    '扫描次数': 0
  },
  "M3EFK0J9D81": {
    "品牌": "六安瓜片",
    "产地": "安徽",
    "出厂时间": "2023-12-10",
    "唯一编号": "DEF8JKLK",
    '扫描次数': 0
  },
  "Q4RFK03L9JD": {
    "品牌": "庐山云雾",
    "产地": "江西",
    "出厂时间": "2023-12-09",
    "唯一编号": "GHI9MNOP",
    '扫描次数': 0
  },
  "S50DKJ3F9VE": {
    "品牌": "白牡丹",
    "产地": "福建",
    "出厂时间": "2023-12-08",
    "唯一编号": "JKL0QRST",
    '扫描次数': 0
  }
}

Page({
  NFCAdapter: null,
  data: {
    nfcInfo: {},
    msgTitle: '',
    typeText: { U: '网址', T: '文本' }
  },
  onShow: function () {
    this.onInit()
  },
  onInit() {
    const platform = app.globalData.platform

    if (platform == 'android') {
      this.NFCAdapter = wx.getNFCAdapter()
      this.NFClistener()
    } else {
      if (platform != 'devtools') {
        wx.showModal({
          title: '提示',
          content: '小程序NFC官方暂仅支持安卓设备',
          confirmColor: '#d93e4b',
          confirmText: '确定',
          showCancel: false
        })
      }

      this.setData({
        msgTitle: '小程序NFC官方暂仅支持安卓设备'
      })
    }
  },
  /**
   * 开始监听 NFC
   */
  NFClistener() {
    this.NFCAdapter.startDiscovery({
      success: () => {
        this.setData({
          msgTitle: '请将设备放入识别区NFC',
          msgContent: ''
        })
        // 监听 NFC 标签
        this.NFCAdapter.onDiscovered(this.discoverHandler)
      },
      fail: error => {
        this.setData({
          msgTitle: '请重试'
        })
        console.error(error)
      }
    })
  },
  /**
   * 监听回调
   */
  discoverHandler(callback) {
    console.log('==================== START ====================')
    console.log('onDiscovered callback=>', callback)
    callback.messages[0]?.records.forEach(item => {
      const nfcInfo = {
        payload: formatNullCharacter(byteToString(new Uint8Array(item.payload))),
        id: byteToString(new Uint8Array(item.id)),
        type: byteToString(new Uint8Array(item.type))
      }
      console.log('nfcInfo', nfcInfo);
    });
    if (callback.messages) {
      const record = callback.messages[0]?.records[0];
      const uuid = parseInt(ab2hex(callback.id), 16);
      const payload = formatNullCharacter(byteToString(new Uint8Array(record.payload)));
      const type = byteToString(new Uint8Array(record.type));
      const data = parseNFCData(payload);
      console.log('data', data);
      data['扫描次数'] = getRandomInt(1, 20);
      const nfcInfo = {
        payload,
        uuid,
        type,
        data: Object.keys(data).map(key => ({ key, value: data[key] })),
      }
      console.log('nfcInfo', nfcInfo)
      this.setData({ nfcInfo })
    } else {
      this.setData({ nfcInfo: {} })
    }
    // console.log('nfcInfo', this.data.nfcInfo)

    if (callback.techs.length != 0) {
      let msgContent = '可支持标签：'
      callback.techs.forEach((res, index) => {
        if (index != 0) {
          msgContent += '、'
        }
        msgContent += res
      })
      this.setData({
        msgTitle: '识别成功！',
        msgContent
      })
    } else {
      this.setData({
        msgTitle: '无效设备'
      })
    }
    console.log('===================== END =====================')
  },
  /**
   * 拷贝 NDEF 信息
   */
  onClickNDEFContent() {
    const data = this.data.nfcInfo.payload
    if (isEmpty(data)) return

    wx.setClipboardData({ data })
  },
  closeNFC() {
    if (this.NFCAdapter) {
      this.NFCAdapter.offDiscovered(this.discoverHandler)
      this.NFCAdapter.stopDiscovery()
      this.NFCAdapter = null
    }
  },
  /**
   * 注销 NFCAdapter
   */
  onHide() {
    this.closeNFC()
  },
  onUnload: function () {
    this.closeNFC()
  }
})
