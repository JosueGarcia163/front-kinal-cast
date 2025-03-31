import React, {useEffect} from 'react'
import { Navbar } from '../../components/navs/Navbar'
import { Content } from '../../components/dashboard/Content'
import { useUserDetails, useChannels } from '../../shared/hooks'
import './dashboardPage.css'

export const DashboardPage = () => {
  const { getChannels, allChannels } = useChannels();
  const { isLogged } = useUserDetails()

  useEffect(()=> {
    getChannels(isLogged)
  }, [])
  return (
    <div className= 'dashboard-container'>
      <div className='dashboard-background'/>
      <Navbar/>
      <Content channels={allChannels}/>
      </div>
  )
}
