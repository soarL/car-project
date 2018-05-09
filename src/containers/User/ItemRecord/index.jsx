import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import userInfoAPI from '@/api/userInfo'
import Strip from '@/components/Strip'
import List from '@/components/List'



// class ItemGroup extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<Title>{this.props.title}</Title>
// 				{
// 					this.props.data.map((value,key)=><Item title={value.title} value={value.value} key={key}/>)
// 				}
// 			</div>
// 		)
// 	}
// }

// class Item extends Component{
// 	render(){
// 		return(
// 			<div className='item'>
// 				{this.props.title}：<span>{this.props.value}</span>
// 			</div>
// 		)
// 	}
// }

class ItemRecord extends Component{
	  constructor(props) {
	    super(props);
	    this.state={
	    	data:[]
	    }
	  }
	async componentDidMount() {
	    let strUserId = this.props.match.params.strUserId
	    let data = await userInfoAPI.workUserOddApply({strUserId})
	    this.setState({
	    	data
	    })
	}

	render(){
		return(
			<div>
				<Header title='项目记录'/>

				<Strip>共有{this.state.data.length}条记录</Strip>
				
				{
					this.state.data.map((value,key)=><List faceUrl={value.faceSrc} name={value.user} recheckTimer={value.timer} borrowMoney={value.money} key={key} href={"/workdetails/" + value.strWorkNum } />)
				}
				
			</div>
		)
	}
}

export default ItemRecord