import { useRouter } from 'next/router'
import React from 'react'

const Test = () => {
    const router = useRouter()
    console.log(router)
  return (
    <div>파라미터값을 받아 처리하는 문서 . . . </div>
  )
}

export default Test