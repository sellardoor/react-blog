import React from 'react'
import { Icon } from 'antd'

export default function FooterCom() {
    return (
        <div style={{background:'#fff', color: '#bbb', marginTop: 30, textAlign: 'center', fontSize: 12}}>
            <p style={{paddingTop: 20}}>基于React-Umi, NodeJs-Egg, Mongodb</p>
            <p>Powered By SellarDoor</p>
            <p style={{paddingBottom: 20}}><Icon type="github" theme="filled" />https://github.com/sellardoor</p>
        </div>
    )
}
