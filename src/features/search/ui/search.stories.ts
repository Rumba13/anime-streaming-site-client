import {Meta, type StoryObj} from "@storybook/react-vite";
import {Search} from "./search.tsx";

const meta = {
    component: Search,
    title: "Search",
    args: {}
} satisfies Meta<typeof Search>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    }
}

export const Small: Story = {
    args: {
        styles: {
            width: 120
        }
    }
}