import {Meta, StoryObj} from "@storybook/react-vite";
import {ConfirmModal} from "./confirm-modal.tsx";
import {ConfirmModalStore} from "../../model/confirm-modal.store.ts";
import {useInjection} from "inversify-react";
import {ConfirmModalConfig} from "../../types/confirm-modal-config.ts";
import React, {useState} from "react";
import i18n from "i18next";

const meta = {
    component: ConfirmModal,
    title: "ConfirmModal",
    decorators: [
        (Story, {args}) => {
            const [answer, setAnswer] = useState("null");
            const confirmModalStore = useInjection(ConfirmModalStore)
            const config = args as ConfirmModalConfig

            const onClick = (event: React.MouseEvent) => {
                void confirmModalStore.askForConfirm(config, event)
                    .then(() => setAnswer("Confirm"))
                    .catch(() => setAnswer("Cancel"))
            }

            return <div style={{color: 'white'}}>
                <div>answer:{answer}</div>
                <button onClick={onClick}>open modal</button>
                <Story/>
            </div>
        }
    ]
} satisfies Meta<typeof ConfirmModal>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Confirm sign out ",
        description: "Are you sure that you want to sign out?",
        confirmTitle: i18n.t("sign_out", {ns: "auth"}),
    },
}

export const LongContent: Story = {
    args: {
        title: "Confirm sign out",
        description: "Are you sure that you want to sign out? lorem ipsum dolor sit amen. You cannot cancel this",
        confirmTitle: i18n.t("sign_out", {ns: "auth"}),
    },
}

export const LongTitle: Story = {
    args: {
        title: "Confirm sign out Very long Confirm sign out title to make sure it's visible",
        description: "Are you sure that you want to sign out?",
        confirmTitle: i18n.t("sign_out", {ns: "auth"}),
    },
}

export const LongButtonTitles: Story = {
    args: {
        title: "Confirm sign out  ",
        description: "Are you sure that you want to sign out?",
        confirmTitle: "Sign out, please proceed with caution",
        cancelTitle: "Cancel and return to normal state"
    },
}