import { useRouter } from 'next/router'
import React from 'react'

function Sidebar() {
    const router = useRouter();
    console.log(router)
  return (
      <div>
          <div onClick={() => router.push({
              pathname:"",
              query:"page=monitor"
          })}>Monitor</div>
          <div onClick={() => router.push({
              pathname:"",
              query:"page=chat"
          })}>Chat</div>
          <div onClick={() => router.push({
              pathname:"",
              query:"page=galary"
          })}>Galary</div>
    </div>
  )
}

export default React.memo(Sidebar)