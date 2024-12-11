import React from 'react'

import { ClipLoader } from 'react-spinners'

const override={
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({loading}) => {
    return (
      <ClipLoader
          color='#36ace7'
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
      />
    )
  }
  

export default Spinner