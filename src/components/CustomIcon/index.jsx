import React,{ Component } from 'react'

class CustomIcon extends Component {
	render(){
		return(
			<object data={this.props.type} type="image/svg+xml" className={`am-icon am-icon-${this.props.size ? this.props.size : 'md' } ${this.props.className ? this.props.className : ''}`}>{/*ss*/}
			</object>
		)
	}
}

export default CustomIcon