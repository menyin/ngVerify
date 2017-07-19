(function(){
// 使用ngVerify前，先依赖注入
var m = angular.module('APP',['ngVerify','datePicker','ui.select']);
    m.config(function ($ngVerifySetsProvider) {
        /*$ngVerifySetsProviders是本人扩展用于提示信息的配置的供应商*/
        //配置自定义错误提示信息
        $ngVerifySetsProvider.errMsg = {
            required:'配置提示：这字段是必须滴',
            number:'配置提示：不是数字',
            email:'配置提示：不是邮箱',
            phone:'配置提示：不是手机号',
            tel:'配置提示：不是固定电话',
            url:'配置提示：不是链接',
            char:'配置提示：不是字母+下划线',
            date:'配置提示：不是时间',
            dates:'配置提示：不是时间',
            pattern:'配置提示：{0}格式不对哦',
            recheck:'配置提示：两次输入内容不相同哦',
            min:'配置提示：{0}个字符以上',
            max:'配置提示：{0}个字符以下',
            least:'配置提示：要选择{0}个选项以上哦',//针对CheckBox要选择几个选项的提示，要配置least验证
            select:'配置提示：下拉框要选择哦',//针对select标签
        };
    });
// 测试用控制器,调用公共方法的地方注入ngVerify
m.controller('testCtrl',function ($scope, $timeout, ngVerify) {
    /* angular.element(document).ready(function() {
    	console.log('页面加载完成，自动检测表单的验证，返回未验证通过的元素：');
    	ngVerify.check('loginForm',function (errEls) {
            console.info(errEls);
    	},false);

        // 检测单个元素是否通过验证
        var res = ngVerify.checkElement('#date');
        console.log(res);
    }); */
    /***
     * 对指定元素强制设置错误，优先级高于并且不会影响其它验证错误
     * 此服务功能可用于扩展其它自定义验证。
     */
    $scope.testSetErro = function () {
        ngVerify.setError('#phone', '强制设置一个错误');
    };
    /***
     * 对指定元素强制取消强制设置的错误
     */
    $scope.testDelErro = function () {
        ngVerify.setError('#phone');
    };

    /***
     * 返回表单内所有验证不通过的元素，包括强制设置错误的元素
     */
    $scope.retrunErrElement = function () {
        //返回所有未验证通过的表单元素，不标记
        ngVerify.check('loginForm',function (errEls) {
            console.log(123456);
            console.log(errEls);
            console.log(123456);
        },false);
    };

    /***
     *  检测一个元素是否验证通过，根据2参决定是否高亮边框
     */
    $scope.checkElement = function (isDraw) {
      var result=  ngVerify.checkElement('#phone',isDraw);
        alert(result);
    };

    $scope.colors = [
      {name:'black'},
      {name:'white'},
      {name:'red'},
      {name:'blue'},
      {name:'yellow'}
    ];

    // ui-select
    $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'}
    ];

    $scope.submit = function () {
        console.log('form submit');
    }


})




})()
