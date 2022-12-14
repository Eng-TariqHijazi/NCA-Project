import React from 'react'
import { StatsItem, TitleScreen } from '../components'
import './Stats.css'
const Stats = () => {
  return (
    <div className="Stats">
        <div className="container">
            <div className="stats-content">
                <TitleScreen title={"الاحصائيات"}
                    text={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"}
                />
                <div className="stats-list">
                    <StatsItem title={"+350"} text={"هذا نص افتراضي سيتم استبداله"} />
                    <StatsItem title={"+150"} text={"هذا نص افتراضي سيتم استبداله"} />
                    <StatsItem title={"+50"} text={"هذا نص افتراضي سيتم استبداله"} />
                    <StatsItem title={"+600"} text={"هذا نص افتراضي سيتم استبداله"} />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Stats