import "./show-profile.scss";
import {GradientBorderedButton} from "../../gradient-bordered-button/gradient-bordered-button.tsx";
import UserIcon from "../../../../assets/images/user.svg?react"

export function ShowProfile() {

    return <GradientBorderedButton className="show-profile-button">
        <UserIcon/>
    </GradientBorderedButton>
}