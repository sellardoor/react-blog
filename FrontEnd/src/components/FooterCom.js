import React from 'react'
import { Icon } from 'antd'

export default function FooterCom() {
    return (
        <div style={{background:'#fff', color: '#bbb', marginTop: 30, textAlign: 'center', fontSize: 12}}>
            <p style={{paddingTop: 20}}>基于React-Umi, NodeJs-Egg, Mongodb</p>
            <p>Powered By SellarDoor</p>
            <p><Icon type="github" theme="filled" />https://github.com/sellardoor</p>
            <p style={{paddingBottom: 20}}>ICP主体备案号: <a href="http://www.beian.miit.gov.cn" target='_blank' >蜀ICP备20016349号</a></p>
        </div>
    )
}
