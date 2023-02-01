import React,{useContext} from 'react'
import { UserContext,ChannelContex } from '../../../App'

function ComponentD() {
    const User = useContext(UserContext);
    const Channel = useContext(ChannelContex);
  return (
    <div>
      {User} - {Channel}
    </div>
  )
}
export default ComponentD
