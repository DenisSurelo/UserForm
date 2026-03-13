import { Component } from 'react'
import './App.css'


class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      phoneNumber: ''
    }
  }
  componentDidMount() {
    console.log('Component did mount')
    const saveData = localStorage.getItem('userFormData')
    if (saveData){
      this.setState(JSON.parse(saveData))
      console.log('Data loaded from localStorage')
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update')
    if (prevState !== this.state) {
      console.log('State has changed, saving to localStorage')
      console.log('Current state:', this.state)
      console.log('Previous state:', prevState)
      localStorage.setItem('userFormData', JSON.stringify(this.state))
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount')
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    const { username, email, phoneNumber } = this.state
    return (
      <div>
        <h1>User Form</h1>
        <form>
          <label>UserName 
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </label>
          <br />
          <label>Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
          <br />
          <label>Phone Number
            <input type="tel" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
          </label>
        </form>
        <div className='data'>
          <h2>name:{username}</h2>
          <p>email:{email}</p>
          <p>phoneNumber:{phoneNumber}</p>
        </div>
      </div>
    )
  }
}


export default UserForm
