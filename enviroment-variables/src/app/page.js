
export default function Home() {
  console.log('company Name : ',process.env.COMPANY_NAME)
  let myenvVariable = process.env.COMPANY_NAME ? process.env.COMPANY_NAME : "Default Company"
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>{process.env.MESSAGE}</h1>
        {/* Enviroment specfici variables */}
        <h1>From ".Env" {process.env.NAME}</h1>

        {/* Define variable which may not present in any env */}
        <h1>Fallback Message { myenvVariable}</h1>
        
      </main>
    </div>
  );
}
