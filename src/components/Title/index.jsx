import React,{ Component } from 'react'
import './index.less'
import { Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

class Title extends Component{
	render(){
		return(
			<div className='context-title' onClick={()=>{
				if(this.props.href){
					this.props.history.push(this.props.href)
				}else{
					return false
				}
			}}>
				<span className='line'></span>
				<span className='content'>
					{this.props.children}
				</span>
				{
					this.props.href ? <Icon type='right' className='icon'/> : ''
				}
			</div>
		)
	}
}

export default withRouter(Title)