import { extendType, objectType, queryType } from "nexus";

export const Test = objectType({
    name: 'Slow',
    definition(t) {
        t.string("slow")
    },
})

const TestQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('slow', {
            type: 'Slow',
            async resolve(_root, _args, ctx) {
                await new Promise((resovlve) => setTimeout(resovlve, 5000))
                return 'slow'
            }
        })
    },
})   