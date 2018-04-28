import React,{ Component } from 'react'
import { Carousel, WingBlank} from 'antd-mobile';
import './index.less'

const data =[
	{href:'/',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524821107449&di=eef6059af9ab9c8fbd8be8803fafb7ab&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120727%2F201995-120HG1030762.jpg'},
	{href:'/',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524821107449&di=b471437d6437e258072cdc8b82184fa1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012cb757939a8e0000018c1b7482be.jpg%401280w_1l_2o_100sh.png'},
	{href:'/',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524821107449&di=2858077e76edd4ed2b3e7154e5d7073e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f09e577b85450000012e7e182cf0.jpg%401280w_1l_2o_100sh.jpg'},
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
		                style={{ width: '100%', verticalAlign: 'top' }}
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