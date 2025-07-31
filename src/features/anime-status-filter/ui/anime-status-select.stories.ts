import {Meta, type StoryObj} from "@storybook/react-vite";
import {AnimeStatusSelect} from "./anime-status-select";
import {AnimeStatusFilterStore} from "../model/anime-status-filter.store";

const meta = {
    component: AnimeStatusSelect,
    title: "AnimeStatusSelect",
    args: {}
} satisfies Meta<typeof AnimeStatusSelect>

export default meta

type Story = StoryObj<typeof meta>;

const animeStatusFilterStore = new AnimeStatusFilterStore();

export const Default: Story = {
    args: {
        animeStatusFilterStore
    }
}
