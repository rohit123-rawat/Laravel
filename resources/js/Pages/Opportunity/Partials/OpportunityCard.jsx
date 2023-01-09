import { Link } from '@inertiajs/inertia-react';
import moment from "moment/moment";

export default function OpportunityCard({ opportunity }) {

    return (
        <div className="relative rounded-xl overflow-auto bg-white shadow px-4 pt-4 pb-6">
            <h3 className="text-xl font-bold mb-1">{opportunity.name}</h3>
            <p className="leading-5 mb-3 text-gray-500 text-sm">{moment(opportunity.created_at).format('DD MMM, YYYY')}</p>
            <p className="leading-5 mb-6">{opportunity.description}</p>
            <Link href={route('opportunities.show', opportunity.id)} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Apply Now</Link>
        </div>
    );
}
