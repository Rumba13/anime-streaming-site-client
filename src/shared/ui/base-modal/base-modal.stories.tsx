import {Meta, type StoryObj} from "@storybook/react-vite";
import {BasePopupStore} from "../../model";
import {BaseModal} from "./base-modal.tsx";

const meta = {
    component: BaseModal,
    title: "BaseModal",
    args: {
    }
} satisfies Meta<typeof BaseModal>

export default meta

type Story = StoryObj<typeof meta>;

const basePopupStore = new BasePopupStore();

export const Default: Story = {
    args: {
        popupStore: basePopupStore,
        children: <>
            Base Modal
        </>
    },
    decorators: [
        (Story) => <div>
            <button onClick={basePopupStore.open} style={{color:"white"}}>open modal</button>
            <Story/>
        </div>
    ]
}
