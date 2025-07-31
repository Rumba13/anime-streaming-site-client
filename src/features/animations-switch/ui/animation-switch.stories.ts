import {Meta, type StoryObj} from "@storybook/react-vite";
import {AnimeStatusSelect} from "./anime-status-select";
import {AnimeStatusFilterStore} from "../model/anime-status-filter.store";
import {AnimationsSwitch} from "./animations-switch.tsx";
import {AnimationsSwitchStore} from "../model/animations-switch.store.ts";

const meta = {
    component: AnimationsSwitch,
    title: "AnimationsSwitch",
    args: {}
} satisfies Meta<typeof AnimationsSwitch>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    }
}
