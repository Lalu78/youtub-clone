import { TuneOutlined } from '@material-ui/icons';
import React from 'react'
import "./SearchPage.css";
import ChannelRow from "./ChannelRow"

function SearchPage() {
    return (
        <div className="searchPage1">
            <div className="searchpage_filter">
                <TuneOutlined />
                <h2>FILTER</h2>
                
            </div>
            <hr/>
            <div> 
           
            <ChannelRow
            
                image="https://i.pinimg.com/originals/35/2f/19/352f19d99ddf4efa9ae7930984d2e676.jpg"
                channel="Quick Programmer"
                verified
                subs="10M"
                noOfVideos={500}
                descriptions="you can find awesome videos"
                
                />
                </div>
           
      
        </div>
    );
}

export default SearchPage
