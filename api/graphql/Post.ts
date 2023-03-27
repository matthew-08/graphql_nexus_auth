import { arg, booleanArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";

export const Post = objectType({
    name: 'Post',
    definition(t) {
        t.int('id')
        t.string('title')
        t.string('body')
        t.boolean('published')
    },
})

export const PostQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('drafts', {
            type: 'Post', 
            resolve(_root, _args, ctx) {
                return ctx.db.posts.filter(p => p.published === false)
            },
        }),
        t.nonNull.list.field('publishedPosts', {
            type: 'Post',
            resolve(_root, _args, ctx) {
                return ctx.db.posts.filter(p => p.published)
            }
        })
    }
})

export const PostMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createDraft', {
            type: 'Post', 
            args: {
                title: nonNull(stringArg()),
                body: nonNull(stringArg())
            },
            resolve(_root, {title, body}, ctx){
                const draft = {
                    id: ctx.db.posts.length + 1,
                    title,
                    body,
                    published: false,
                }
                return draft
            }
        }),
        
        t.nonNull.field('publish', {
            type: 'Post',
            args: {
                id: nonNull(intArg()),
                published: nonNull(booleanArg())
            },
            resolve(_root, { id, published }, ctx) {
                const postToPublish = ctx.db.posts.find(p => p.id === id)
                if(postToPublish) {
                    postToPublish.published = published
                }
                else {
                    throw new Error('Could not find draft with id' + id)
                }
                return {
                    ...postToPublish,
                    published: published,
                }
            }
            })
    },
    
})

