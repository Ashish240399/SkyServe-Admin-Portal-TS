export type AdminPortalProps = {
    name:string
}

import React from 'react'

const AdminPortal = ({ name }: AdminPortalProps) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default AdminPortal
