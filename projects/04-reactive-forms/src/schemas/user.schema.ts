import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "the name is required"),
    email: z.string().email("the email is invalid").min(1, "el the email is required"),
    password: z.string().min(6, "the password should be at least 6 characters"),
    confirmPassword: z.string().min(6, "the confirm password should be at least 6 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "the password does not match",
    path: ['confirmPassword']
});


