import React,{Component} from 'react'
import "../styles/pages/Error404.css"
import { Link } from 'react-router-dom'

class Error404 extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="divError404">
          <Link to="/" className="LinkRouter"><h1>Kira&Max</h1></Link>
      </div>
    )
  }
}

export default Error404
