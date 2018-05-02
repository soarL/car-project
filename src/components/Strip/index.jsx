import React, { Component } from 'react'
import { Flex } from 'antd-mobile' 
import CustomIcon from '@/components/CustomIcon'
import './index.less'

class Strip extends Component {
	render(){
		return(
			<div className="strip">
				<Flex align='center'>
					<CustomIcon type={require('./asset/down.svg')} className='icon'/>
					<span>{this.props.children}</span>			
				</Flex>
			</div>
		)
	}
} 

export default Strip