import {Meta, type StoryObj} from "@storybook/react-vite";
import {AnimeCardSwitcher} from "./anime-card-switcher.tsx";
import {AnimeCardSwitchStore} from "../model/anime-card-switch.store.ts";

const meta = {
    component: AnimeCardSwitcher,
    title: "AnimeCardSwitcher",
    args: {}
} satisfies Meta<typeof AnimeCardSwitcher>

export default meta

type Story = StoryObj<typeof meta>;

const animeCardSwitchStore = new AnimeCardSwitchStore()

export const Default: Story = {
    args: {
        animeCardSwitchStore
    }
}
