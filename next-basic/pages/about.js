import React from 'react'
import about from '@/styles/about.module.scss'
import { useRouter } from 'next/router'

const About = () => {
    const router = useRouter();
    console.log(router)
    function move(){
        router.push({
            pathname:'/board',
            query:{id:5}
        })
    }
  return (
    <div className={about.list}>
        about
        <button onClick={move}></button>
        </div>
  )
}

export default About