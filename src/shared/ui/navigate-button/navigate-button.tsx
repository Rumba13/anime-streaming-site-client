import "./navigate-button.scss";
import clsx from "clsx/lite";

type PropsType = {
    title?: string;
    href?: string;
    icon: React.ReactNode;
    className?: string;
}

export function NavigateButton({title, href, icon,className}: PropsType) {
    return <a className={clsx("navigate-button",className)} href={href}>
        <span className="navigate-button__title">
            {title}
        </span>
        {icon}
    </a>

}