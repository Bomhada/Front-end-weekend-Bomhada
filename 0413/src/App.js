
import React from 'react'
import {Header} from './component/header/header'
import {Footer} from './component/footer/footer'
import {Content} from './component/content/content'


export class App extends React.Component{

    render(){
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}