import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { PlusIcon } from "lucide-react";

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'radio',
            options: ['default', 'sm', 'lg', 'icon'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
        children: 'Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'default',
        children: 'Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'default',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'default',
        children: 'Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'default',
        children: 'Button',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        size: 'default',
        children: 'Button',
    },
};

export const Icon: Story = {
    args: {
        variant: 'default',
        size: 'icon',
        children: <PlusIcon className="h-4 w-4" />,
    },
};
