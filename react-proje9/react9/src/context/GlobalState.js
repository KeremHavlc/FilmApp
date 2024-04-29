import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";


export const GlobalContext = createContext();

    const initialState = {
        watchlist:localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")):[],
        watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")):[],
    };

export const GlobalProvider = (props)=>{
    
    const [state , dispatch ]= useReducer(AppReducer,initialState);

    useEffect(()=>{
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },[state]);
    useEffect(()=>{
        localStorage.setItem("watched", JSON.stringify(state.watched));
    },[state]);

    const addMovieToWatchList = (movie)=>{
        dispatch({type:"ADD_MOVİE_TO_WATCHLİST", payload:movie});
    };
    const removeMovieFromWatchList =(id)=>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST", payload:id});
    };
    const addMovieToWatched = (movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie});
    };
    const moveToWatchedList=(movie)=>{
        dispatch({type:"MOVE_TO_WATCHED",payload:movie});
    };
    const removeMovieFromWatched =(id)=>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCHED", payload:id});
    };
    return (
        <GlobalContext.Provider value={{
            watchlist:state.watchlist,
            watched:state.watched,
            removeMovieFromWatchList,
            addMovieToWatchList,
            addMovieToWatched,
            moveToWatchedList,
            removeMovieFromWatched,
        }}>
        {props.children}
        </GlobalContext.Provider>
    )
}