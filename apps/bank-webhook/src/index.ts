import express, { Express, Request, Response } from "express";
import prisma from "@repo/coindb/client";

const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req: Request, res: Response) => {
    //TODO: Add zod validation here?
    // check if this request actually came form HDFC bank
    const paymentInformation: {
        token: string
        userId: string
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    // Update balance in prisma, add txn

    try {
        await prisma.$transaction([
            prisma.balance.update({
                where: {
                    userId: Number(paymentInformation.userId) 
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch (e) {
        console.error(e);
        return res.status(411).json({
            message: "Error while processing webhook"
        })
    }
})

app.listen(4000)