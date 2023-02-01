import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext,ChannelContext } from '../../../App'


function ComponentB() {
    const User = useContext(UserContext);
    const Channel = useContext(ChannelContext);
  return (
    <div>
      {User} - {Channel}
    </div>
  )
}

export default ComponentB
