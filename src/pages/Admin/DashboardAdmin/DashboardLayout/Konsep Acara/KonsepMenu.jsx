
import KonsepTable from './KonsepTable';

const KonsepMenu = () => {
   

    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <div className='flex flex-row'>
                <h1 className="text-[36px] m-5">Konsep Acara</h1>
            </div>
            <div className="flex justify-between mb-4">
                <KonsepTable />
            </div>
        </div>
    );
};

export default KonsepMenu