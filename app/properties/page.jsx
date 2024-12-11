import React from 'react'
import { FetchProperty } from '@/utils/request';
import PropertyCard from '@/components/PropertyCard'

const PropertiesPage = async () => {
  const properties = await FetchProperty();
  
  //sort by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ?(
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((properties) => (
              <PropertyCard key={properties.id} property={properties}/>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage