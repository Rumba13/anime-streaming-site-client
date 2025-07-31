import {Meta, type StoryObj} from "@storybook/react-vite";
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
