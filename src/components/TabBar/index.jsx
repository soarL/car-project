import React,{ Component } from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class Main extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      selectedTab: 'redTab',
	      hidden: false,
	    };
	  }
	componentWillMount() {
		let pathname = this.props.location.pathname
		if( pathname==='/' ||  (pathname.split('/')[1]) ==='home'){
			this.setState({
				selectedTab: 'redTab'
			})
		}else{
			this.setState({
				selectedTab: 'greenTab'
			})
		}
	}
	render() {
		return (
			<div style={{height:this.props.height}}>
		        <TabBar
					unselectedTintColor="#949494"
					tintColor="#33A3F4"
					barTintColor="white"
					hidden={this.state.hidden}
		        >
					<TabBar.Item
						icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
						selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
						title="车险月付"
						key="车险月付"
						selected={this.state.selectedTab === 'redTab'}
						onPress={() => {
						  this.setState({
						    selectedTab: 'redTab',
						  });
						  this.props.history.push('/')
						}}
					>
						
					</TabBar.Item>
					<TabBar.Item
						icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
						selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
						title="我的"
						key="我的"
						selected={this.state.selectedTab === 'greenTab'}
						onPress={() => {
						  this.setState({
						    selectedTab: 'greenTab',
						  });
						  this.props.history.push('/user')
						}}
					>
						
					</TabBar.Item>
		        </TabBar>
		    </div>
		)
	}
}

export default withRouter(Main)