
export default function footer() {
const currentYear = new Date().getFullYear();
return (
    <footer className="fixed inset-x-0 bottom-0 flex  flex-col items-center bg-neutral-900 text-center text-white w-full p-4 text-center">
        <p>&copy; {currentYear} Krm. All rights reserved.</p>
    </footer>
    );
};              
