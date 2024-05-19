import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'الرجاء إدخال بريد إلكتروني صحيح' }),
  password: z.string().min(6, { message: 'يجب أن تحتوي كلمة المرور على الأقل على ٦ أحرف' }).max(30, { message: 'يجب ألا تتجاوز كلمة المرور ٣٠ حرفًا' }),
  send_emails: z.string().optional({ message: 'يمكن ترك خيار البريد الإلكتروني فارغًا' }),
});

export const SignUpSchema = z.object({
  name: z.string().min(3, { message: 'الاسم يجب أن يتكون من ٣ أحرف على الأقل' }).max(30, { message: 'الاسم يجب ألا يتجاوز ٣٠ حرفًا' }),
  email: z.string().email({ message: 'الرجاء إدخال بريد إلكتروني صحيح' }),
  password: z.string().min(6, { message: 'يجب أن تحتوي كلمة المرور على الأقل على ٦ أحرف' }).max(30, { message: 'يجب ألا تتجاوز كلمة المرور ٣٠ حرفًا' }),
});

export const ResetPasswordSchema = z.object({
 password : z.string().min(6, { message: 'يجب أن تحتوي كلمة المرور على الأقل على ٦ أحرف' }).max(30, { message: 'يجب ألا تتجاوز كلمة المرور ٣٠ حرفًا' }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
