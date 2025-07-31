import {Meta, type StoryObj} from "@storybook/react-vite";
import {SelectGenres} from "./select-genres.tsx";

const meta = {
    component: SelectGenres,
    title: "SelectGenres",
    args: {}
} satisfies Meta<typeof SelectGenres>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        genreIdsToHide: []
    }
}
