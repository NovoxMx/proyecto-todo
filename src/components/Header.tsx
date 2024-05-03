export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-4">
            <div className="bg-base-100 drop-shadow-lg mr-6 ml-6 rounded-md h-20 flex justify-center items-center dark:bg-black ">
                <div className="text-4xl font-bold dark:text-white"> {children} </div>
            </div>
        </div>
    );
}