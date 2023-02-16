import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'
import TextContainer from './TextContainer'
import queryString from 'query-string'
const ENDPOINT = 'http://localhost:5000'
let socket

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
      const { name, room } = queryString.parse(location.search)
      socket = io(ENDPOINT)
  
      setRoom(room)
      setName(name)
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          alert(error)
        }
      })
    }, [ENDPOINT, location.search])
    useEffect(() => {
      //로딩 될때만 실행
      socket.on('message', (message) => {
        setMessage((message) => [...messages, message])
      })
      socket.on('roomData', ({ users }) => {
        setUsers(users)
      })
    }, [])
    const sendMessage = (event) => {
      event.preventDefault()
      if (message) {
        socket.emit('sendMessage', message, () => setMessage(''))
      }
    }
    return (
      <div className='outerContainer'>
        <div className='container'>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <TextContainer users={users} />
      </div>
    )
  }