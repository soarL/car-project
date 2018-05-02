import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Flex } from 'antd-mobile'
import './index.less'

const Items = Flex.Item

class List extends Component{
	render(){
		return(
			<div className='user-detail-list' onClick={()=>{this.props.history.push((this.props.href ? this.props.href : "/applydetails"))}}>
				<Flex align='center'>
					<Items style={{flex:5}}>
						<Flex justify='center'>
							<div className='face-img-box'>
								<img src={this.props.faceUrl} alt="face-img"/>
							</div>
						</Flex>
					</Items>
					<Items style={{flex:10}}>
						<div className='user-name'>
							{this.props.name}
						</div>
						<div className='timer'>
							申请时间：{this.props.timer}
						</div>
					</Items>
					<Items style={{flex:6}}>
						<Flex>
							<div className='status'>
								申请状态：{this.props.status}
							</div>
						</Flex>
					</Items>
				</Flex>
			</div>
		)
	}
}

export default withRouter(List)