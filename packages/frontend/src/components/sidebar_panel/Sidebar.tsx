import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink } from "react-router";
import { useOnChainClient, useSelectedAddress } from "../../state";
import AddressInput from "../AddressInput";
import { useEffect, useState } from 'react';

export default function Sidebar() {
    const providerClient = useOnChainClient((state) => state.providerClient);
    const address = useSelectedAddress((state) => state.address);
    const updateSelectedAddress = useSelectedAddress((state) => state.updateSelectedAddress);
    const [blockNumber, setBlockNumber] = useState<string>();
    const sidebarNavBtns = [
        {
            name: "Transactions",
            navLink: "/"
        },
        {
            name: "Portfolio",
            navLink: "/portfolio"
        }
    ];

    async function getData() {
        try {
            const blockNumber = await providerClient.getBlockNumber();
            setBlockNumber(blockNumber.toString());
            const isContract = await providerClient.getCode({address: address});
        } catch (error) {
            console.log("Error in fetching block number ", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => await getData();
        fetchData();
    }, [address]);

    return (
        <div className="grid h-full grid-rows-[auto_2fr_1fr_auto] gap-4">
            {/* Top */}
            <div>
                <AddressInput onSubmit={updateSelectedAddress} />
            </div>

            <div className="text-sm">
                <p>{address}</p>
                <p>{blockNumber}</p>
            </div>

            <div className="flex flex-col">
                {sidebarNavBtns.map((btn, index) => (
                    <button
                        key={index}
                        className="text-slate-500 hover:text-white"
                    >
                        <NavLink key={index} to={btn.navLink} end className={({isActive}) => isActive && "text-white"}>
                            {btn.name}
                        </NavLink>
                    </button>
                ))}
            </div>

            <div className="flex justify-center text-slate-400">
                <ConnectButton />
            </div>
        </div>
    )
}

