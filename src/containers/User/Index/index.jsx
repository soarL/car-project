import React,{ Component } from 'react'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import './index.less'

class Index extends Component{
	render(){
		return(
			<div>
				<Header title='我的账户'/>
				<Link to='/details'>客户详情</Link>
			</div>
		)
	}
}

export default Index