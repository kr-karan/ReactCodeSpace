import React from 'react'
import { UserContext, ChannelContext } from '../../../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <ChannelContext.Consumer>
                            {
                                channel =>{
                                    return  <div>This is from the {user}, from the {channel} </div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

 export default ComponentC
