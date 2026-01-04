import { useNavigate } from "react-router"
import { format_slice } from "../../helper"
import { Icon } from "../../icons";

interface AccountProps {
    address: string,
    isContract?: boolean
}

export default function AccountCard({ address, isContract }: AccountProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    return (
        <div className="text-sm flex-1 rounded-xl p-4 border border-slate-700 cursor-pointer hover:bg-stone-400 transition"
            onClick={handleClick}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon name="user" />
                        <h3>Account</h3>
                    </div>
                    <div>
                        <span className="text-white bg-slate-700 px-2 py-1 rounded">
                            {format_slice(address)}
                        </span>
                    </div>
                    <div className='bg-green-500 text-green-300 px-2 py-1 mt-2 rounded-full'>
                        {isContract ? <p>Contract</p> : <p>EOA (Wallet)</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}