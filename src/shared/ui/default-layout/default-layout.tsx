import "./default-layout.scss";
import {Header} from "./header/header.tsx";
import {FC, ReactNode} from "react";
import {Footer} from "./footer/footer.tsx";

type PropsType = {
    children: ReactNode,
    SearchSlot: FC
}

export function DefaultLayout({children, SearchSlot}: PropsType) {
    return <div className="default-layout">
        <Header SearchSlot={SearchSlot}/>

        {children}
        <Footer/>
    </div>
}