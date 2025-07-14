import { tv } from "tailwind-variants";

export const showcase = tv({
    slots: {
        base: 'flex flex-col gap-4',
        title: 'text-2xl font-bold',
        list: 'flex gap-4'
    }
})