import ImmeubleListItem from "./ImmeubleListItem"

const ImmeubleList: React.FC = () => {
    const immeubles = [
        {
            id: 1,
            name: "Lamiaceae",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            type: "Condo/Loft",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 400,
            nbLogements: 13,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 2,
            name: "Parmeliaceae",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            type: "Appartements",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 500,
            nbLogements: 7,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 3,
            name: "Dryopteridaceae",
            address: "72736 Village Drive",
            sector: "Kebon",
            type: "Commercial",
            photo: "https://soumissionsentreprises.ca/wp-content/uploads/2021/11/assurance-pour-immeubles-commerciaux-quebec.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 600,
            nbLogements: 3,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 4,
            name: "Lamiaceae",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            type: "Condo/Loft",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 400,
            nbLogements: 13,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 5,
            name: "Parmeliaceae",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            type: "Appartements",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 500,
            nbLogements: 7,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 6,
            name: "Dryopteridaceae",
            address: "72736 Village Drive",
            sector: "Kebon",
            type: "Commercial",
            photo: "https://soumissionsentreprises.ca/wp-content/uploads/2021/11/assurance-pour-immeubles-commerciaux-quebec.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 600,
            nbLogements: 3,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 7,
            name: "Lamiaceae",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            type: "Condo/Loft",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 400,
            nbLogements: 13,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 8,
            name: "Parmeliaceae",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            type: "Appartements",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 500,
            nbLogements: 7,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 9,
            name: "Dryopteridaceae",
            address: "72736 Village Drive",
            sector: "Kebon",
            type: "Commercial",
            photo: "https://soumissionsentreprises.ca/wp-content/uploads/2021/11/assurance-pour-immeubles-commerciaux-quebec.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 600,
            nbLogements: 3,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 10,
            name: "Lamiaceae",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            type: "Condo/Loft",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 400,
            nbLogements: 13,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 11,
            name: "Parmeliaceae",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            type: "Appartements",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 500,
            nbLogements: 7,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 12,
            name: "Dryopteridaceae",
            address: "72736 Village Drive",
            sector: "Kebon",
            type: "Commercial",
            photo: "https://soumissionsentreprises.ca/wp-content/uploads/2021/11/assurance-pour-immeubles-commerciaux-quebec.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 600,
            nbLogements: 3,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 13,
            name: "Lamiaceae",
            address: "42 Sunnyside Park",
            sector: "Watuagung",
            type: "Condo/Loft",
            photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 400,
            nbLogements: 13,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 14,
            name: "Parmeliaceae",
            address: "14 Towne Parkway",
            sector: "Heidelberg",
            type: "Appartements",
            photo: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 500,
            nbLogements: 7,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        {
            id: 15,
            name: "Dryopteridaceae",
            address: "72736 Village Drive",
            sector: "Kebon",
            type: "Commercial",
            photo: "https://soumissionsentreprises.ca/wp-content/uploads/2021/11/assurance-pour-immeubles-commerciaux-quebec.jpeg",
            description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
            minPrice: 600,
            nbLogements: 3,
            hasHotWater: true,
            hasElectricity: true,
            hasWifi: true,
            hasParking: true,
            hasPool: true,
            hasGym: true,
            hasBackyard: true,
            hasElevator: true,
            hasEVCharger: true,
            hasAC: true,
            hasTerrace: true
        },
        
    ]

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {immeubles.map((immeuble) => (
            <ImmeubleListItem key={immeuble.id} id={immeuble.id} name={immeuble.name} photo={immeuble.photo} adress={immeuble.address} sector={immeuble.sector} minPrice={immeuble.minPrice} type={immeuble.type} />
        ))}
    </ul>
  )
}

export default ImmeubleList