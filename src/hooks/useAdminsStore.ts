import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store/store'
import {setAdmins} from '../store/adminsSlice'
import {AxiosResponse} from 'axios';
import httpRequest from '../httpRequest';
import {RequestTypes} from '../httpRequest/interfaces';
import {useEffect} from 'react';


interface UseAdminsStore {
    admins: AdminTypeType[]
}

type AdminTypeType = {
    id: number,
    name: string,
    username: string,
    email: string,
}

export const UseAdminsStore = (): UseAdminsStore => {
    const admins = useSelector((state: RootState) => state.admins)
    const dispatch = useDispatch();

    const getAdmins = async (): Promise<void> => {
        try {
            const response: AxiosResponse = await httpRequest({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: RequestTypes.Get,
            });

            dispatch(setAdmins(response.data))
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getAdmins()
    }, []);

    return {
        admins
    }
}