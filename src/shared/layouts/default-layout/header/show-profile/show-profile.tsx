import "./show-profile.scss";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";

export function ShowProfile() {

    return <GradientBorderedButton className="show-profile-button">
        <UserIcon/>
    </GradientBorderedButton>
}