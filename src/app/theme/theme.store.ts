import { makeAutoObservable } from 'mobx';
import {injectable} from "inversify";
import {ThemeType} from "./theme-type";
import {themes} from "./themes/themes";

@injectable()
class ThemeStore {

    constructor() {
        makeAutoObservable(this);
    }
    public currentThemeType: ThemeType = 'dark';

    public setCurrentThemeType = (theme: ThemeType) => {
        this.currentThemeType = theme;
    };

    public getCurrentTheme = () => themes[this.currentThemeType];
}
export { ThemeStore }

