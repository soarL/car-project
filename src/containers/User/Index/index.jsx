import React,{ Component } from 'react'
import Header from '@/components/Header'
import { Link ,withRouter} from 'react-router-dom'
import './index.less'
import { WhiteSpace,Icon,Flex ,Button} from 'antd-mobile'
import CustomIcon from '@/components/CustomIcon'


class Item extends Component{
	render(){
		return(
			<div className='item'>
				<Link to={this.props.href}>
					<Flex align='center'>
						<Flex.Item style={{flex:0.6}}>
							<CustomIcon type={this.props.type} className='icon'/>
						</Flex.Item>
						<Flex.Item style={{flex:11}}>
							{this.props.children}
						</Flex.Item>
						<Flex.Item style={{flex:1}}>
							<Icon type='right' className='right-icon'></Icon>
						</Flex.Item>
					</Flex>
				</Link>
			</div>
		)
	}
}

class UnLogin extends Component{
	render(){
		return(
			<Flex align='center'>
				<Button type='primary' size='small' onClick={()=>{this.props.history.push('/login')}}>登录</Button>&nbsp;&nbsp;&nbsp;
				<Button type='primary' size='small' onClick={()=>{this.props.history.push('/register')}}>注册</Button>
			</Flex>
		)
	}
}

UnLogin = withRouter(UnLogin)

class Index extends Component{
	render(){
		return(
			<div className='user-box'>
				<Header title='个人信息'/>
				<Flex className='face-img-box'>
					<Flex.Item>
						<Flex justify='center'>
							<div className='img-box'>
								<img src={require('./asset/idcar.svg')} alt="touxiang"/>
							</div>				
						</Flex>
					</Flex.Item>
					<Flex.Item className='user-name'>
						{
							this.props.isLogin ? <div><p>梦醒时分</p><p>手机：18959333600</p></div> : <UnLogin/>
						}
					</Flex.Item>
				</Flex>

				<Item href='/details' type={require('./asset/shielding.svg')}> 申请记录</Item>
				<Item href='/repayhistory' type={require('./asset/document.svg')}> 还款记录</Item>
				<WhiteSpace />
				<WhiteSpace />
				<Item href='/recentrepay' type={require('./asset/document_fill.svg')}> 近期还款客户</Item>
				<Item href='/overdue' type={require('./asset/financial_fill.svg')}> 逾期客户列表</Item>
				<Item href='/promoter' type={require('./asset/accessory.svg')}> 推广员列表</Item>
				<Item href='/qrcode' type={require('./asset/qrcode.svg')}> 我的推广码</Item>
				<WhiteSpace />
				<WhiteSpace />
			</div>
		)
	}
}

export default Index