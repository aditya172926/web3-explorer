import { useNavigate } from "react-router"
import { format_slice } from "../../helper"
import { Icon } from "../../icons";

interface BalanceProps {
    balance?: string,
    blockNumber?: string
}

export default function SidebarBalanceCard({ balance, blockNumber }: BalanceProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/portfolio");
    }

    return (
        <div className="text-sm flex-1 rounded-xl p-4 border border-slate-700 cursor-pointer hover:bg-stone-400 transition"
            onClick={handleClick}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon name="trendUp" />
                        <h3>Portfolio</h3>
                    </div>
                    <div className="space-y-2" title={balance}>
                        <div className="flex item-baseline gap-2">
                            <span className="text-sm font-bold text-white truncate flex-1 min-w-0">
                                {format_slice(balance!)}
                            </span>
                            <span className="text-sm text-slate-600">ETH</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <span className="text-sm text-slate-600">
                                Block
                            </span>
                            <span className="text-sm">
                                {blockNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}