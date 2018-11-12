const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'), 
    item: forwardTo('db'),
    // async items(parent, args, ctx, info ) {
    //     console.log('getting items!!');
    //     const items = await ctx.db.query.items();
    //     return items;


    // }
    // dogs(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     return global.dogs;
    // },

};

module.exports = Query;
