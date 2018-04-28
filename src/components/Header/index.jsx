import React,{ Component } from 'react'
import './index.less'
import { NavBar, Icon,Toast} from 'antd-mobile'
import {withRouter} from "react-router-dom"

class Header extends Component{
	share=()=>{
		console.log('分享')
	}
	goBack=()=>{
		if(this.props.location.pathname==='/' || this.props.location.pathname==='/user'){
			Toast.info('不能再退啦！',1)
		}else{
			this.props.history.goBack()
		}
	}
	render() {
		return (
			<div className="header">
			  <NavBar
			    mode="dark"
			    icon={<Icon type="left" />}
			    rightContent={[
			      <Icon key="1" type="ellipsis" style={{transform:"rotate(90deg)"}} onClick={ this.props.share && (typeof this.props.share === 'function') ? this.props.share: this.share}/>,
			    ]}
			    onLeftClick={this.goBack}
			  >{this.props.title ? this.props.title : "车险月付"}</NavBar>
			</div>
		)
	}
}

export default withRouter(Header)