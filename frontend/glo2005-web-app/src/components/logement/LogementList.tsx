import React from 'react'
import LogementListItem from './LogementListItem'
import { Logement } from '../../utils/Logement'



interface Props {
    logements: Logement[]
}

const LogementList: React.FC<Props> = ({ logements }) => {

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {logements.map((logement) => (
            <LogementListItem key={logement.id_logement} id={logement.id_logement} immeubleId={logement.contient} photos={logement.photos} available={logement.available} number={logement.numero} price={logement.price} rooms={logement.pieces} size={logement.taille} />
            ))}
    </ul>
  )
}

export default LogementList