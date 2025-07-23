import {Logo} from "./logo.tsx";
import {Meta, StoryObj} from "@storybook/react-vite";

const meta = {
    component: Logo,
    title: "Logo Component",
    tags: ["autodocs"],
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};