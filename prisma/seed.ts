import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput [] = [
    {
        email: "robertnavachi19@gmail.com",
        name: "Roberto Nava Chimal",
        posts: {
            create: [
                {
                    title:"",
                    content:"",
                    published: true
                }
            ]
        }
    }
]

async function main () {
    console.log ('sending....');
    for ( const u of userData ){
        const user = await prisma.user.create ({
            data: u
        });
    }    
}