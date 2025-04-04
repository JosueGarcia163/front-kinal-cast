import React, {useEffect} from 'react'
import { Navbar } from '../../components/navs/Navbar'
import { Content } from '../../components/dashboard/Content'
import { useUserDetails, useChannels } from '../../shared/hooks'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Sidebar } from '../../components/navs/Sidebar'

import './dashboardPage.css'

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching, followedChannels } = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() =>{
    getChannels(isLogged)
  },[getChannels,isLogged])

  if(isFetching){
    return <LoadingSpinner/>
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background'/>
      <Navbar/>
      <Sidebar channels={followedChannels}/>
      <Content channels={allChannels}/>
    </div>
  )
}
