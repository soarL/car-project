import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import List from '@/components/List'
import Strip from '@/components/Strip'

import userInfoAPI from '@/api/userInfo'

class PaymentHistory extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			user_src:"",
			name:"soar",
		}
	}
	async componentDidMount() {
		let strWorkNum = this.props.match.params.strWorkNum
		let data = await userInfoAPI.oddReplay({strWorkNum:strWorkNum})
		this.setState({
			user_src:data.user_src,
			name:data.name,
			data:data.list
		})
	}
	render(){
		return(
			<div className='amount-details'>
				<Header title='还款详情'/>
				<Strip>共有{this.state.data.length }条记录</Strip>
				{
					this.state.data.map((value,key)=><List faceUrl={this.state.user_src ? this.state.user_src : 'https://asset.91hc.com/src/images/index/new-center-1.png'} name={this.state.name } repayTimer={value.list.repayTimer} repayMoney={value.list.realityMoney} key={key} />)
				}
			</div>
		)
	}
}

export default PaymentHistory




