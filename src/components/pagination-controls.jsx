import useTaskStore from "../store/useTaskStore";

const PaginationControls = () => {
    const { pagination, goToPage } = useTaskStore();

    return (
        <div className="flex flex-col items-center text-white px-4 py-2 rounded-md space-y-2">
            <div className="flex justify-between items-center w-full space-x-4">
                <button
                    onClick={() => goToPage(pagination.page - 1)}
                    disabled={pagination.page === 0}
                    className="px-4 py-2 text-sm font-bold uppercase tracking-widest bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-sm font-medium tracking-wider">
                    Page <span className="font-bold">{pagination.page + 1}</span> of <span className="font-bold">{pagination.totalPages}</span>
                </span>
                <button
                    onClick={() => goToPage(pagination.page + 1)}
                    disabled={pagination.page + 1 >= pagination.totalPages}
                    className="px-4 py-2 text-sm font-bold uppercase tracking-widest bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationControls;