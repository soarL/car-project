import React, { Component } from 'react'
import { HashRouter,Switch,Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.less'

import TabBar from '@/components/TabBar' 
import loading from '@/components/Loading'
// 容器组件 业务组件就是有状态的组件//按需加载
const AsyncIndex = Loadable({
  loader: () => import('@/containers/Home/Index/index'),
  loading: loading
})

const AsyncInsurance = Loadable({
  loader: () => import('@/containers/Home/Insurance/index'),
  loading: loading
})

const AsyncUserIndex = Loadable({
  loader: () => import('@/containers/User/Index/index'),
  loading: loading
})

const AsyncDetails = Loadable({
  loader: () => import('@/containers/User/Details/index'),
  loading: loading
})

const AsyncCompany = Loadable({
  loader: () => import('@/containers/Home/Company/index'),
  loading: loading
})

const AsyncUpload = Loadable({
  loader: () => import('@/containers/Home/Upload/index'),
  loading: loading
})

const AsyncResult = Loadable({
  loader: () => import('@/containers/Home/Result/index'),
  loading: loading
})

const AsyncApplyDetails = Loadable({
  loader: () => import('@/containers/User/ApplyDetails/index'),
  loading: loading
})


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      clientHeight:document.documentElement.clientHeight || document.body.clientHeight
    }
  }
  componentDidMount() {
    // 做于预渲染
    AsyncIndex.preload()
    AsyncInsurance.preload()
    AsyncUserIndex.preload()
    AsyncDetails.preload()
    AsyncCompany.preload()
    AsyncUpload.preload()
    AsyncApplyDetails.preload()
  }
  render() {
    return (
        <HashRouter>
          <div className='container'>
            <div style={{height:this.state.clientHeight - 50,overflow:'auto'}}>
            	<Switch>
            		<Route path="/" exact component={ AsyncIndex } />
                <Route path="/home/insurance" exact component={ AsyncInsurance } />
                <Route path="/home/company" exact component={ AsyncCompany } />
                <Route path="/home/upload" exact component={ AsyncUpload } />
            		<Route path="/home/result" exact component={ AsyncResult } />
            		<Route path="/user" component={ AsyncUserIndex } />
                <Route path="/details" component={ AsyncDetails } />
            		<Route path="/applydetails" component={ AsyncApplyDetails } />
            	</Switch>
            </div>
            <TabBar height={50}/>
          </div>
       </HashRouter>
    )
  }
}

export default App