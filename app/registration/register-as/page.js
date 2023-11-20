import Link from "next/link";

export default function RegisterAsPage(props){
    return(
        <div className="flex gap-4 justify-items-auto">
            <Link href={"/registration/organization"}>
                Organization
            </Link>
            <Link href={"/registration/indivisual"}>
                Indivisual
            </Link>
        </div>
    );
}