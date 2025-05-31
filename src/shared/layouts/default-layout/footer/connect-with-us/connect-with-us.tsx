import "./connect-with-us.scss";
import {ConnectWithUsItem} from "./connect-with-us-item/connect-with-us-item.tsx";
import FacebookIcon from "../../../../../assets/images/facebook.svg?react"
import TwitterLogo from "../../../../../assets/images/twitter.svg?react"
import InstagramLogo from "../../../../../assets/images/instagram.svg?react"
import YoutubeLogo from "../../../../../assets/images/youtube.svg?react"

export function ConnectWithUs() {
    return <div className="connect-with-us">
        <span className="connect-with-us__title">Connect with us</span>
        <ul className="connect-with-us__list">
            <ConnectWithUsItem icon={<FacebookIcon/>} title="Facebook" link="1"/>
            <ConnectWithUsItem icon={<TwitterLogo/>} title="X App" link="1"/>
            <ConnectWithUsItem icon={<YoutubeLogo/>} title="Youtube" link="1"/>
            <ConnectWithUsItem icon={<InstagramLogo/>} title="Instagram" link="1"/>
        </ul>
    </div>
}