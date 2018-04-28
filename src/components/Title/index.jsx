import React,{ Component } from 'react'
import './index.less'

class Title extends Component{
	render(){
		return(
			<div className='context-title'>
				<span className='line'></span>
				<span className='content'>
					{this.props.children}
				</span>
			</div>
		)
	}
}

export default Title