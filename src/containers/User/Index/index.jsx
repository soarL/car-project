import React,{ Component } from 'react'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import './index.less'
import { WhiteSpace,Icon,Flex } from 'antd-mobile'
import CustomIcon from '@/components/CustomIcon'
import userInfoAPI from '@/api/userInfo'

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

class Index extends Component{
	constructor(props){
		super(props)
		this.state={
			data:{
				avatarUrl:null,
				nickName:null,
				strPhone:"",
				strUserId:"",
				strUserType:"3",
			}
		}
	}
	async componentDidMount() {
		let data = await userInfoAPI.userInfo(this.props.history)
		this.setState({
			data
		})
	}
	render(){
		return(
			<div className='user-box'>
				<Header title='个人信息'/>
				<Flex className='face-img-box'>
					<Flex.Item>
						<Flex justify='center'>
							<div className='img-box'>
								<img src={this.state.data.avatarUrl ? this.state.data.avatarUrl:require('./asset/idcar.svg')} alt="touxiang"/>
							</div>				
						</Flex>
					</Flex.Item>
					<Flex.Item className='user-name'>
					<div><p>{this.state.data.nickName ? this.state.data.nickName : "nickName"}</p><p>手机：{this.state.data.strPhone}</p></div>
					</Flex.Item>
				</Flex>

				<Item href='/details' type={require('./asset/shielding.svg')}> 申请记录</Item>
				<Item href='/repayhistory' type={require('./asset/document.svg')}> 还款记录</Item>
				<WhiteSpace />
				<WhiteSpace />
					{
						this.state.data.strUserType ==='1' ? <Item href='/recentrepay' type={require('./asset/document_fill.svg')}> 近期还款客户</Item> : ""
					}
					{
						this.state.data.strUserType ==='1' ? <Item href='/overdue' type={require('./asset/financial_fill.svg')}> 逾期客户列表</Item> : ""
					}
					{
						this.state.data.strUserType ==='1' || this.state.data.strUserType ==='2' ? <Item href='/promoter' type={require('./asset/accessory.svg')}> 推广员列表</Item> : ""
					}
					{
						this.state.data.strUserType ==='1' || this.state.data.strUserType ==='2'? <Item href='/qrcode' type={require('./asset/qrcode.svg')}> 我的推广码</Item> : ""
					}
				<WhiteSpace />
				<WhiteSpace />
			</div>
		)
	}
}

export default Index