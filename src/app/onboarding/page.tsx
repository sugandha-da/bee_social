export default function OnboardingPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-8 bg-zinc-50 dark:bg-black">
            <div className="w-full max-w-md p-8 border rounded-lg bg-white dark:bg-zinc-900 shadow-lg">
                <h1 className="text-2xl font-bold mb-2">Welcome to BeeSocial</h1>
                <p className="text-muted-foreground mb-6">Let&apos;s set up your brand profile.</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Brand Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="e.g. Riya's Fashion"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Business Category</label>
                        <select className="w-full p-2 border rounded-md">
                            <option>Fashion</option>
                            <option>Food & Beverage</option>
                            <option>Health & Beauty</option>
                            <option>Home Decor</option>
                        </select>
                    </div>
                    <button type="button" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                        Create Profile
                    </button>
                </form>
            </div>
        </div>
    );
}
