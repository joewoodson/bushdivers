import React from 'react'
import { convertMinuteDecimalToHoursAndMinutes } from '../../../Helpers/date.helpers'
import Card from '../../Elements/Card'

const LogbookSecondary = ({ pirep }) => {
  return (
    <div className="mt-2 mx-2">
      <Card>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center my-2 mx-4">
          <div className="text-sm">Fuel used</div>
          <div className="text-xl">{pirep.fuel_used.toLocaleString(navigator.language)} gal</div>
        </div>
        <div className="flex flex-col items-center my-2 mx-4">
          <div className="text-sm">Duration</div>
          <div className="text-xl">{convertMinuteDecimalToHoursAndMinutes(pirep.flight_time)}</div>
        </div>
        <div className="flex flex-col items-center my-2 mx-4">
          <div className="text-sm">Distance</div>
          <div className="text-xl">{pirep.distance.toLocaleString(navigator.language)}nm</div>
        </div>
        <div className="flex flex-col items-center my-2 mx-4">
          <div className="text-sm">Points</div>
          <div className="text-xl">{pirep.score?.toLocaleString(navigator.language) ?? '-'}</div>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default LogbookSecondary
