import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import {
	Divider
} from 'antd'

class Header extends Component{
	render() {
		return (
			<div className="header">
				  <ul className="nav">
				    <li><Link to="/">首页</Link></li>
				  </ul> 
				  <Divider dashed/>
			</div>
		)
	}
}

export default Header