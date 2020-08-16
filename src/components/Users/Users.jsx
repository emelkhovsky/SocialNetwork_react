import React from "react";
import s from './Users.module.css';
import userPhoto from '../../../src/static/images/noava.png'

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
                            <div className={s.users_img}>
                                {el.photos.small != null ? <img src={el.photos.small} alt=''/> : <img src={userPhoto} alt=''/>}
                            </div>
                            <div>
                                {el.followed ? <button onClick={() => {props.remove_user(el.id)}}>Remove</button> : 
                                <button onClick={() => {props.add_user(el.id)}}>Add</button>}
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