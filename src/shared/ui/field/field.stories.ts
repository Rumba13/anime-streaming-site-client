import {Meta, StoryObj} from "@storybook/react-vite";
import {Field} from "./field.tsx";

const meta = {
    component: Field,
    title: "Field",
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<Meta>;

export const Default: Story = {
    args: {
        type: "text",
        placeholder: "Text field"
    }
}
