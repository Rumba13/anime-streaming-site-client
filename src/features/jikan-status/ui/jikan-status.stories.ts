import {Meta, type StoryObj} from "@storybook/react-vite";
import {JikanStatus} from "./jikan-status";

const meta = {
    component: JikanStatus,
    title: "JikanStatus",
    args: {}
} satisfies Meta<typeof JikanStatus>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    }
}
