import React, { Component } from 'react';
import { Route , Switch , HashRouter } from 'react-router-dom'
import './App.less'

// 只负责显示的组件


// 容器组件 业务组件就是有状态的组件//按需加载
import Home from '@/containers/Home'

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
        <HashRouter>
           <div className='container'>
               
                    <Switch>
                     <Route path="/" exact component={Home} />
                    </Switch>
            </div>
       </HashRouter>
    )
  }
}


export default App