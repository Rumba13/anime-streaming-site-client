import {ErrorMessage} from "./error-message.tsx";
import {Meta, type StoryObj} from "@storybook/react-vite";
import {BaseError} from "../../model";

const meta = {
    component: ErrorMessage,
    tags: ["autodocs"],
    title: "Error Message",
    excludeStories: /.*Data$/,
} satisfies Meta<typeof ErrorMessage>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        error: new BaseError("Error message", "PatternError")
    }
}