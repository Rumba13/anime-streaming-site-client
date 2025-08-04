import {Meta, StoryObj} from "@storybook/react-vite";
import {SeparatorWithTitle} from "./separator-with-title.tsx";

const meta = {
    component: SeparatorWithTitle,
    title: "SeparatorWithTitle",
    args: {},
    decorators: [
        (Story) => {
            return <div style={{color: "white"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, beatae, laboriosam. Accusantium cum
                nostrum vel? Aut culpa cupiditate doloremque ea esse ipsum laborum modi, porro quis rerum? Ducimus eos,
                iusto.
                <Story/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, beatae, laboriosam. Accusantium cum
                nostrum vel? Aut culpa cupiditate doloremque ea esse ipsum laborum modi, porro quis rerum? Ducimus eos,
                iusto.
            </div>
        }
    ]
} satisfies Meta<typeof SeparatorWithTitle>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: "or"
    }
}