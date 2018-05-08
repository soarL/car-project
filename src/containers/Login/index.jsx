import React,{ Component } from 'react'
import Header from '@/components/Header'
import { InputItem,Button,Flex} from 'antd-mobile'
import { createForm } from 'rc-form'
import { Link } from 'react-router-dom'
import SmsCodeButton from '@/components/SmsCodeButton'
import userInfoAPI from '@/api/userInfo'
import './index.less'

class Login extends Component{
	constructor(props){
		super(props)
		this.state={
			phoneError:false,
			phone:''
		}
	}

	smsCode = async ()=>{
		return '0000'
	}

	phoneChange = (value)=>{
		if (value.replace(/\s/g, '').length < 11) {
	      this.setState({
	        phoneError: true,
	      })
	    } else {
	      this.setState({
	        phoneError: false,
	      })
	    }
	    this.setState({
	      phone:value,
	    })
	}

	submit = (e) => {

      this.props.form.validateFields((err, values) => {
      		values.strPhone = this.state.phone
            userInfoAPI.login(values,this.props.history)
      })

	}

	render(){
		const { getFieldProps } = this.props.form
		return(
			<div className='login-box'>
				<Header title='绑定平台账号'/>
				<Flex justify='center' align='center' style={{height:'100%'}}>
					<div className='input-box'>
						<InputItem
							{...getFieldProps('strPhone')}
							placeholder='请输入11位手机号码'
							type='text'
							onChange={this.phoneChange}
							error={this.state.phoneError}
							value={this.state.phone}
						></InputItem>
						<Flex align='center'>
							<InputItem
								{...getFieldProps('strCode')}
								placeholder='请输入手机验证码'
								type='text'
								className='sms-code'
							></InputItem>
							<SmsCodeButton btntype='primary' callback={this.smsCode} second='60' size='small' className='sms-code-button' />
						</Flex>
						<Button type='primary' onClick={this.submit} disabled={this.state.phoneError}>绑定</Button>
					</div>
				</Flex>
				<p className='to-register'>还没账号？<Link to='/register'>立即注册</Link></p>
			</div>
		)
	}
}

export default createForm()(Login)