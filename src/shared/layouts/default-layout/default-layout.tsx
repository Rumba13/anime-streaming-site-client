import "./default-layout.scss";
import {Header} from "./header/header.tsx";
import {FC, ReactNode} from "react";
import {Footer} from "./footer/footer.tsx";
import clsx from "clsx/lite";

type PropsType = {
    children: ReactNode,
    SearchSlot: FC,
    className?: string,
    LanguageSelectorSlot: FC
}

export function DefaultLayout({children, SearchSlot, className, LanguageSelectorSlot}: PropsType) {
    return <div className={clsx("default-layout", className)}>
        <Header SearchSlot={SearchSlot}/>
        {children}
        <Footer LanguageSelectorSlot={LanguageSelectorSlot}/>
    </div>
}