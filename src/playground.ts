import { db } from "./server/db";

await db.user.create({
    data:{
        emailAddress:'test@gmail.com',
        firstName:'John',
        lastName:'heyy'
    }
})
console.log('done')