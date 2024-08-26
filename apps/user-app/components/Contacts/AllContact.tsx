"use client"
import { UserCard } from "@repo/ui/user-card";
import { SearchAllContacts } from "../../app/lib/actions/contactFunc";
import { useEffect, useState } from "react";

export default function ({ searchTerm }: { searchTerm: string }) {
    const [contactsArray, setArray] = useState<{
        givenName: string | null;
        ContactPhone: string;
        contactProfile: string | null;
    }[]
    >([])

    useEffect(() => {
        const getContacts = async () => {
            try {
                const contactData = await SearchAllContacts(searchTerm);
                setArray(contactData)
                console.log(contactData)
            } catch (e: any) {
                console.log("Someting up with the DB");
            }
        }
        getContacts();
    },[searchTerm])


    return (
        <div className="flex flex-wrap mt-6 bg-[#8a8290] rounded-xl p-2">
            {contactsArray?.map(u => <UserCard name={String(u.givenName)} imgUrl={u.contactProfile!}>{ u.givenName?.split(' ').at(0) }</UserCard>)}
        </div>
    );
}