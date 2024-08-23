"use client"
import GetAllContacts from "../../app/lib/actions/contactFunc";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContactCard } from "./ContactCard";

export default function SelectContact ({ searchTerm, data, setFunc }: { 
searchTerm?: string,
data : {
    givenName: string | null;
    ContactPhone: string;
    contactProfile: string | null;
}[],
    setFunc: Dispatch<SetStateAction<{ givenName: string | null; ContactPhone: string; contactProfile: string | null; }[]>>
}) {
    const [contactsArray, setArray] = useState<{
        givenName: string | null;
        ContactPhone: string;
        contactProfile: string | null;
    }[]
    >([])

    console.log(searchTerm)

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
        <div className="flex flex-wrap bg-[#8a8290] p-2 rounded-b-lg">
            {contactsArray?.map(u => <ContactCard 
                ClickFunc={() => 
                    setFunc(prev => ([...prev, { givenName: u.givenName, contactProfile: u.contactProfile, ContactPhone: u.ContactPhone }])
                )} 
                name={String(u.givenName)} 
                imgUrl={u.contactProfile!}>{ u.givenName?.split(' ').at(0) }
            </ContactCard>)}
        </div>
    );
}