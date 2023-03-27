import { extendType, inputObjectType, objectType } from 'nexus'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


export const AuthPayload = objectType({
    name: 'AuthPayload',
    definition(t) {
        t.string('name')
        t.string('token')
    },
})


export const UserRegisterInputType = inputObjectType({
    name: 'UserRegister',
    definition(t) {
        t.nonNull.string('email'),
        t.nonNull.string('name'),
        t.nonNull.string('password'),
        t.nonNull.string('confirmPassword')
    },   
})

export const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.id('id')
        t.nonNull.string('name'),
        t.nonNull.string('user')
    },
})

 export const userRegisterAttempt = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('register', {
            type: 'AuthPayload',
            args: {
                data: UserRegisterInputType
            },
            async resolve(_root, args, ctx) {
                console.log(ctx.request);
                const {name, email, password} = args.data!
                const passhash = await hash(args.data!.password, 10)
                const user = await ctx.db.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: passhash
                    }
                })
                const token = await sign({ userId: user.id }, 'hello')
                return {
                    name: 'test',
                    token: token,
                }

        }
        })
        
    },
})