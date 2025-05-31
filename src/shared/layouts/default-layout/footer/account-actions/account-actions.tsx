import "./account-actions.scss"
import {ListItem} from "../../../../ui/list-item/list-item.tsx";

export function AccountActions() {
    return <div className="account-actions">
        <span className="account-actions__title">Account</span>
        <ul className="account-actions-list">
            <ListItem className="account-actions__item" link="1">Create Account</ListItem>
            <ListItem className="account-actions__item" link="1">Log In</ListItem>
        </ul>
    </div>
}