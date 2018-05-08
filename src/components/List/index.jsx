/**
 * 还款记录，申请记录等类似，UI组件，扩展封装
 * versions 1.0 
 * author lzt
 */

import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Flex ,Button} from 'antd-mobile'
import './index.less'

const Items = Flex.Item

class BoxLeft extends Component{
	render(){
		return(
			<Items style={{flex:7}}>
				<Flex>
					{
						this.props.status ? <div className='status'>申请状态：{this.props.status}</div> : ''
					}
					{
						this.props.repayMoney ? <div className='status'>还款金额：{this.props.repayMoney}</div> : ''
					}
					{
						this.props.detailButtonText ? <Button type='primary' size='small'>{this.props.detailButtonText}</Button> : ''
					}
				</Flex>
			</Items>
		)
	}
}

class Center extends Component{
	render(){
		return(
			<Items style={{flex:this.props.borrow || this.props.recentRepay || this.props.overdue || this.props.phone ?  13 : 9}}>
				<div className='user-name'>
					{this.props.name}
				</div>
				{
					this.props.timer ? <div className='font-c'>申请时间：{this.props.timer}</div> : ''
				}
				{
					this.props.borrow ? <div className='font-c'>借款总额：{this.props.borrow}&nbsp;&nbsp;借款期数：{this.props.periods}</div> : ''
				}
				{
					this.props.repayTimer ? <div className='font-c'>还款时间：{this.props.repayTimer}</div> : ''
				}
				{
					this.props.recentRepay ? <div className='font-3'>还款金额：{this.props.recentRepay.money}</div> : ''
				}
				{
					this.props.recentRepay ? <div className='font-c'>期数：{this.props.recentRepay.periods}&nbsp;&nbsp;还款时间：{this.props.recentRepay.timer}</div> : ''
				}
				{
					this.props.overdue ? <div className='font-c'>期数：{this.props.overdue.periods}&nbsp;&nbsp;逾期：{this.props.overdue.laterDay}</div> : ''
				}
				{
					this.props.phone ? <div className='font-c'>联系电话：{this.props.phone}</div> : ''
				}
			</Items>
		)
	}
}

class List extends Component{
	render(){
		return(
			<div className='user-detail-list' onClick={()=>{
				if(this.props.href){
					this.props.history.push(this.props.href)
				}else{
					return false
				}
			}}>
				<Flex align='center'>
					<Items style={{flex:5}}>
						<Flex justify='center'>
							<div className='face-img-box'>
								<img src={this.props.faceUrl} alt="face-img"/>
							</div>
						</Flex>
					</Items>
					<Center name={this.props.name} timer={ this.props.timer } borrow={this.props.borrow} periods={this.props.periods} repayTimer={this.props.repayTimer} recentRepay = { this.props.recentRepay} overdue={this.props.overdue} phone={this.props.phone}/>
					<BoxLeft status={this.props.status} repayMoney={this.props.repayMoney} detailButtonText={this.props.detailButtonText}/>
				</Flex>
			</div>
		)
	}
}

export default withRouter(List)