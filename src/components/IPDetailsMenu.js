import React from 'react'

function IPDetailsMenu({ipAddress, location, timezone, isp}) {
    return (
        <div className = 'ipDetailsMenu'>
            <div className = 'ipDetailsMenu__tab'>
                <p className = 'ipDetailsMenu__tab__p p--small'>IP ADDRESS</p>
                <h4>{ipAddress}</h4>
            </div>
            <div className = 'ipDetailsMenu__tab'>
            <p className = 'ipDetailsMenu__tab__p p--small'>LOCATION</p>
                <h4>{`${location.region}, ${location.country} ${location.postalCode}`}</h4>
            </div>
            <div className = 'ipDetailsMenu__tab'>
            <p className = 'ipDetailsMenu__tab__p p--small'>TIMEZONE</p>
                <h4>{timezone}</h4>
            </div>
            <div className = 'ipDetailsMenu__tab'>
            <p className = 'ipDetailsMenu__tab__p p--small'>ISP</p>
                <h4>{isp}</h4>
            </div>
        </div>
    )
}

export default IPDetailsMenu
