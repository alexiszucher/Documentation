import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { connectUser } from "../redux/actions";

export const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const logged = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const submit = (user) => {
        dispatch(connectUser(user.email, user.password));
    };

    return(<div>
        <form onSubmit={handleSubmit(submit)}>
        <br /><br />
            Email <input type="email" {...register('email', { required: true })} data-testid="email" /><br /><br />
            Mot de passe <input type="password" {...register('password', { required: true })} data-testid="password" /><br /><br />
            <button type="submit">Se connecter</button>
        </form>
    </div>);
}