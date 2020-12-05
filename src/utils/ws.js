// 这里是管理ws通信的JS文件
// 创建路径
var websock = new WebSocket('wss://www.sundaytek.com/wss')
websock.onopen = function () {
  console.log('连接成功，正在发送数据')
  websock.send('register@eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDQwNmZiODA5ZjhkYTk3Mzg2N2M2ODU1Njk5MzI1ZGJkNDBkZDlmNTc5ZmI4ZjlhNmU1M2EwMmI1ZjJlYzY4YzUyNzNlYWQ4YmUyMDRkMGMiLCJpYXQiOjE2MDU1MTMyMDMsIm5iZiI6MTYwNTUxMzIwMywiZXhwIjoxNjM3MDQ5MjAzLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.NZbRDVMSdoa4sHuMJQG90J3RHQohUBxrfZaijSRVVADgC6EeqextMGZ_pmuYHOwnbFEiIKDK9yRCiZ6oUsMBRnhsLJz3Kia_CA6OYKZ-SGy5Ns5yxTVA6oLJrjRnJMQl0U1iKd-zHGaSo06Ry8dQkSuSxlutd35GMJseIVLJqORtyKQhE3590gz1tZsARuWmpzXAo5Dx1YW2kK42Aqbq8Ue9phJ1YbslxMZdLoEdY99TDAZwHsIXkx5dLETUYkVAdIdw01oPf4ErBT-a1MJYKo-6QL4aGenuTdZIOe5cOV8w0MFo6M5oJ_--4MShqi2se75JazhIk0ZcWAmeHhT7Tg_ahDH0q3awoVwrHRwFOnl0uzsEKc59gzWXOYqK9EphQLSJVyHplv482gu_jEM7JA7yvRoKVxjIbOyz6WnxJMMtwfDYkxCswaS_Go5FDtW6hgT4V9-XWwLli2hFucY28tAacoiE3oa36SW6ZjQ5rpFST_YfKuumz4M8ikr3ZecpEwYCWClYAVV3JlBclk2l0rJAwd9oqBfDIRVs9uYdwpYPW1kaxmFBvD250kWt-tidKMr7pkIyGxX4LhXa9NlEjXbawyz3YlsAbV5hWmtC1uBWbcXsHZpElFtlh_osQrjBZpFA_ItIhHZt7u20HJFpo5RfFdT5buZ2UXk5rD8h3I4')
}

websock.onmessage = function (e) {
  // 当前e.data的值是一个json字符串
  console.log('收到服务返回值' + e.data)
  // 将json字符串转换为对象
  var resData = JSON.parse(e.data)
  console.log(resData.key)
  switch (resData.key) {
    case 'register':
    // 现在是register阶段，还需要判断服务器返回的value值是否正确
      switch (resData.value) {
        case '1':
          send('update')
          console.log('当前是register阶段，身份认证成功')
          break
        case '-1':
          console.log('出错了，当前是regiseter阶段出现了value=-1')
      }
      break
    case 'Home':
    // 现在是home阶段，当前已经拿到了设备列表数据  resData.value
    // console.log('数据获取成功了，这就是数据：' + typeof (e.data))
      console.log('数据获取成功了，这就是数据：')
      console.log(resData)
  }
}

// 发送数据的方法
function send (data) {
  if (websock.readyState === 1) {
    console.log('当前链接成功,将要发送的值为：' + data)
    // 开始给服务器发送数据
    websock.send(data)
    console.log('发送完毕')
  } else if (websock.readyState === 2) {
    console.log('正在进行关闭握手，即将关闭')
  } else if (websock.readyState === 0) {
    console.log('正在链接中。。。')
  } else if (websock.readyState === 3) {
    console.log('链接已经关闭，正在重新打开')
    websock.onopen()
  }
}

if (websock.readyState === 3) {
  console.log('链接已经关闭，正在重新打开')
  websock.onopen()
}

setInterval(() => {
  console.log('当前通信状态：' + websock.readyState)
}, 1000)

websock.onerror = function (e) {
  console.log('error！！！')
}
