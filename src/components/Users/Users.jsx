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
                                    props.unfollow(el.id).then(data => {
                                        if(data.resultCode === 0){
                                            props.remove_user(el.id);
                                        }
                                    })
                                    
                                }}>Remove</button> : 
                                <button onClick={() => {
                                    props.follow(el.id).then(data => {
                                        if(data.resultCode === 0){
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