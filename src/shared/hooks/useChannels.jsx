import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { getFollowedChannels, getChannels as getChannelsRequest } from "../../services";

export const useChannels = () => {
    const [channels, setChannels] = useState([]);
    const [followedChannels, setFollowedChannels] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const getChannels = useCallback(async (isLogged = false) => {
        setIsFetching(true)
        const channelsData = await getChannelsRequest();
    
        if (channelsData.error) {
            toast.error(channelsData.e?.response?.data || "Error al obtener los canales")
            setIsFetching(false)
            return
        }
    
        setChannels(channelsData.data.channels);

        if(isLogged){
            const followedChannelsData = await getFollowedChannels()

            if(followedChannelsData.error){
                toast.error(
                    followedChannelsData.error?.response?.data || "Error al obtener los followed channels"
                )
            }else{
                setFollowedChannels(
                    channelsData.data.channels.filter((channel) =>
                        followedChannelsData.data.followedChannels.includes(channel.id))
                )
            }
        }
        setIsFetching(false)
    }, []);
    
    useEffect(() => {
        getChannels();
    }, [getChannels]);

    return {
        getChannels,
        isFetching,
        allChannels: channels,
        followedChannels
    };
};

