import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Show({ auth, opportunity }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {opportunity.name}
                </h2>
            }
        >
            <Head title="Opportunities" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                   {opportunity.description}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
