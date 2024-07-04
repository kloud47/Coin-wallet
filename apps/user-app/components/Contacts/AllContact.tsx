"use client"
import { UserCard } from "@repo/ui/user-card";
import GetAllContacts from "../../app/lib/actions/contactFunc";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function () {
    const [contactsArray, setArray] = useState<{
        givenName: string | null;
        ContactPhone: string;
        contactProfile: string | null;
    }[]
    >([])

    useEffect(() => {
        const getContacts = async () => {
            try {
                const contactData = await GetAllContacts();
                setArray(contactData)
                console.log(contactData)
            } catch (e: any) {
                console.log("Someting up with the DB");
            }
        }
        getContacts();
    },[])


    return (
        <div className="flex flex-wrap mt-6 bg-[#8a8290] rounded-xl p-2">
            {contactsArray?.map(u => <UserCard phone={String(u.ContactPhone)} name={String(u.givenName)} imgUrl={u.contactProfile!}>{ u.givenName?.split(' ').at(0) }</UserCard>)}
        </div>
    );
}