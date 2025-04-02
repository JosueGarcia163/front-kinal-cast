import { useState } from "react";
import toast from "react-hot-toast"
import { getChannels as getChannelsRequest } from "../../services";


export const useChannels = () =>{
    const [channels, setChannels] = useState([]);

    const getChannels = async (isLogged = false) =>{
        const channelsData = await getChannelsRequest()
        if(channelsData.error){
            return toast.error(
                channelsData.e?.response?.data || "Error al obtener los canales de la db."
            )
        }
        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            })
        }
    }
        return {
            getChannels,
            isFetching: channels === null,
            allChannels: channels

        }
}

