interface ChainCardProps {
    chainId?: number,
    gasPrice?: string,
}

export default function ChainCard({ chainId, gasPrice }: ChainCardProps) {
    return (
        <div className="text-sm flex-1 rounded-xl p-4 border border-slate-700 cursor-pointer hover:bg-stone-400 transition">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>

                        <h3>Chain</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <span className="text-sm text-slate-600">
                                Chain Id
                            </span>
                            <span className="text-sm">
                                {chainId}
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <span className="text-sm text-slate-600">
                                Gas Price
                            </span>
                            <span className="text-sm">
                                {gasPrice}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}