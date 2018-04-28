import React,{ Component } from 'react'
import './index.less'

class Loading extends Component{

	render(){
		if(this.props.error){
			return(
				<div>
					渲染出错,请刷新该页面!
				</div>
			)
		}else{
			return (
				<div className="loading">
					loading
				</div>
			)
		}
	}
}

export default Loading