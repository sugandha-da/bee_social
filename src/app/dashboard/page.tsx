export default function DashboardPage() {
    return (
        <div className="flex min-h-screen flex-col p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg shadow-sm bg-card">
                    <h2 className="font-semibold text-lg">Upcoming Posts</h2>
                    <p className="text-muted-foreground mt-2">No posts scheduled.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-sm bg-card">
                    <h2 className="font-semibold text-lg">Weekly Plan</h2>
                    <p className="text-muted-foreground mt-2">Generate your first plan.</p>
                </div>
            </div>
        </div>
    );
}
