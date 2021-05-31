import React from "react"
import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux";
import styles from "./profile.module.css"

import { toggleShowName } from "../store/profile";



export function Profile() {
    const { showName, name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);


    return (
        <div>
            <h4 className = {styles.colored}>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    );
}


