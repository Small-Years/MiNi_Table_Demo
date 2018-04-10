var weeksArray = [];

var GetDepartment_info = function (that) {
  var urlStr = 'http://123.56.180.48:9080/jklApi/rest/' + 'goldDepartment/getHomePageData/' + '8a819ee651431b2701514386fa050008';
  console.log('科室详情的url：' + urlStr);

  wx.request({
    url: urlStr,
    method: "GET",
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'mhealthkey': '1'
    },
    success: function (res) {
      console.log("科室详情：" + JSON.stringify(res));

      var sList = res.data.data.scheduleInfo;
      var sch_listData = dealData(sList);

      that.setData({

        sch_listData: sch_listData,

      });
    },
    fail: function (e) {
      that.setData({
        loadingHidden: true,
      })
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sch_listData: [],
    dateArray: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var scheduleList = [
      {
        "scheduleId": "8aaf510c5e3de339015e3de932660000",
        "resourceName": "专科门诊",
        "dayOfWeek": "1",
        "timePeriod": "A",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c60c6700b0160de3031f40598",
        "resourceName": "普通门诊",
        "dayOfWeek": "1",
        "timePeriod": "A",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff80808162a3453f0162a3f036440000",
        "resourceName": "普通门诊",
        "dayOfWeek": "1",
        "timePeriod": "A",
        "docName": "赵医生",
        "doctorId": "8aaf510c53f56ee0015432b3ee760e22",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff8080815e36ffb0015e375d3d850006",
        "resourceName": "专家门诊",
        "dayOfWeek": "1",
        "timePeriod": "B",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5e0ddfd6015e2d4e85290288",
        "resourceName": "特需门诊",
        "dayOfWeek": "1",
        "timePeriod": "B",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "02f18a9c0a374b4184f35b40a9dde3f0",
        "resourceName": "专家门诊",
        "dayOfWeek": "1",
        "timePeriod": "B",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff80808160ea422a0160ea4f6fb10001",
        "resourceName": "普通门诊",
        "dayOfWeek": "1",
        "timePeriod": "C",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff80808160e90a3e0160e93c9f6e001e",
        "resourceName": "普通门诊",
        "dayOfWeek": "1",
        "timePeriod": "C",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "e34f2c6fbb134e408d67ee212b66173d",
        "resourceName": "专科门诊",
        "dayOfWeek": "2",
        "timePeriod": "A",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "72dd38ee6dad423884ba5075ca067365",
        "resourceName": "其他门诊",
        "dayOfWeek": "2",
        "timePeriod": "A",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff8080815e3c5c70015e3dc12bd20002",
        "resourceName": "普通门诊",
        "dayOfWeek": "2",
        "timePeriod": "B",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff8080815de9c956015dea16c0fd004e",
        "resourceName": "特需门诊",
        "dayOfWeek": "2",
        "timePeriod": "B",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c6290b5390162913c56de00fc",
        "resourceName": "普通门诊",
        "dayOfWeek": "2",
        "timePeriod": "C",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff8080816121c47e0161224a13d20006",
        "resourceName": "普通门诊",
        "dayOfWeek": "2",
        "timePeriod": "C",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "0ab98c9b1c874162b7b0c3797ff74759",
        "resourceName": "特需门诊",
        "dayOfWeek": "3",
        "timePeriod": "A",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "402881b05de9c5c4015dea11d62d000d",
        "resourceName": "普通门诊",
        "dayOfWeek": "3",
        "timePeriod": "A",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ff8080815e3782fc015e37a3b23e0006",
        "resourceName": "普通门诊",
        "dayOfWeek": "3",
        "timePeriod": "B",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "5d253a9c81004bc4827cc06c4ff55182",
        "resourceName": "普通门诊",
        "dayOfWeek": "3",
        "timePeriod": "B",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c62745ce401627479421d0001",
        "resourceName": "特需门诊",
        "dayOfWeek": "3",
        "timePeriod": "C",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "ad566119a9804d63885b3f6e7f52b1eb",
        "resourceName": "专家门诊",
        "dayOfWeek": "4",
        "timePeriod": "A",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "b79212dbeed74df380e0436f24af2a29",
        "resourceName": "其他门诊",
        "dayOfWeek": "4",
        "timePeriod": "A",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "81d4a516809140f08d9ce2fc3cc37836",
        "resourceName": "特需门诊",
        "dayOfWeek": "4",
        "timePeriod": "B",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "6c6cdaf06adc4f9f9e32446daa84d143",
        "resourceName": "特需门诊",
        "dayOfWeek": "4",
        "timePeriod": "B",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5dfab03a015e08caafa8004f",
        "resourceName": "特需门诊",
        "dayOfWeek": "5",
        "timePeriod": "A",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "47f8bbc4be8c4e21af23cb89c74ad796",
        "resourceName": "专科门诊",
        "dayOfWeek": "5",
        "timePeriod": "A",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5e3370ed015e33d3d8810033",
        "resourceName": "专家门诊",
        "dayOfWeek": "5",
        "timePeriod": "A",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5dfab03a015e08cadcd10054",
        "resourceName": "特需门诊",
        "dayOfWeek": "5",
        "timePeriod": "B",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "6f2e45a9d60c479eadfe4406ff7ac8b0",
        "resourceName": "会诊中心",
        "dayOfWeek": "5",
        "timePeriod": "B",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5eae93dc015eb78056a60001",
        "resourceName": "普通门诊",
        "dayOfWeek": "5",
        "timePeriod": "B",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "9ee899faebbc4cf68139aca8631b7892",
        "resourceName": "夜间会诊",
        "dayOfWeek": "5",
        "timePeriod": "C",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5ebe5987015ec1e393840158",
        "resourceName": "普通门诊",
        "dayOfWeek": "6",
        "timePeriod": "A",
        "docName": "医生C",
        "doctorId": "8a2256334b021c33014b06124fd60181",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8f8522911a484a0d9ca14ab109957fef",
        "resourceName": "普通门诊",
        "dayOfWeek": "6",
        "timePeriod": "A",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "fbc1c442ca3f11e4b00300163e004c9f",
        "resourceName": "特需门诊",
        "dayOfWeek": "6",
        "timePeriod": "A",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c6253714201626153a8fb074a",
        "resourceName": "预约挂号",
        "dayOfWeek": "6",
        "timePeriod": "B",
        "docName": "测试李医生",
        "doctorId": "8a2256334c265f88014c26d521fc0103",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "f777b64a9b224520920c34de26662934",
        "resourceName": "其他门诊",
        "dayOfWeek": "6",
        "timePeriod": "B",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "8aaf510c5e0a27d6015e0a3043920009",
        "resourceName": "特需门诊",
        "dayOfWeek": "6",
        "timePeriod": "C",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      },
      {
        "scheduleId": "699b23a064b0462890343c3f3fd2749b",
        "resourceName": "专科门诊",
        "dayOfWeek": "7",
        "timePeriod": "B",
        "docName": "医生A",
        "doctorId": "8a2256334888ffb301488b90a3fe005f",
        "ifOpenYuYueService": "0"
      }
    ];

    for (var j = 0; j < scheduleList.length; j++) {
      console.log('----' + scheduleList[j].docName);
    }

    var daysArray = getSevenDays();
    var sch_listData = dealData(scheduleList);


    this.setData({
      dateArray: daysArray,
      sch_listData: sch_listData,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // var that = this;
    // GetDepartment_info(that);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  clickDoctor: function (e) {
    var $dict = e.currentTarget.dataset;

    var tag = $dict.dayofweek;//周几
    var appdate = '';
    for (var k = 0; k < weeksArray.length; k++) {
      if (weeksArray[k].weekNum == tag - 1) {
        appdate = weeksArray[k].date_text;
      }
    }
    var dd = new Date();
    appdate = dd.getFullYear() + '/' + appdate;


    var str = '';
    var timeStr = $dict.timeperiod;
    if (timeStr=="A"){
      timeStr = '上午';
    } else if (timeStr=="B"){
      timeStr = '下午';
    }else{
      timeStr = '晚上';
    }


    str = appdate + ' ' + timeStr + ' '+$dict.docname;
    wx.showModal({
      title: '提示',
      content: str,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },

})




var getSevenDays = function () {
  var daysArray = [];
  var dayDict = {};
  var weekStr = '';
  var weekNum = '';

  for (var i = 0; i < 7; i++) {
    var date = new Date(); //当前日期
    var newDate = new Date();
    newDate.setDate(date.getDate() + i);

    var m = (newDate.getMonth() + 1) < 10 ? "0" + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
    var d = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();

    var time = newDate.getFullYear() + "-" + m + "-" + d;
    var dayStr = m + "/" + d;

    if (getWeekByDay(time) == '周一') {
      weekNum = 0;
    } else if (getWeekByDay(time) == '周二') {
      weekNum = 1;
    } else if (getWeekByDay(time) == '周三') {
      weekNum = 2;
    } else if (getWeekByDay(time) == '周四') {
      weekNum = 3;
    } else if (getWeekByDay(time) == '周五') {
      weekNum = 4;
    } else if (getWeekByDay(time) == '周六') {
      weekNum = 5;
    } else if (getWeekByDay(time) == '周日') {
      weekNum = 6;
    }
    dayDict = { "date_text": dayStr, "weekName": getWeekByDay(time), "weekNum": weekNum };

    console.log("date_text:" + dayStr + "weekName:" + getWeekByDay(time) + "weekNum:" + weekNum)
    daysArray.push(dayDict);
  }

  weeksArray = daysArray;
  return daysArray;
}

var getWeekByDay = function (dayValue) {
  var day = new Date(Date.parse(dayValue.replace(/-/g, '/'))); //将日期值格式化  
  var today = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六"); //创建星期数组  
  return today[day.getDay()];  //返一个星期中的某一天，其中0为星期日  
}


var dealData = function (scheduleInfoList) {
  var tag = weeksArray[0].weekNum;
  console.log('tag:' + tag);
  var ar = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
  var A_Mon_text_ar = [];
  var A_Tues_text_ar = [];
  var A_Wed_text_ar = [];
  var A_Thur_text_ar = [];
  var A_Fri_text_ar = [];
  var A_Sat_text_ar = [];
  var A_Sun_text_ar = [];
  var B_Mon_text_ar = [];
  var B_Tues_text_ar = [];
  var B_Wed_text_ar = [];
  var B_Thur_text_ar = [];
  var B_Fri_text_ar = [];
  var B_Sat_text_ar = [];
  var B_Sun_text_ar = [];
  var C_Mon_text_ar = [];
  var C_Tues_text_ar = [];
  var C_Wed_text_ar = [];
  var C_Thur_text_ar = [];
  var C_Fri_text_ar = [];
  var C_Sat_text_ar = [];
  var C_Sun_text_ar = [];

  for (var i = 0; i < scheduleInfoList.length; i++) {
    // console.log(scheduleInfoList[i].scheduleId + "222222");
    if (scheduleInfoList[i].timePeriod == 'A') {
      if (scheduleInfoList[i].dayOfWeek == ar[tag]) {
        A_Mon_text_ar = A_Mon_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 1]) {
        A_Tues_text_ar = A_Tues_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 2]) {
        A_Wed_text_ar = A_Wed_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 3]) {
        A_Thur_text_ar = A_Thur_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 4]) {
        A_Fri_text_ar = A_Fri_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 5]) {
        A_Sat_text_ar = A_Sat_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 6]) {
        A_Sun_text_ar = A_Sun_text_ar.concat(scheduleInfoList[i]);
      }
    }
    else if (scheduleInfoList[i].timePeriod == 'B') {
      if (scheduleInfoList[i].dayOfWeek == ar[tag]) {
        B_Mon_text_ar = B_Mon_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 1]) {
        B_Tues_text_ar = B_Tues_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 2]) {
        B_Wed_text_ar = B_Wed_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 3]) {
        B_Thur_text_ar = B_Thur_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 4]) {
        B_Fri_text_ar = B_Fri_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 5]) {
        B_Sat_text_ar = B_Sat_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 6]) {
        B_Sun_text_ar = B_Sun_text_ar.concat(scheduleInfoList[i]);
      }
    } else {
      if (scheduleInfoList[i].dayOfWeek == ar[tag]) {
        C_Mon_text_ar = C_Mon_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 1]) {
        C_Tues_text_ar = C_Tues_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 2]) {
        C_Wed_text_ar = C_Wed_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 3]) {
        C_Thur_text_ar = C_Thur_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 4]) {
        C_Fri_text_ar = C_Fri_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 5]) {
        C_Sat_text_ar = C_Sat_text_ar.concat(scheduleInfoList[i]);
      } else if (scheduleInfoList[i].dayOfWeek == ar[tag + 6]) {
        C_Sun_text_ar = C_Sun_text_ar.concat(scheduleInfoList[i]);
      }
    }
  }

  var sch_listData = [{ "time_title": "上午", "Mon_text": A_Mon_text_ar, "Tues_text": A_Tues_text_ar, "Wed_text": A_Wed_text_ar, "Thur_text": A_Thur_text_ar, "Fri_text": A_Fri_text_ar, "Sat_text": A_Sat_text_ar, "Sun_text": A_Sun_text_ar },
  { "time_title": "下午", "Mon_text": B_Mon_text_ar, "Tues_text": B_Tues_text_ar, "Wed_text": B_Wed_text_ar, "Thur_text": B_Thur_text_ar, "Fri_text": B_Fri_text_ar, "Sat_text": B_Sat_text_ar, "Sun_text": B_Sun_text_ar },
  { "time_title": "晚上", "Mon_text": C_Mon_text_ar, "Tues_text": C_Tues_text_ar, "Wed_text": C_Wed_text_ar, "Thur_text": C_Thur_text_ar, "Fri_text": C_Fri_text_ar, "Sat_text": C_Sat_text_ar, "Sun_text": C_Sun_text_ar }]

  return sch_listData;
}