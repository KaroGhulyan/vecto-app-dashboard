import { useDispatch, useSelector } from "react-redux";
import {
  setAdmins,
  addAdmin,
  setShowSider,
  editAdmin,
} from "../store/appSlice";
import { AxiosResponse } from "axios";
import httpRequest from "../httpRequest";
import { RequestTypes } from "../httpRequest/interfaces";
import { useEffect, useState } from "react";
import { AdminType } from "../interfaces";
import { USERS_API } from "../config/apiConfig";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

interface UseAdminsStoreInterface {
  admins: AdminType[];
  createAdmin: (data: AdminType) => void;
  updateAdmin: (data: AdminType) => void;
  getAdminById: () => void;
  toggleSider: () => void;
  showSider: boolean;
  admin: AdminType | null;
  error: string;
}

export const UseAdminsStore = (): UseAdminsStoreInterface => {
  const admins = useSelector((state: RootState) => state.admins);
  const showSider = useSelector((state: RootState) => state.showSider);
  const [admin, setAdmin] = useState<AdminType | null>(null);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const getAdmins = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await httpRequest({
        url: USERS_API.DEFAULT,
        method: RequestTypes.Get,
      });

      dispatch(setAdmins(response.data));
    } catch (error) {
      setError("something was wrong");
    }
  };

  const createAdmin = async (data: AdminType): Promise<void> => {
    try {
      const response: AxiosResponse = await httpRequest({
        url: USERS_API.DEFAULT,
        method: RequestTypes.Post,
        data: data,
      });
      const user = response.data.user as AdminType;
      dispatch(addAdmin(user));
      dispatch(setShowSider());
    } catch (error) {
      setError("something was wrong");
    }
  };

  const updateAdmin = async (data: AdminType): Promise<void> => {
    try {
      const response: AxiosResponse = await httpRequest({
        url: `${USERS_API.DEFAULT}/${id}`,
        method: RequestTypes.Put,
        data: data,
      });
      const user = response.data.user as AdminType;
      editAdmin(user);
      navigate("/dashboard");
    } catch (error) {
      setError("something was wrong");
    }
  };

  const getAdminById = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await httpRequest({
        url: `${USERS_API.DEFAULT}/${id}`,
        method: RequestTypes.Get,
      });
      const user = response.data as AdminType;
      setAdmin(user);
    } catch (error) {
      setError("something was wrong");
    }
  };

  const toggleSider = () => {
    dispatch(setShowSider());
  };

  useEffect(() => {
    if (id) {
      getAdminById();
    }
  }, [id]);
  useEffect(() => {
    getAdmins();
  }, []);

  return {
    admins,
    showSider,
    admin,
    error,
    createAdmin,
    updateAdmin,
    toggleSider,
    getAdminById,
  };
};
