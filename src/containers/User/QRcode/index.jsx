import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import userInfoAPI from '@/api/userInfo'


class QRcode extends Component{
	constructor(props){
		super(props)
		this.state={
			url:''
		}
	}
	async componentDidMount(){
		let data = await userInfoAPI.getQrcode()
		this.setState({
			url:data
		})
	}
	render(){
		return(
			<div className="q-r-code">
				<Header title='推广码'/>
				<div className='img-box'>
				  <img src={require('./asset/pic.jpg')} className="images" alt='bg'/>
				  <img src={this.state.url ? this.state.url : require('./asset/20180115154413.png')} className='erweima' alt='QRcode'/>
				</div>
			</div>
		)
	}
}

export default QRcode