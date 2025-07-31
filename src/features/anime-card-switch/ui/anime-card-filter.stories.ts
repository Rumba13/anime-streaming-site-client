import {Meta, type StoryObj} from "@storybook/react-vite";
import {AnimeDateFilter} from "./anime-date-filter";
import {AnimeDateFilterStore} from "../model/anime-date-filter.store";
import {AnimeCardSwitcher} from "./anime-card-switcher.tsx";

const meta = {
    component: AnimeCardSwitcher,
    title: "AnimeCardSwitcher",
    args: {}
} satisfies Meta<typeof AnimeCardSwitcher>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    }
}
