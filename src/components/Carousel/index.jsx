import React,{ Component } from 'react'
import { Carousel, WingBlank} from 'antd-mobile';
import './index.less'

const data =[
	{href:'/',src:require("./asset/banner1.png")},
	{href:'/',src:require("./asset/banner2.png")},
]

class Carousels extends Component{
	constructor(props){
		super(props)
		this.state={
			data:data,
			imgHeight: 176,
		}
	}
	render(){
		return(
			<div className="carousels">
				<WingBlank>
		        <Carousel
		          autoplay={false}
		          infinite
		        >
		          {this.state.data.map((val,index) => (
		            <a
		              key={index}
		              href={val.href}
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		            >
		              <img
		                src={val.src}
		                alt={val.src}
		                style={{ width: '100%', verticalAlign: 'top',height:"100%" }}
		              />
		            </a>
		          ))}
		        </Carousel>
		      </WingBlank>		
			</div>
		)
	}
}
export default Carousels