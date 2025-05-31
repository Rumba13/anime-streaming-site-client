import "./default-layout.scss";
import {Header} from "./header/header.tsx";
import {FC, ReactNode} from "react";
import {Footer} from "./footer/footer.tsx";
import clsx from "clsx/lite";

type PropsType = {
    children: ReactNode,
    SearchSlot: FC,
    className?: string,
}

export function DefaultLayout({children, SearchSlot, className}: PropsType) {
    return <div className={clsx("default-layout", className)}>
        <Header SearchSlot={SearchSlot}/>
        {children}
        <Footer/>
    </div>
}