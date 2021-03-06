(function (window) {

  const MyPlugin = {}
  // 模块对象必须要有一个install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = binding.value + '-----my-directive'
    })

    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的$myMethod()')
    }
  }

  window.MyPlugin = MyPlugin
})(window)