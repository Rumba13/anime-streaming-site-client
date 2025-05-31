import "./company-info.scss";
import {ListItem} from "../../../../ui/list-item/list-item.tsx";

export function CompanyInfo() {
    return <div className="about-us">
        <span className="about-us__title">叙 Epic Anime</span>
        <ul className="about-us__list">
            <ListItem className="about-us__item" link="1">About Us</ListItem>
            <ListItem className="about-us__item" link="2">Contact</ListItem>
            <ListItem className="about-us__item" link="3">FAQ</ListItem>
            <ListItem className="about-us__item" link="4">Terms & Conditions</ListItem>
            <ListItem className="about-us__item" link="5">Privacy Policy</ListItem>
            <ListItem className="about-us__item" link="6">Help</ListItem>
            <ListItem className="about-us__item" link="7">Support</ListItem>
        </ul>
    </div>
}