import {Meta, type StoryObj} from "@storybook/react-vite";
import {AnimeTypeFilter} from "./anime-type-filter.tsx";
import {AnimeTypeFilterStore} from "../../model/anime-type-filter.store.ts";

const meta = {
    component: AnimeTypeFilter,
    title: "AnimeTypeFilter",
    args: {}
} satisfies Meta<typeof AnimeTypeFilter>

export default meta

type Story = StoryObj<typeof meta>;

const animeTypeFilterStore = new AnimeTypeFilterStore()

export const Default: Story = {
    args: {
        animeTypeFilterStore
    }
}
