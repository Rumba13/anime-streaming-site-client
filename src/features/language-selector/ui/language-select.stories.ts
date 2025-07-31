import {Meta, type StoryObj} from "@storybook/react-vite";
import {LanguageSelector} from "./language-selector";

const meta = {
    component: LanguageSelector,
    title: "Language select",
    args: {}
} satisfies Meta<typeof LanguageSelector>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    }
}
