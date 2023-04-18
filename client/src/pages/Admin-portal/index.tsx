export type AdminPortalProps = {
    name:string
}

import React, { useEffect, useState } from 'react'
import Monitor from '../../components/Portal-Body/MonitorPage'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useRouter } from 'next/router'
import ChatPage from '@/components/Portal-Body/ChatPage/ChatPage'
import ImageGalary from '@/components/Portal-Body/ImageGalary/ImageGalary'

const AdminPortal = ({ name }: AdminPortalProps) => {
  const router = useRouter();
  const [pageName, setPageName] = useState<string | string[] | null>(null);
  useEffect(() => {
    if (router.query.page != undefined) {
      setPageName(router.query.page)
    }
  }, [router])
  return (
    <div>
      <Sidebar />
      {pageName && pageName == "monitor" && <Monitor />}
      {pageName && pageName == "chat" && <ChatPage />}
      {pageName && pageName == "galary" && <ImageGalary />}
    </div>
  )
}

export default AdminPortal
