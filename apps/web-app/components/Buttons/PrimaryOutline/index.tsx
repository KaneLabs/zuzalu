function PrimaryOutlineButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="flex cursor-pointer items-center gap-2 bg-fora-gray900 border border-fora-primary text-fora-gray900 font-[600] py-[8px] px-[16px] rounded-[8px]"
            {...props}
        />
    )
}

export default PrimaryOutlineButton