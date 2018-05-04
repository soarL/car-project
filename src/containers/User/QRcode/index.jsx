import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'

class QRcode extends Component{
	render(){
		return(
			<div className="q-r-code">
				<Header title='推广码'/>
				<div className='img-box'>
				  <img src={require('./asset/pic.jpg')} className="images" alt='bg'/>
				  <img src={require('./asset/20180115154413.png')} className='erweima' alt='QRcode'/>
				</div>
			</div>
		)
	}
}

export default QRcode