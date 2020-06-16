import React, {useEffect, useState} from 'react'
import {Fade} from 'react-reveal'

const Preloader = (): JSX.Element | null => {
  const [visible, setVisible] = useState(true)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)

    setTimeout(() => {
      setRemoved(true)
    }, 2000)
  }, [])

  return removed ? null : (
    <Fade when={visible} big>
      <div id="preloader">
        <div id="status">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1" />
            <div className="sk-cube sk-cube2" />
            <div className="sk-cube sk-cube3" />
            <div className="sk-cube sk-cube4" />
            <div className="sk-cube sk-cube5" />
            <div className="sk-cube sk-cube6" />
            <div className="sk-cube sk-cube7" />
            <div className="sk-cube sk-cube8" />
            <div className="sk-cube sk-cube9" />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Preloader
