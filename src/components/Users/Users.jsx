import React from "react";
import s from './Users.module.css';
import userPhoto from '../../../src/static/images/noava.png'
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) =>{ 
    let pageCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for(let i = 1;i <= pageCount; i++){
        pages.push(i);
    }
    return(
        <div className={s.users}>
                <div>
                    {pages.map(el => 
                        <span onClick={(event) => {props.change_page(el);}} className={props.currentPage === el && s.selectPage}>{el}</span>
                    )}
                </div>
                    {props.users.map(el => <div key={el.id}>
                        <span>
                            <NavLink to={'/profile/' + el.id}>
                                <div className={s.users_img}>
                                    {el.photos.small != null ? <img src={el.photos.small} alt=''/> : <img src={userPhoto} alt=''/>}
                                </div> 
                            </NavLink>

                            <div>
                                {el.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                        withCredentials:true,
                                        headers: {"API-KEY":"e589b84d-1e31-4733-9476-64b9080e99f1"}
                                    })
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.remove_user(el.id);
                                        }
                                    })
                                    
                                }}>Remove</button> : 
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                        withCredentials:true,
                                        headers: {"API-KEY":"e589b84d-1e31-4733-9476-64b9080e99f1"}
                                    })
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.add_user(el.id);
                                        }
                                    })
                                    props.add_user(el.id);
                                }}>Add</button>}
                            </div>
                        </span>
                        <span>
                            <div>
                                {el.name}
                            </div>
                            <div className={s.users_status}>
                                {el.status}
                            </div>
                            <div>
                                {el.city}
                            </div>
                            <div>
                                {el.country}
                            </div>
                        </span>
                    </div>)}
                
            </div>
    );
}

export default Users;