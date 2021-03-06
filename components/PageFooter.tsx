import * as React from 'react'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram'
import styles from './styles.module.css'
import * as config from 'lib/config'
import {translate} from 'lib/translation'

export const PageFooterImpl: React.FC = () => {
    return (<div style={{ borderTop: "1px solid #555555", display: "flex", width: "100%", flexDirection: "column" }}>
        <div style={{display: "flex", alignItems:"center", flexWrap: "wrap", fontSize:"20px", paddingTop: "1em", fontWeight: "bold"}}>
            <div>{translate("tk_follow_us")} </div>&nbsp;&nbsp;
            <a  style={{display:"flex", alignItems:"center",  color: "var(--notion-blue)", borderBottom: "2px solid var(--notion-blue)"}}
                href={config.instagram}
                title={`Instagram @duniakripto_ind`}
                target='_blank'
                rel='noopener noreferrer'
            >
                
                <div style={{ marginRight: "0.5em"}}>Instagram</div>
                <FaInstagram size={25} />
                
            </a>
            &nbsp; {translate("tk_and")}  &nbsp;
            {config.telegramChannel && (
                <a
                    href={config.telegramChannel}
                    title={`Telegram Channel @duniakriptoind`}
                    target='_blank'
                    style={{display:"flex", alignItems:"center",  color: "var(--notion-blue)", borderBottom: "2px solid var(--notion-blue)"}}
                    rel='noopener noreferrer'
                >  <div style={{marginRight: "0.5em"}}>Telegram</div>
                    <FaTelegram size={25} />
                </a>

            )}
        </div>
        <h3 className="notion-h notion-h3 notion-h-indent-0 notion-block-d97691d4994f4dd2bb74b5f74e7089c7" data-id="d97691d4994f4dd2bb74b5f74e7089c7">
           {translate("tk_support_us")}
        </h3>
        <div className="notion-text notion-block-682ca6cf24e64f308a731854885fa42d">
            {translate("tk_support_text")}
        </div>
        <blockquote className="notion-quote notion-block-6b9d3ee99e1d4136aef17759a3b44c75">
            <b>BTC</b>:&nbsp;
            <code className="notion-inline-code">
                <span className="notion-blue">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</span>
            </code>
        </blockquote>
        <blockquote className="notion-quote notion-block-8cecca45b3b64638b9aae59fd331eb7a">
            <b>ETC</b>:&nbsp;
            <code className="notion-inline-code">
                <span className="notion-blue">0x4edd6b520d92203c89a2b9cb2de00fccf18733cb</span>
            </code>
        </blockquote>

    </div>

    )
}


export const PageFooter = React.memo(PageFooterImpl)
