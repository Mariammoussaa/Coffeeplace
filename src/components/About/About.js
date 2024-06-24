import React from 'react'
import style from './About.module.css'
import pic from '../../images/video-bg.jpg'
import playicon from '../../images/play-icon.png'
import sign from '../../images/signature.png'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
        <div className={style.parent}>
            <div className={style.container}>
              <div className={style.bgimg1}>
                  <img src={pic} alt=''/>
                    <div className={style.overlay}>
                      <Link  className={style.playicon} >
                                <img src={playicon} alt=''/>
                      </Link>
                    </div>
              </div> 

              <div className={style.text}>
                <h5 className={style.font}>LIVE COFFEE MAKING PROCESS.</h5>
                <h1> We Telecast our Coffee Making Live</h1>
                <p> We are here to listen from you deliver exellence </p>
                <p className={style.p}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim. </p>
                <img className={style.sign} src={sign} alt=''/>
              </div>
            </div>
        </div>
    </div>
  )
}
