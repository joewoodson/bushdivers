import React from 'react'
import NoContent from '../../Elements/NoContent'
import { Link, usePage } from '@inertiajs/inertia-react'
import Tooltip from '../../Elements/Tooltip'
import AircraftCondition from '../Fleet/AircraftCondition'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../Elements/Card'
import Badge from '../../Elements/Badge'

const EmptyData = (props) => {
  return (
    <>
      <FontAwesomeIcon icon={faTicket} />
      <div>There are no available {props.content}</div>
    </>
  )
}

const Aircraft = (props) => {
  const { auth } = usePage().props
  return (
    <div className="mt-2 mr-2">
      <Card title="Select Aircraft">
      {props.aircraft.length === 0
        ? <NoContent content={<EmptyData content="Aircraft" />} />
        : (
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
              <tr>
                <th>Registration</th>
                <th>Type</th>
                <th>Current Fuel</th>
                <th>Condition</th>
              </tr>
              </thead>
              <tbody className="cursor-pointer">
              {props.aircraft.map((ac) => (
                <tr key={ac.id} onClick={() => props.handleAircraftSelect(ac)} className={props.selectedAircraft.registration === ac.registration ? 'text-primary cursor-pointer' : 'cursor-pointer'}>
                  <td>
                    <Tooltip content={`Hub: ${ac.hub_id}`} direction="right">
                      {ac.hub_id && <Link href={`/aircraft/${ac.id}`}>{ac.registration}</Link>}
                      {ac.rental_airport_id && <span>{ac.registration}</span>}
                      {ac.owner_id === auth.user.id ? <span className="mx-2"><Badge color="primary" label="Private" /></span> : <></>}
                      {ac.rental_airport_id && <span className="mx-2"><Badge color="primary" label="Rental" /></span> }
                      {ac.maintenance_status && <span className="mx-2"><i className="material-icons md-18">engineering</i></span>}
                    </Tooltip>
                  </td>
                  <td>{ac.fleet.manufacturer} {ac.fleet.name} ({ac.fleet.type})</td>
                  <td>{ac.fuel_onboard.toLocaleString(navigator.language)}</td>
                  <td><AircraftCondition aircraftCondition={ac.total_condition} /></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          )
      }
      </Card>
    </div>
  )
}

export default Aircraft
