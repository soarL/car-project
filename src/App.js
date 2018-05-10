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

const AsyncWorkDetails = Loadable({
  loader: () => import('@/containers/User/WorkDetails/index'),
  loading: loading
})

const AsyncAmount = Loadable({
  loader: () => import('@/containers/User/Amount/index'),
  loading: loading
})

const AsyncPaymentHistory = Loadable({
  loader: () => import('@/containers/User/PaymentHistory/index'),
  loading: loading
})

const AsyncRepayHistory = Loadable({
  loader: () => import('@/containers/User/RepayHistory/index'),
  loading: loading
})

const AsyncRecentRepay = Loadable({
  loader: () => import('@/containers/User/RecentRepay/index'),
  loading: loading
})

const AsyncOverdue = Loadable({
  loader: () => import('@/containers/User/Overdue/index'),
  loading: loading
})

const AsyncCollectionDetail = Loadable({
  loader: () => import('@/containers/User/CollectionDetail/index'),
  loading: loading
})

const AsyncAddCollection = Loadable({
  loader: () => import('@/containers/User/AddCollection/index'),
  loading: loading
})

const AsyncPromoter = Loadable({
  loader: () => import('@/containers/User/Promoter/index'),
  loading: loading
})

const AsyncItemRecord = Loadable({
  loader: () => import('@/containers/User/ItemRecord/index'),
  loading: loading
})

const AsyncQRcode = Loadable({
  loader: () => import('@/containers/User/QRcode/index'),
  loading: loading
})

const AsyncLogin = Loadable({
  loader: () => import('@/containers/Login'),
  loading: loading
})

const AsyncRegister = Loadable({
  loader: () => import('@/containers/Register'),
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
    AsyncWorkDetails.preload()
    AsyncAmount.preload()
    AsyncPaymentHistory.preload()
    AsyncRepayHistory.preload()
    AsyncRecentRepay.preload()
    AsyncOverdue.preload()
    AsyncCollectionDetail.preload()
    AsyncAddCollection.preload()
    AsyncPromoter.preload()
    AsyncItemRecord.preload()
    AsyncQRcode.preload()
    AsyncLogin.preload()
    AsyncRegister.preload()
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
                <Route path="/applydetails/:strWorkNum" component={ AsyncApplyDetails } />
                <Route path="/workdetails/:strWorkNum" component={ AsyncWorkDetails } />
                <Route path="/amount/:strWorkNum" component={ AsyncAmount } />
                <Route path="/paymenthistory/:strWorkNum" component={ AsyncPaymentHistory } />
                <Route path="/repayhistory" component={ AsyncRepayHistory } />
                <Route path="/recentrepay" component={ AsyncRecentRepay } />
                <Route path="/overdue" component={ AsyncOverdue } />
                <Route path="/collectiondetail/:oddNumber/:intPeriod" component={ AsyncCollectionDetail } />
                <Route path="/addcollection/:oddNumber/:intPeriod/" component={ AsyncAddCollection } />
                <Route path="/promoter" component={ AsyncPromoter } />
                <Route path="/itemrecord/:strUserId" component={ AsyncItemRecord } />
                <Route path="/qrcode" component={ AsyncQRcode } />
                <Route path="/login" component={ AsyncLogin } />
            		<Route path="/register" component={ AsyncRegister } />
            	</Switch>
            </div>
            <TabBar height={50}/>
          </div>
       </HashRouter>
    )
  }
}

export default App