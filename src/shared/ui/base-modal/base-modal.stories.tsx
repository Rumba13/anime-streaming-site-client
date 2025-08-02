import {Meta, type StoryObj} from "@storybook/react-vite";
import {BaseModalStore} from "../../model";
import {BaseModal} from "./base-modal.tsx";

const meta = {
    component: BaseModal,
    title: "BaseModal",
    args: {
    }
} satisfies Meta<typeof BaseModal>

export default meta

type Story = StoryObj<typeof meta>;

const baseModalStore = new BaseModalStore();

export const Default: Story = {
    args: {
        modalStore: baseModalStore,
        children: <>
            Base Modal
        </>
    },
    decorators: [
        (Story) => <div>
            <button onClick={baseModalStore.open} style={{color:"white"}}>open modal</button>
            <Story/>
        </div>
    ]
}
