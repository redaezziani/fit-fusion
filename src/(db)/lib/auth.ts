'use server';
import { SignJWT, jwtVerify } from 'jose';
import db, { secret } from '../secrets';
import { cookies } from 'next/headers';
import { Resend } from 'resend';
import  EmailTemplate  from './email-template';
import  ResetPasswordTemplate  from './reset-passowrd-template';

const key = new TextEncoder().encode(secret.jwt_secret);

export const createToken = async (user: any) => {
    try {
        const payload = {
            id: user.id,
            email: user.email,
            username: user.name,
            profile: user.image ?? '',
            role: user.role,
        };
        const token = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .sign(key);
        return token;
    } catch (error) {
        console.log(error);
    }
};

export const verifyToken = async (token: string) => {
    try {
        const result = await jwtVerify(token, key, { algorithms: ['HS256'] });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const logOut = async () => {
    cookies().set('token', '', {
        path: '/',
        maxAge: 0,
    });
    return { status: 'success', message: 'logged out' };
};

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.users.findFirst({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        console.log(error);
    }
};

const resend = new Resend(process.env.RESEND_API_KEY);
interface dataTypes {
    name: string;
    token: string;
    email: string;
    id: string;
}

export const VereficationEmail = async ({ email, name, token, id }: dataTypes) => {
    try {
        const { data, error } = await resend.emails.send({
            to: email,
            from: 'zunder@dimach9.online',
            subject: 'Verify your email',
            text: 'Verify your email to continue',
            react: EmailTemplate({ firstName: name, token: token, email: email, id: id }),
        });
        if (error) {
            return false;
        }
        return true;
    } catch (error) {
        return { status: 'error', message: 'Something wrong! Try again later.' };
    }
};

export const generateRandomNumbers = async () => {
    return Math.random().toString().slice(2, 8).toString();
};

export const getUserSession = async () => {
    try {
        const token = cookies().get('token')?.value;
        if (!token) {
            return { status: 'error', message: 'No token found' };
        }
        const user = await verifyToken(token);
        return user?.payload;
    } catch (error) {
        console.log(error);
    }
};

export const generateRestePasswordToken = async (email: string, token: string) => {
    try {
        const payload = {
            token: token,
            email: email,
        };
        const secret = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .sign(key);
        return secret;
    } catch (error) {
        console.log(error);
        return { status: 'error', message: 'Something wrong! Try again later.' };
    }
};
export const getResetPasswordToken = async (secret: string) => {
    try {
        const result = await jwtVerify(secret, key, { algorithms: ['HS256'] });
        return result;
    } catch (error) {
        console.log(error);
        return { status: 'error', message: 'Something wrong! Try again later.' };
    }
}
export const ResetPassowrdEmail = async (secret: string, name: string, email: string) => {
    try {
        const { data, error } = await resend.emails.send({
            to: email,
            from: 'zunder@dimach9.online',
            subject: 'Reset your password',
            text: 'Reset your password',
            react: ResetPasswordTemplate({ secret, name, email }),
        });
        if (error) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return { status: 'error', message: 'Something wrong! Try again later.' };
    }
};



