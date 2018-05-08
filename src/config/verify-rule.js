/*
*antd from表单
*getFieldDecorator rules规则
*整个app通用型定义
*必须为数组形式
*enum           枚举类型	                                    string	                                       -
*len	        字段长度	                                    number	                                       -
*max	        最大长度	                                    number	                                       -
*message        校验文案	                                    string	                                       -
*min	        最小长度	                                    number	                                       -
*pattern        正则表达式校验	                                RegExp	                                       -
*required       是否必选	                                    boolean	                                       false
*transform      校验前转换字段值	                            function(value) => transformedValue:any	       -
*type	        内建校验类型，可选项	                        string	                                       'string'
*validator      自定义校验（注意，callback 必须被调用）	        function(rule, value, callback)	               -
*whitespace     必选时，空格是否会被视为错误	                boolean	                                       false
*author 'lzt'
*/


const user = [
		{min:3,message:'用户名长度必须大于3位'},
		{max:9,message:'用户名长度不能超过9位'},
		{required:true, message:'该项为必选项'}]

const phone = [
		{min:4,message:'请输入11位手机号码'},
		{max:11,message:'请输入11位手机号码'},
		{required:true, message:'请填写手机号码'}]

const strFriendPhone = [
		{min:4,message:'请输入11位手机号码'},
		{max:11,message:'请输入11位手机号码'},
		{required:false}]

const password=[
		{max:16,message:'密码长度不能超过16位'},
		{required:true, message:'请填写登录密码'}]

const passwordAgain=(message,pwd)=>{
	return (rule,value,callback)=>{
	if (value && value !== pwd) {
	      callback(message);
	    } else {
	      callback();
	    }
	}
}

const email =[
		{type: 'email', message: 'The input is not valid E-mail!'},
		{required: false, message: 'Please input your E-mail!'}]

const smsCode = [
		{max:6,message:'验证码为6位数字'},
		{required:true,message:'请填写验证码'}]

const isDisabled = (getFieldsError)=>{
	// 接收getFieldsError()对象，返回boolean
	return Object.keys(getFieldsError).some(filed=>getFieldsError[filed])
}

const isChecked =(message)=>{
	return (rule,value,callback)=>{
		if(value){
			callback()
		}else{
			callback(message)
		}
	}
}

export{
	user,
	phone,
	email,
	password,
	isDisabled,
	isChecked,
	strFriendPhone,
	passwordAgain,
	smsCode
} 