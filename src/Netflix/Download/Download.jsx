import React from 'react'
import './Download.css'
import mob from '../../Netflix/Assests/smartphone.png'

const Download = () => {
  return (
    <section id ='download'>
        <div className="downloadContent">Download your shows<br /> to watch offline</div>
       <div className="downloadPara1">
       Save your favourites easily and<br /> always have something to watch..
      </div> 
      <img src={mob} alt=" netflix mob" className="mobbg" />
    </section>
  )
}

export default Download