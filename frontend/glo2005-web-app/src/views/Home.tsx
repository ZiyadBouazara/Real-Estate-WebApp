import LogementCheckbox from "../components/immeuble/ImmeubleTypeCheckbox"
import Search from "../components/inputs/Search"
import ImmeubleList from "../components/immeuble/ImmeubleList"
import { useState, useEffect } from "react"
import { getImmeubles } from "../utils/api/immeuble"

const Home: React.FC = () => {

  const [immeubles, setImmeubles] = useState([])

  useEffect(() => {
    console.log(getImmeubles());
  })

    return (
      <div className="flex flex-col mx-3 md:px-10 lg:px-20">
        <section className="mt-2 md:mt-4">
          <Search id="immeuble-search" placeholder="Rechercher un immeuble..." />
          <LogementCheckbox />
        </section>
        <section className="mt-2 md:mt-4">
          <ImmeubleList />
        </section>
      </div>
    )
  }
  
  export default Home