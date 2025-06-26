import { makeAutoObservable } from 'mobx';
import {ThemeType} from "./theme-type.ts";
import {injectable} from "inversify";

@injectable()
export class ThemeStore {
    public currentTheme: ThemeType = 'dark';

    constructor() {
        makeAutoObservable(this);
    }

    public setTheme = (theme: ThemeType) => {
        this.currentTheme = theme;
    };
}

