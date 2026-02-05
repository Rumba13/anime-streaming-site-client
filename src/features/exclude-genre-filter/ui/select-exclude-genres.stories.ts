import {Meta, type StoryObj} from "@storybook/react-vite";
import {SelectExcludeGenres} from "./exclude-genre-filter.tsx";

const meta = {
    component: SelectExcludeGenres,
    title: "SelectExcludeGenres",
    args: {}
} satisfies Meta<typeof SelectExcludeGenres>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        genreIdsToHide: []
    }
}
