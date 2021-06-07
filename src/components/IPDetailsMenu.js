import React from 'react'

function IPDetailsMenu() {
    return (
        <div className = 'ipDetailsMenu'>
            <div className = 'ipDetailsMenu__tab'>
                <p className = 'ipDetailsMenu__tab__p p--small'>IP ADDRESS</p>
                <h4>192.203.049</h4>
            </div>
            <div className = 'ipDetailsMenu__tab'>
            <p className = 'ipDetailsMenu__tab__p p--small'>LOCATION</p>
                <h4>Brooklyn, NY 100001</h4>
            </div>
            <div className = 'ipDetailsMenu__tab'>
            <p className = 'ipDetailsMenu__tab__p p--small'>TIMEZONE</p>
                <h4>UTC -5:00</h4>
            </div>
            <div className = 'ipDetailsMenu__tab'>
            <p className = 'ipDetailsMenu__tab__p p--small'>ISP</p>
                <h4>SpaceX Starlink</h4>
            </div>
        </div>
    )
}

export default IPDetailsMenu
