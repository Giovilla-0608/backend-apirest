import z from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error:'Username is required'
    }),
    email: z.string({
        required_error:'Email is required'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error: 'required password'
    }).min(7,{
        message: 'el password debe tener como minimo 7 caracteres'
    })

})

export const loginSchema = z.object({
    email: z.string({
        required_error:'Email is required'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error: 'required password'
    }).min(7,{
        message: 'el password debe tener como minimo 7 caracteres'
    })
})