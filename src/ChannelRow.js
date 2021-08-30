import React from 'react'
import './ChannelRow.css';
import  Avatar  from '@material-ui/core/Avatar'
function ChannelRow({ image, channel, subs, noOfVideos, descriptions, verified }) {
  return (
      <div className="channelRow">
          <Avatar
              className="channelrow_logo"
              alt={channel}
              src={image}
          />
          <div className="channelrow_text">
              <h4>{channel}</h4>
              <p>{subs} </p>
              <p>{noOfVideos} videos</p>
              <p>{ descriptions}</p>
          </div>
      
    </div>
  )
}

export default ChannelRow
