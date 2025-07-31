import {Meta, type StoryObj} from "@storybook/react-vite";
import {AnimeDateFilter} from "./anime-date-filter";
import {AnimeDateFilterStore} from "../model/anime-date-filter.store";

const meta = {
    component: AnimeDateFilter,
    title: "AnimeDateFilter",
    args: {}
} satisfies Meta<typeof AnimeDateFilter>

export default meta

type Story = StoryObj<typeof meta>;

const animeDateFilterStore = new AnimeDateFilterStore();

export const Default: Story = {
    args: {
        animeDateFilterStore
    }
}
