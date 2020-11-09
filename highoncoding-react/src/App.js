import { Component } from 'react';
import Articles from './Articles';
import Menu from './Menu';
import Reviews from './Reviews';
import './App.css'


class App extends Component {

  render() {

    return (
    <div className = "body">
      <Menu />
      <Reviews />
      <Articles title="Hello Watchkit" content="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." comments="12" likes="124" />
      <Articles title="Introduction to Swift" content="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started." comments="15" likes="45" />
    </div>
    )
  }
}

export default App;
