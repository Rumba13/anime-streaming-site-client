import "./loading.scss";
import LoadingGif from "@src/assets/images/loading.gif"


export function Loading() {
    return <div className="loading">
        <img src={LoadingGif} alt=""/>
    </div>
}