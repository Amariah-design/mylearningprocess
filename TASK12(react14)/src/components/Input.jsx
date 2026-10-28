export default function Input({ ...others }) {
    return (
        <div>
            <input
                {...others}
                type="text"
                placeholder="Enter Text"
                className="border-2 border-gray-600 px-5 py-3 my-1 w-110 rounded-2xl mb-1"
            />
        </div>
    );
}
