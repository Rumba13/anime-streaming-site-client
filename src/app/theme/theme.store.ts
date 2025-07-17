import { makeAutoObservable } from 'mobx';
import {ThemeType} from "./theme-type.ts";
import {injectable} from "inversify";
import {themes} from "./themes/themes.ts";

@injectable()
export class ThemeStore {

    constructor() {
        makeAutoObservable(this);
    }
    public currentThemeType: ThemeType = 'dark';

    public setCurrentThemeType = (theme: ThemeType) => {
        this.currentThemeType = theme;
    };

    public getCurrentTheme = () => themes[this.currentThemeType];
}

