interface Props {
    text: string,
    backgroundColor: string
}

export default function Badge({ text, backgroundColor }: Props) {
    return (
        <div className={`inline-flex w-fit items-center bg-[${backgroundColor}] text-sm rounded-full`}>
            <p className="text-white px-2">{text}</p>
        </div>
    )
}